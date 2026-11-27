/* EduBridge - bilingual guided learning platform (static, no build step) */
(function(){
'use strict';

// ---------- State ----------
const store = {
  get(k,d){ try{const v=localStorage.getItem('eb_'+k); return v?JSON.parse(v):d;}catch(e){return d;} },
  set(k,v){ try{localStorage.setItem('eb_'+k,JSON.stringify(v));}catch(e){} }
};
let lang = store.get('lang','ar');
let age  = store.get('age',null);       // child | teen | university
const AGE_LABEL = {child:['طفل','Child'], teen:['مراهق','Teen'], university:['جامعي','University']};
// Per-age experience: tab order, default tab, voice pace, and tone. Teen keeps the original defaults.
const AGE_META = {
  child:{tabs:['story','explain','quiz','video','d3'], defTab:'story', rate:0.88, pitch:1.15,
    heroEyebrow:['مغامرة التعلّم · ٢٠٢٦','Learning adventure · 2026'],
    heroSub:['حكايات وألعاب وكويزات بالعربي والإنجليزي، ومجسمات تلعب فيها بصوابعك. اختاري حكاية وابدئي المغامرة!','Stories, games and quizzes in Arabic and English, with models you can play with. Pick a story and start the adventure!'],
    greet:['أهلاً يا بطل! أنا مرشد إديوبرج. اسألني عن أي حاجة، أو دوس على سؤال من اللي تحت.','Hello, hero! I am the EduBridge mentor. Ask me anything, or tap a question below.'],
    sugg:[['إيه هو البركان؟','ليه السما لونها أزرق؟','احكيلي عن الديناصورات','إزاي النحلة بتعمل عسل؟'],['What is a volcano?','Why is the sky blue?','Tell me about dinosaurs','How do bees make honey?']],
    closers:[['برافو عليك! سؤالك كان جميل جداً ⭐','أنت بطل! خليك دايماً بتسأل ليه 🌟','عاش! كل سؤال بتسأله بيكبّر عقلك 🎈'],['Well done! That was a lovely question ⭐','You are a star! Keep asking why 🌟','Yay! Every question you ask grows your brain 🎈']]},
  teen:{tabs:['explain','story','quiz','video','d3'], defTab:'explain', rate:0.95, pitch:1.05},
  university:{tabs:['explain','quiz','video','d3'], defTab:'explain', rate:1.0, pitch:1.0,
    heroEyebrow:['منصة دراسة أكاديمية · ٢٠٢٦','An academic study platform · 2026'],
    heroSub:['لكل موضوع ملخص أكاديمي مكتوب بمستوى جامعي: إطار نظري دقيق، وآلية، وأدلة، وحدود للمعرفة، مع مصطلحات أساسية ومراجع للتعمق.','Every topic has an academic brief written at university level: precise framing, mechanism, evidence and the limits of current knowledge, with key terms and references for depth.'],
    greet:['أهلاً بك. أنا مرشد إديوبرج الموجه؛ أجيب من محتوى موثق بالمصادر عن موضوعات المكتبة.','Welcome. I am the EduBridge guided mentor; I answer from source-cited content on the library topics.'],
    sugg:[['اشرح لي الذكاء الاصطناعي بأسلوب بسيط','ساعدني في بحث عن الطاقة المتجددة','ما هي مراحل الانقسام الاختزالي؟','لخص لي نظرية المعرفة'],['Explain artificial intelligence simply','Help me outline research on renewable energy','What are the stages of meiosis?','Summarize epistemology']],
    closers:[['بالتوفيق في دراستك.','إجابة موثقة يمكنك الاعتماد عليها في مذاكرتك.','راجع المصدر المرفق لمزيد من التفصيل.'],['Good luck with your studies.','A sourced answer you can rely on.','Check the attached source for more detail.']]}
};
function ageMeta(){ return AGE_META[age||'teen'] || AGE_META.teen; }
function applyAge(){ document.body.dataset.age = age||'teen'; }

// ---------- i18n ----------
function applyLang(){
  document.documentElement.lang = lang;
  document.documentElement.dir  = lang==='ar' ? 'rtl' : 'ltr';
  document.querySelectorAll('[data-en]').forEach(el=>{
    if(!el.dataset.ar) el.dataset.ar = el.innerHTML;
    el.innerHTML = lang==='en' ? el.dataset.en : el.dataset.ar;
  });
  document.getElementById('langAr').classList.toggle('active', lang==='ar');
  document.getElementById('langEn').classList.toggle('active', lang==='en');
  document.getElementById('ageChip').textContent = age ? AGE_LABEL[age][lang==='ar'?0:1] : (lang==='ar'?'المرحلة العمرية':'Age stage');
  document.title = lang==='ar' ? 'EduBridge | مرشد تعلّم للمواضيع المتاحة' : 'EduBridge | A guided mentor for covered topics';
  applyAge();
}
function setLang(l){ lang=l; store.set('lang',l); applyLang(); route(); }

// ---------- Voice (Web Speech API, on-device, no keys) ----------
function ttsAvailable(){ return 'speechSynthesis' in window; }
function ttsStop(){
  if(!ttsAvailable()) return;
  speechSynthesis.cancel();
  document.querySelectorAll('.tts-btn.playing,.tts-mini.playing').forEach(b=>{ b.classList.remove('playing'); b.textContent=b.dataset.label; });
}
function ttsSpeak(text, btn, speechLang){
  speechLang=speechLang||lang;
  if(!ttsAvailable()) return;
  if(btn && btn.classList.contains('playing')){ ttsStop(); return; }
  ttsStop();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = speechLang==='ar' ? 'ar-SA' : 'en-US';
  const vs = speechSynthesis.getVoices();
  const pref = speechLang==='ar' ? ['ar-eg','ar-sa','ar'] : ['en-us','en-gb','en'];
  let v=null;
  for(const p of pref){ v = vs.find(x=>x.lang && x.lang.toLowerCase().startsWith(p)); if(v) break; }
  if(v) u.voice = v;
  const _m=ageMeta();
  u.rate = _m.rate;   // age-tuned teacher pace
  u.pitch = _m.pitch;
  if(btn){
    btn.classList.add('playing');
    btn.textContent = lang==='ar' ? '⏹ إيقاف' : '⏹ Stop';
    const reset=()=>{ btn.classList.remove('playing'); btn.textContent=btn.dataset.label; };
    u.onend = reset; u.onerror = reset;
  }
  speechSynthesis.speak(u);
}
if(ttsAvailable()) speechSynthesis.getVoices();  // warm the voice list on load

// ---------- Onboarding ----------
function showOnboarding(){
  const ob = document.getElementById('onboarding');
  const body = document.getElementById('obBody');
  ob.classList.remove('hidden');
  body.innerHTML = `
    <span class="step-tag">${lang==='ar'?'الخطوة ١ من ٢ · اللغة':'Step 1 of 2 · Language'}</span>
    <h3>${lang==='ar'?'أولاً، بأي لغة يتحدث معك المرشد؟':'First, which language should the mentor speak?'}</h3>
    <p>${lang==='ar'?'يمكنك التبديل في أي وقت من الشريط العلوي.':'You can switch anytime from the top bar.'}</p>
    <div class="choice-row">
      <button id="obAr">ع<br>العربية<br><small>من اليمين إلى اليسار</small></button>
      <button id="obEn">EN<br>English<br><small>Left to right</small></button>
    </div>`;
  document.getElementById('obAr').onclick = ()=>{ obStep2('ar'); };
  document.getElementById('obEn').onclick = ()=>{ obStep2('en'); };
}
function obStep2(l){
  lang=l; store.set('lang',l); applyLang();
  const body = document.getElementById('obBody');
  body.innerHTML = `
    <span class="step-tag">${lang==='ar'?'الخطوة ٢ من ٢ · المرحلة':'Step 2 of 2 · Stage'}</span>
    <h3>${lang==='ar'?'اختيار المرحلة العمرية':'Choose your age stage'}</h3>
    <p>${lang==='ar'?'الشكل والصوت وأسلوب الشرح يتكيّفون مع المرحلة التي تختارها، ويمكنك تغييرها في أي وقت.':'The look, voice and teaching style adapt to the stage you choose, and you can change it anytime.'}</p>
    <div class="choice-row">
      <button data-age="child">${lang==='ar'?'🧒 طفل ٦-١١':'🧒 Child 6-11'}</button>
      <button data-age="teen">${lang==='ar'?'🎧 مراهق ١٢-١٧':'🎧 Teen 12-17'}</button>
      <button data-age="university">${lang==='ar'?'🎓 جامعي ١٨+':'🎓 University 18+'}</button>
    </div>`;
  body.querySelectorAll('[data-age]').forEach(b=>b.onclick=()=>{
    age=b.dataset.age; store.set('age',age);
    document.getElementById('onboarding').classList.add('hidden');
    applyLang(); route();
  });
}

// ---------- Mentor knowledge base ----------
// Returns {text, src, chips}: answer text, a source URL to cite under it, and lesson chips for the fallback.
function mentorAnswer(q){
  function normalized(t){ return t.toLowerCase().normalize('NFKC').replace(/[\u064b-\u065f\u0670\u0640]/g,'').replace(/[أإآ]/g,'ا'); }
  const s = normalized(q);
  function matches(term){
    const n=normalized(term);
    if(!n)return false;
    if(/^[a-z0-9 ]+$/.test(n)){
      const escaped=n.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
      return new RegExp('(?:^|[^a-z0-9])'+escaped+(n.length<=3?'(?:$|[^a-z0-9])':'[a-z]*(?:$|[^a-z0-9])')).test(s);
    }
    return s.includes(n);
  }
  let authored=null, authoredLen=0;
  for(const answer of MENTOR_ANSWERS){
    for(const key of answer.keys){
      if(matches(key) && key.length>authoredLen){ authored=answer; authoredLen=key.length; }
    }
  }
  if(authored){
    const rel=authored.src && LESSONS.find(L=>L.src===authored.src);
    return {text:lang==='ar'?authored.ar:authored.en,textAr:authored.ar,textEn:authored.en,src:authored.src||null,urgent:!!authored.urgent,model:(rel&&window.EB3D&&EB3D.available(rel.id))?rel.id:null};
  }
  // 2) lesson explanations - prefer the longest matching title so "عضيات الخلية" beats "الخلية"
  let best=null, bestLen=0;
  for(const L of LESSONS){
    const names=[L.title,L.titleEn,L.id].concat(L.kw||[]).map(x=>x.toLowerCase());
    const hit = names.filter(n=>n.length>2 && matches(n)).sort((a,b)=>b.length-a.length)[0];
    if(hit && hit.length>bestLen){ best=L; bestLen=hit.length; }
  }
  if(best){
    // Answer at the stage the reader is actually in: kid note, teen text, or the academic brief.
    let bAr = best.ar, bEn = best.en;
    let extraAr='', extraEn='';
    if(age==='child' && typeof KID_NOTES!=='undefined' && KID_NOTES[best.id]){
      bAr = KID_NOTES[best.id].ar; bEn = KID_NOTES[best.id].en;
    } else if(age==='university' && typeof uniNote==='function'){
      const u = uniNote(best.id);
      if(u && u.ar){
        bAr = u.ar; bEn = u.en;
        if(u.terms && u.terms.length){
          extraAr = '\n\nمصطلحات أساسية: '+u.terms.join(' · ');
          extraEn = '\n\nKey terms: '+u.terms.join(' · ');
        }
      }
    }
    const headAr = age==='university'
      ? `سؤالك عن ${best.title}. هذا ملخص أكاديمي بمستوى جامعي:`
      : (age==='child' ? `سؤالك عن ${best.title}. خلينا نحكيها ببساطة:` : `سؤالك عن ${best.title}. إليك شرحاً مبسطاً:`);
    const headEn = age==='university'
      ? `You asked about ${best.titleEn}. This is the academic brief at university level:`
      : (age==='child' ? `You asked about ${best.titleEn}. Let us keep it simple:` : `You asked about ${best.titleEn}. Here is a simple explanation:`);
    const tAr = headAr+'\n\n'+bAr+extraAr;
    const tEn = headEn+'\n\n'+bEn+extraEn;
    return {text: lang==='ar'?tAr:tEn, textAr:tAr, textEn:tEn, src: best.src||null, model: (window.EB3D && EB3D.available(best.id)) ? best.id : null};
  }
  // 3) honest fallback, suggesting the closest covered topics
  const words = s.split(/[^a-z\u0621-\u064a0-9]+/).filter(w=>w.length>3);
  const close = LESSONS.filter(L=>words.some(w=>(L.title+' '+L.titleEn+' '+L.ar+' '+L.en).toLowerCase().includes(w))).slice(0,3).map(L=>L.id);
  const fbAr = 'لا أملك إجابة موثوقة عن هذا السؤال بعد. أنا مرشد مُوجَّه أجيب من محتوى مكتوب بعناية، ولست ذكاءً اصطناعياً حياً.\n\nجرّب أحد الأسئلة المقترحة أسفل الصفحة، أو افتح أقرب موضوع من المكتبة.';
  const fbEn = 'I do not have a reliable answer for that yet. I am a guided mentor answering from carefully written content, not a live AI.\n\nTry one of the suggested questions below, or open the closest topic from the library.';
  return { text: lang==='ar'?fbAr:fbEn, textAr:fbAr, textEn:fbEn, src: null, fallback:true, chips: close.length ? close : null };
}

// ---------- Views ----------
const app = document.getElementById('app');
const esc = s=>s.replace(/</g,'&lt;');

function viewHome(){
  if(age==='child'){ viewKidHome(); return; }
  if(age==='university'){ viewUniHome(); return; }
  const m=ageMeta(), li=lang==='ar'?0:1;
  const chips = LESSONS.slice(0,6).map(L=>`<button data-topic="${L.id}">${L.emoji} ${lang==='ar'?L.title:L.titleEn}</button>`).join('');
  app.innerHTML = `
  <section class="hero">
    <span class="eyebrow">${m.heroEyebrow?m.heroEyebrow[li]:(lang==='ar'?'مرشد المستقبل · ٢٠٢٦':'Mentor of the future · 2026')}</span>
    <h1>${lang==='ar'?'اسأل وجرّب.<br><span class="grad">وافهم خطوة بخطوة.</span>':'Ask and explore.<br><span class="grad">Learn step by step.</span>'}</h1>
    <p class="sub">${m.heroSub?m.heroSub[li]:(lang==='ar'?'شروحات وقصص وكويزات بالعربية والإنجليزية للمواضيع المتاحة، مع نماذج تعليمية تفاعلية ومرشد موجه من محتوى مؤلف.':'Arabic and English explanations, stories and quizzes for covered topics, with interactive teaching models and an authored guided mentor.')}</p>
    <div class="askbar">
      <input id="heroQ" placeholder="${lang==='ar'?'اسأل عن موضوع من المكتبة، مثل الخلية أو الكهرباء':'Ask about a library topic, such as cells or electricity'}">
      <button class="btn-grad" id="heroGo">${lang==='ar'?'ابدأ الآن':'Start now'}</button>
    </div>
    <div class="topic-chips">${chips}</div>
    <div class="stats">
      <div><b>${LESSONS.length}</b><span>${lang==='ar'?'موضوعاً جاهزاً':'ready topics'}</span></div>
      <div><b>${lang==='ar'?'عربي + EN':'AR + EN'}</b><span>${lang==='ar'?'لغتان كاملتان':'two full languages'}</span></div>
      <div><b>${LESSONS.length}</b><span>${lang==='ar'?'نموذجاً تفاعلياً':'interactive models'}</span></div>
    </div>
    <div class="future">
      <small>${lang==='ar'?'رسالة من المستقبل':'MESSAGE FROM THE FUTURE'}</small>
      <b>${lang==='ar'?'مرحباً… أنا أنت، بعد عشرين عاماً.':'Hello. I am you, twenty years from now.'}</b>
      <p>${lang==='ar'?'الليلة ستطرح سؤالاً واحداً سيغيّر كل شيء. اطرحه.':'Tonight you will ask one question that changes everything. Ask it.'}</p>
    </div>
  </section>

  <section class="section">
    <p class="kicker">${lang==='ar'?'أوضاع التعلّم':'Learning modes'}</p>
    <h2>${lang==='ar'?'أربع طرق لفهم موضوع واحد':'Four ways to understand one topic'}</h2>
    <p class="lead">${lang==='ar'?'كل موضوع يمكن تعلّمه بأكثر من أسلوب. اختر الطريقة التي تناسبك وابدأ.':'Every topic can be learned in more than one style. Pick the one that suits you and start.'}</p>
    <div class="card-grid">
      <div class="card"><span class="emoji">📖</span><h3>${lang==='ar'?'الشرح المبسّط':'Simple explanation'}</h3><p>${lang==='ar'?'شرح واضح يوصّل الفكرة بأسهل طريقة ممكنة.':'A clear explanation in the simplest possible way.'}</p></div>
      <div class="card"><span class="emoji">📚</span><h3>${lang==='ar'?'القصة':'Story'}</h3><p>${lang==='ar'?'معلومة تتحول إلى قصة تثبّت الفكرة في الذاكرة.':'A fact turned into a story that sticks in memory.'}</p></div>
      <div class="card"><span class="emoji">🎯</span><h3>${lang==='ar'?'الكويز التفاعلي':'Interactive quiz'}</h3><p>${lang==='ar'?'اختبر نفسك بأسئلة سريعة واجمع نقاطك.':'Test yourself with quick questions and collect points.'}</p></div>
      <div class="card"><span class="emoji">🎬</span><h3>${lang==='ar'?'الفيديوهات':'Videos'}</h3><p>${lang==='ar'?'مقاطع ومصادر تساعدك على الفهم من زاوية أخرى.':'Clips and sources that help you understand from another angle.'}</p></div>
    </div>
  </section>

  <section class="section">
    <p class="kicker">${lang==='ar'?'مكتبة المواضيع':'Topic library'}</p>
    <h2>${lang==='ar'?'ابدأ بدرس جاهز':'Start with a ready lesson'}</h2>
    <div class="card-grid">${LESSONS.slice(0,6).map(lessonCard).join('')}</div>
    <p style="margin-top:16px"><a class="go" href="#/library" style="color:var(--primary);font-weight:800">${lang==='ar'?'تصفّح المكتبة الكاملة ←':'Browse the full library →'}</a></p>
  </section>`;
  document.getElementById('heroGo').onclick = heroAsk;
  document.getElementById('heroQ').addEventListener('keydown',e=>{if(e.key==='Enter')heroAsk();});
  app.querySelectorAll('[data-topic]').forEach(b=>b.onclick=()=>location.hash='#/lesson/'+b.dataset.topic);
  bindLessonCards();
}
// ---------- Child stage: calm and simple (v13) ----------
function kidStartLessons(){
  const ids=['cell','heart','solar','volcanoes','fossils','shapes2d'];
  return ids.map(id=>LESSONS.find(L=>L.id===id)).filter(Boolean);
}
function kidTile(L){
  return `<a class="card kid-card" href="#/lesson/${L.id}">
      <span class="kid-card-emoji">${L.emoji}</span>
      <span class="kid-card-title">${lang==='ar'?L.title:L.titleEn}</span>
      <span class="kid-card-go">${lang==='ar'?'يلا نبدأ':'Start'}</span>
    </a>`;
}
function viewKidHome(){
  const ar = lang==='ar';
  app.innerHTML = `
  <section class="kid-hero">
    <div class="kid-hello">
      <span class="kid-face">🐣</span>
      <h1>${ar?'أهلاً يا بطل':'Hello, hero'}</h1>
      <p>${ar?'اختار درس تحبه، أو العب لعبة صغيرة. كل حاجة سهلة وبسيطة.':'Pick a lesson you like, or play a little game. Everything here is easy and simple.'}</p>
      <div class="kid-actions">
        <a class="kid-btn kid-btn-main" href="#/library">${ar?'📚 الدروس':'📚 Lessons'}</a>
        <a class="kid-btn" href="#/games">${ar?'🎲 الألعاب':'🎲 Games'}</a>
        <a class="kid-btn" href="#/mentor">${ar?'💬 اسألني':'💬 Ask me'}</a>
      </div>
    </div>
  </section>

  <section class="section kid-section">
    <h2>${ar?'دروس سهلة':'Easy lessons'}</h2>
    <p class="kid-lead">${ar?'ستة دروس صغيرة تبدأ بيها.':'Six small lessons to start with.'}</p>
    <div class="kid-grid kid-grid-3">${kidStartLessons().map(kidTile).join('')}</div>
    <p class="kid-more"><a href="#/library">${ar?'شوف كل الدروس ←':'See all lessons →'}</a></p>
  </section>

  <section class="section kid-section">
    <h2>${ar?'ألعاب صغيرة':'Little games'}</h2>
    <p class="kid-lead">${ar?'تلات ألعاب بسيطة، من غير وقت ومن غير خسارة.':'Three simple games, no timer and no losing.'}</p>
    <div class="kid-grid kid-grid-3 kid-grid-games">
      <a class="card kid-card" href="#/games"><span class="kid-card-emoji">🃏</span><span class="kid-card-title">${ar?'طابق الصور':'Match'}</span></a>
      <a class="card kid-card" href="#/games"><span class="kid-card-emoji">🔢</span><span class="kid-card-title">${ar?'عدّ معايا':'Count'}</span></a>
      <a class="card kid-card" href="#/games"><span class="kid-card-emoji">🔍</span><span class="kid-card-title">${ar?'إيه المختلف؟':'Odd one out'}</span></a>
    </div>
  </section>`;
}
function viewGames(){
  const ar = lang==='ar';
  app.innerHTML = `
  <section class="section kid-games">
    <p class="kicker">${ar?'ألعاب صغيرة':'Little games'}</p>
    <h2>${ar?'العب براحتك':'Play at your own pace'}</h2>
    <p class="kid-lead">${ar?'من غير وقت ومن غير خسارة. خد وقتك.':'No timer, no losing. Take your time.'}</p>
    <div class="kid-game-list">
      <div class="card kid-game" id="gPairs"></div>
      <div class="card kid-game" id="gCount"></div>
      <div class="card kid-game" id="gOdd"></div>
    </div>
  </section>`;
  const mountGames = ()=>{
    if(!window.KID_GAMES) return false;
    KID_GAMES.mount(document.getElementById('gPairs'),'pairs',lang);
    KID_GAMES.mount(document.getElementById('gCount'),'count',lang);
    KID_GAMES.mount(document.getElementById('gOdd'),'odd',lang);
    return true;
  };
  if(!mountGames()) setTimeout(mountGames,120);
}

// ---------- University stage: academic briefs (v14) ----------
function uniNote(id){
  if(typeof UNI_NOTES_1!=='undefined' && UNI_NOTES_1[id]) return UNI_NOTES_1[id];
  if(typeof UNI_NOTES_2!=='undefined' && UNI_NOTES_2[id]) return UNI_NOTES_2[id];
  return null;
}
const UNI_REFS = {
  'أحياء':['Campbell Biology (Urry et al.), 12th ed.','Molecular Biology of the Cell (Alberts et al.)'],
  'كيمياء':['Atkins & de Paula, Physical Chemistry','Clayden et al., Organic Chemistry'],
  'فيزياء':['Halliday, Resnick & Walker, Fundamentals of Physics','The Feynman Lectures on Physics, Vol. I'],
  'رياضيات':['Stewart, Calculus: Early Transcendentals','Strang, Introduction to Linear Algebra'],
  'برمجة':['Cormen et al., Introduction to Algorithms','Goodfellow, Bengio & Courville, Deep Learning'],
  'فلك':['Carroll & Ostlie, An Introduction to Modern Astrophysics'],
  'ثانوية عامة':['Stewart, Calculus: Early Transcendentals','Halliday, Resnick & Walker, Fundamentals of Physics'],
  'علم نفس':['Eysenck & Keane, Cognitive Psychology','Schacter et al., Psychology'],
  'فلسفة':['Stanford Encyclopedia of Philosophy','Nagel, What Does It All Mean?'],
  'جيولوجيا':['Press & Siever, Understanding Earth','Prothero, Bringing Fossils to Life']
};
function uniRefsBox(L){
  const ar = lang==='ar';
  const books = UNI_REFS[L.cat] || [];
  const q = encodeURIComponent(L.titleEn);
  return `<div class="deep-box uni-refs"><b>${ar?'🔬 مراجع للتعمق':'🔬 References for depth'}</b>
    ${books.map(b=>`<span class="ref-item">📗 ${esc(b)}</span>`).join('')}
    <a target="_blank" rel="noopener" href="${esc(L.src)}">${ar?'المصدر الأساسي':'Primary source'}</a>
    <a target="_blank" rel="noopener" href="https://scholar.google.com/scholar?q=${q}">Google Scholar · ${esc(L.titleEn)}</a>
  </div>`;
}
function catLabel(cat, ar){
  if(age==='university' && cat==='ثانوية عامة') return ar?'مقررات أساسية':'Core courses';
  if(age==='university' && cat==='Secondary School') return 'Core courses';
  return cat;
}
function viewUniHome(){
  const ar = lang==='ar';
  const cats = [...new Set(LESSONS.map(L=>L.cat))];
  const catCards = cats.map(c=>{
    const sample = LESSONS.find(L=>L.cat===c);
    const lbl = ar ? catLabel(c,true) : catLabel(sample?sample.catEn:c,false);
    return `<a class="uni-cat" href="#/library"><b>${lbl}</b><span>${LESSONS.filter(L=>L.cat===c).length} ${ar?'موضوعاً':'topics'}</span></a>`;
  }).join('');
  const six = LESSONS.slice(0,6).map(L=>lessonCard(L)).join('');
  app.innerHTML = `
  <section class="hero uni-hero">
    <span class="eyebrow">${ar?'منصة دراسة أكاديمية · ٢٠٢٦':'An academic study platform · 2026'}</span>
    <h1>${ar?'ادرس الفكرة،<br><span class="grad">لا ملخصها.</span>':'Study the idea,<br><span class="grad">not its summary.</span>'}</h1>
    <p class="sub">${ar?'لكل موضوع ملخص أكاديمي مكتوب بمستوى جامعي: إطار نظري دقيق، وآلية، وأدلة، وحدود للمعرفة، مع مصطلحات أساسية ومراجع للتعمق.':'Every topic has an academic brief written at university level: precise framing, mechanism, evidence and the limits of current knowledge, with key terms and references for depth.'}</p>
    <div class="askbar">
      <input id="heroQ" placeholder="${ar?'ابحث عن موضوع، مثل الحفريات أو الاتزان الكيميائي':'Find a topic, such as fossils or chemical equilibrium'}">
      <button class="btn-grad" id="heroGo">${ar?'ابحث':'Search'}</button>
    </div>
    <div class="stats">
      <div><b>${LESSONS.length}</b><span>${ar?'موضوعاً':'topics'}</span></div>
      <div><b>${LESSONS.length}</b><span>${ar?'ملخصاً أكاديمياً':'academic briefs'}</span></div>
      <div><b>${LESSONS.length*3}</b><span>${ar?'مصطلحاً':'key terms'}</span></div>
      <div><b>${LESSONS.length}</b><span>${ar?'نموذجاً تفاعلياً':'interactive models'}</span></div>
    </div>
  </section>

  <section class="section">
    <p class="kicker">${ar?'منهج الدراسة':'How to study here'}</p>
    <h2>${ar?'ثلاث خطوات لكل موضوع':'Three steps per topic'}</h2>
    <p class="lead">${ar?'الملخص الأكاديمي ليس نسخة أطول من شرح المدرسة؛ إنه إعادة صياغة بمفاهيم ومصطلحات تخصّ المستوى الجامعي.':'The academic brief is not a longer version of the school explanation; it reframes the topic in university-level concepts and terminology.'}</p>
    <div class="card-grid">
      <div class="card"><span class="emoji">📄</span><h3>${ar?'الملخص الأكاديمي':'The academic brief'}</h3><p>${ar?'تعريف دقيق، ثم آلية العمل، ثم الأدلة التي تسنده، ثم ما لا نعرفه بعد.':'A precise definition, the mechanism, the evidence behind it, and what is still unknown.'}</p></div>
      <div class="card"><span class="emoji">🧪</span><h3>${ar?'اختبر الفهم':'Test understanding'}</h3><p>${ar?'كويز قصير لقياس الفهم لا الحفظ، مع نموذج ثلاثي الأبعاد حيث يلزم.':'A short quiz that tests understanding rather than recall, with a 3D model where it helps.'}</p></div>
      <div class="card"><span class="emoji">📚</span><h3>${ar?'وسّع بالمراجع':'Extend with references'}</h3><p>${ar?'كتاب مرجعي في التخصص وبحث Scholar ومصدر أساسي لكل درس.':'A standard textbook, a Scholar search and a primary source for every lesson.'}</p></div>
    </div>
  </section>

  <section class="section">
    <p class="kicker">${ar?'الحقول':'Fields'}</p>
    <h2>${ar?'عشرة حقول دراسية':'Ten fields of study'}</h2>
    <div class="uni-cats">${catCards}</div>
  </section>

  <section class="section">
    <p class="kicker">${ar?'ابدأ':'Start'}</p>
    <h2>${ar?'مواضيع مختارة':'Selected topics'}</h2>
    <div class="card-grid">${six}</div>
    <p style="margin-top:16px"><a class="go" href="#/library" style="color:var(--primary);font-weight:800">${ar?'كل المواضيع ←':'All topics →'}</a></p>
  </section>`;
  document.getElementById('heroGo').onclick = heroAsk;
  document.getElementById('heroQ').addEventListener('keydown',e=>{if(e.key==='Enter')heroAsk();});
}

function heroAsk(){
  const q = document.getElementById('heroQ').value.trim();
  const hit = LESSONS.find(L=>q && (q.includes(L.title)||q.toLowerCase().includes(L.titleEn.toLowerCase())));
  location.hash = hit ? '#/lesson/'+hit.id : '#/mentor'+(q?'?q='+encodeURIComponent(q):'');
}

function lessonCard(L){
  if(age==='child') return kidTile(L);
  if(age==='university'){
    const u = uniNote(L.id);
    const body = u ? (lang==='ar'?u.ar:u.en) : (lang==='ar'?L.ar:L.en);
    return `<div class="card uni-card">
      <span class="tag">${lang==='ar'?'ملخص أكاديمي':'Academic brief'} · ${catLabel(lang==='ar'?L.cat:L.catEn, lang==='ar')}</span>
      <h3>${L.emoji} ${lang==='ar'?L.title:L.titleEn}</h3>
      <p>${esc(body.slice(0,150))}…</p>
      <a class="go" href="#/lesson/${L.id}">${lang==='ar'?'افتح الملخص ←':'Open the brief →'}</a>
    </div>`;
  }
  return `<div class="card">
    <span class="emoji">${L.emoji}</span>
    <span class="tag">${lang==='ar'?L.cat:L.catEn}</span>
    <h3>${lang==='ar'?L.title:L.titleEn}</h3>
    <p>${(lang==='ar'?L.ar:L.en).slice(0,90)}…</p>
    <a class="go" href="#/lesson/${L.id}">${lang==='ar'?'ابدأ التعلّم ←':'Start learning →'}</a>
  </div>`;
}
function bindLessonCards(){}

function viewLibrary(){
  const cats=[...new Set(LESSONS.map(L=>lang==='ar'?L.cat:L.catEn))];
  app.innerHTML = `
  <section class="section">
    <p class="kicker">${lang==='ar'?'المكتبة':'Library'}</p>
    <h2>${lang==='ar'?(age==='child'?'اختار درس':'كل المواضيع الجاهزة'):(age==='child'?'Pick a lesson':'All ready topics')}</h2>
    <p class="${age==='child'?'kid-lead':'lead'}">${age==='child'
      ? (lang==='ar'?'اختار درس تحبه واضغط عليه. كل درس فيه حكاية ولعبة ومجسم.':'Pick a lesson you like and tap it. Every lesson has a story, a game and a model.')
      : (age==='university'
        ? (lang==='ar'?LESSONS.length+' موضوعاً، لكل موضوع ملخص أكاديمي ومصطلحات ومراجع للتعمق وكويز ونموذج تفاعلي. روابط البحث والفيديوهات الخارجية تحتاج اتصالاً بالإنترنت.':LESSONS.length+' topics, each with an academic brief, key terms, references, a quiz and an interactive model. External searches and videos need an internet connection.')
        : (lang==='ar'?LESSONS.length+' درساً بالشرح ومشهد تعليمي وكويز بالعربية والإنجليزية ونموذج تفاعلي. روابط البحث والفيديوهات الخارجية تحتاج اتصالاً بالإنترنت.':LESSONS.length+' lessons with explanations, stories, quizzes and models in Arabic and English. External searches and videos need an internet connection.'))}</p>
    <div class="mode-row" id="catRow">
      <button class="active" data-cat="">${lang==='ar'?'الكل':'All'}</button>
      ${cats.map(c=>`<button data-cat="${c}">${catLabel(c, lang==='ar')}</button>`).join('')}
    </div>
    <div class="${age==='child'?'kid-grid':'card-grid'}" id="libGrid">${LESSONS.map(lessonCard).join('')}</div>
  </section>`;
  document.getElementById('catRow').querySelectorAll('button').forEach(b=>b.onclick=()=>{
    document.querySelectorAll('#catRow button').forEach(x=>x.classList.remove('active'));
    b.classList.add('active');
    const c=b.dataset.cat;
    document.getElementById('libGrid').innerHTML = LESSONS.filter(L=>!c||(lang==='ar'?L.cat:L.catEn)===c).map(lessonCard).join('');
  });
}

function viewLesson(id, startTab){
  const L = LESSONS.find(x=>x.id===id);
  if(!L){ location.hash='#/library'; return; }
  const started = store.get('started',{});
  if(!started[id]){ started[id]=true; store.set('started',started); }
  app.innerHTML = `
  <section class="section">
    <a class="back-link" href="#/library">${lang==='ar'?'→ العودة إلى المواضيع':'← Back to topics'}</a>
    <h2>${L.emoji} ${lang==='ar'?L.title:L.titleEn}</h2>
    <span class="tag">${lang==='ar'?L.cat:L.catEn}</span>
    <p><a class="src-link" target="_blank" rel="noopener" href="${esc(L.src)}">${lang==='ar'?'المصدر: ':'Source: '}${esc(new URL(L.src).hostname.replace(/^www\./,''))}</a></p>
    <div class="lesson-tabs" id="lessonTabs"></div>
    <div class="lesson-body" id="lessonBody"></div>
  </section>`;
  const body = document.getElementById('lessonBody');
  const TAB_LABEL = age==='child'
    ? {story:['📖 الحكاية','📖 Story'],explain:['🔍 التفصيل','🔍 Details'],quiz:['🎯 اللعبة','🎯 Game'],video:['🎬 فيديو','🎬 Video'],d3:['🧊 المجسم','🧊 The model']}
    : {explain:['الشرح','Explanation'],story:['القصة','Story'],quiz:['الكويز','Quiz'],video:['فيديو','Video'],d3:['نموذج 3D','3D model']};
  const hasD3 = window.EB3D&&EB3D.available(id);
  const tabOrder = ageMeta().tabs.filter(t=>t!=='d3'||hasD3);
  document.getElementById('lessonTabs').innerHTML = tabOrder.map((t,i)=>`<button${i===0?' class="active"':''} data-tab="${t}">${TAB_LABEL[t][lang==='ar'?0:1]}</button>`).join('');
  const tabs = {
    explain: ()=>{
      if(age==='university'){
        const u = uniNote(id), ar = lang==='ar';
        if(u){
          let html=`<div class="uni-head"><span class="uni-badge">${ar?'ملخص أكاديمي · مستوى جامعي':'Academic brief · university level'}</span></div>`;
          html+=`<div class="uni-text${ar?'':' uni-text-en'}">${esc(ar?u.ar:u.en)}</div>`;
          if(u.terms && u.terms.length){
            html+=`<div class="uni-terms"><b>${ar?'مصطلحات أساسية':'Key terms'}</b><div class="term-row">${u.terms.map(t=>`<span class="term">${esc(t)}</span>`).join('')}</div></div>`;
          }
          return html+uniRefsBox(L);
        }
      }
      let html='';
      if(age==='child' && typeof KID_NOTES!=='undefined' && KID_NOTES[id]){
        const kn=KID_NOTES[id];
        html+=`<div class="kid-box"><b>${lang==='ar'?'💡 الفكرة ببساطة':'💡 The simple idea'}</b><p>${esc(lang==='ar'?kn.ar:kn.en)}</p></div>`;
      }
      html+=esc(lang==='ar'?L.ar:L.en);
      if(age==='university'){
        const q=encodeURIComponent(L.titleEn);
        html+=`<div class="deep-box"><b>${lang==='ar'?'🔬 للتعمق أكثر':'🔬 Go deeper'}</b><a target="_blank" rel="noopener" href="${esc(L.src)}">${lang==='ar'?'المصدر الأساسي':'Primary source'}</a><a target="_blank" rel="noopener" href="https://en.wikipedia.org/w/index.php?search=${q}">Wikipedia EN: ${esc(L.titleEn)}</a><a target="_blank" rel="noopener" href="https://scholar.google.com/scholar?q=${q}">Google Scholar</a></div>`;
      }
      return html;
    },
    story:   ()=> lang==='ar' ? esc(L.story) : (L.storyEn ? esc(L.storyEn) : `<div dir="rtl" lang="ar">${esc(L.story)}</div>`),
    video:   ()=>{
      const q = lang==='ar'?L.video:L.videoEn;
      return `<div class="video-links">
        <p>${lang==='ar'?'ابحث وشاهد أفضل المقاطع عن هذا الموضوع:':'Search and watch the best clips on this topic:'}</p>
        <a target="_blank" rel="noopener" href="https://www.youtube.com/results?search_query=${encodeURIComponent(q)}">▶ YouTube: ${esc(q)}</a>
        <a target="_blank" rel="noopener" href="https://www.youtube.com/results?search_query=${encodeURIComponent(lang==='ar'?L.videoEn:L.video)}">▶ YouTube: ${esc(lang==='ar'?L.videoEn:L.video)}</a>
      </div>`;
    },
    d3: ()=>`<div class="d3-wrap" id="d3Wrap"></div>
      <ul class="d3-legend" id="d3Legend"></ul>
      <p class="note">${lang==='ar'?'اسحب للتدوير، واضغط على جزء لتعرف اسمه ودوره. النماذج مخططات تعليمية مبسطة، وليست بمقياس حقيقي.':'Drag to rotate and tap a part for its name and role. Models are simplified teaching diagrams, not to scale.'}</p>`,
    quiz:    ()=> renderQuiz(L, body)
  };
  // voice: one persistent listen button reads the visible explain/story tab
  let curTab=(startTab && ['explain','story','quiz','video','d3'].includes(startTab) && (startTab!=='d3' || (window.EB3D&&EB3D.available(id)))) ? startTab : ageMeta().defTab;
  if(ttsAvailable()){
    const row=document.createElement('span');
    row.className='tts-row';
    [['ar',lang==='ar'?'🔊 استمع بالعربية':'🔊 Arabic'],['en',lang==='ar'?'🔊 استمع بالإنجليزية':'🔊 English']].forEach(function(pair){
      const code=pair[0], label=pair[1];
      const b=document.createElement('button');
      b.className='tts-btn tts-dual';
      b.dataset.label=label; b.textContent=label;
      b.onclick=()=>{
        const storyText = code==='ar' ? L.story : (L.storyEn || L.story);
        const text = curTab==='story' ? storyText : (code==='ar'?L.ar:L.en);
        const speakLang = curTab==='story' ? ((code==='ar'||!L.storyEn)?'ar':'en') : code;
        ttsSpeak(text, b, speakLang);
      };
      row.appendChild(b);
    });
    document.getElementById('lessonTabs').appendChild(row);
  }
  app.querySelectorAll('.lesson-tabs button[data-tab]').forEach(b=>b.onclick=()=>{
    ttsStop();
    curTab=b.dataset.tab;
    app.querySelectorAll('.lesson-tabs button[data-tab]').forEach(x=>x.classList.remove('active'));
    b.classList.add('active');
    if(b.dataset.tab==='quiz'){ tabs.quiz(); }
    else {
      body.innerHTML = tabs[b.dataset.tab]();
      if(b.dataset.tab==='d3'){
        const legend = window.EB3D && EB3D.mount(id, document.getElementById('d3Wrap'), lang);
        if(legend===false){ body.innerHTML = `<p class="note">${lang==='ar'?'النموذج ثلاثي الأبعاد غير مدعوم على هذا الجهاز، لكن الشرح والقصة والكويز متاحة جميعاً.':'The 3D model is not supported on this device, but the explanation, story and quiz are all available.'}</p>`; }
        else document.getElementById('d3Legend').innerHTML = legend.map(x=>`<li>${esc(x)}</li>`).join('');
      }
    }
  });
  // open the requested tab directly (deep-link, e.g. from a mentor answer)
  const startBtn = app.querySelector(`.lesson-tabs button[data-tab="${curTab}"]`);
  if(startBtn) startBtn.click();
}

function renderQuiz(L, body){
  const QZ = (lang==='ar' || !L.quizEn) ? L.quiz : L.quizEn;
  let i=0, score=0;
  const done = store.get('quiz',{});
  function q(){
    if(i>=QZ.length){
      const pts = score*10;
      done[L.id]={score:score,total:QZ.length,points:pts};
      store.set('quiz',done);
      body.innerHTML = `<div style="text-align:center">
        <div style="font-size:44px">${score===L.quiz.length?'🏆':score>0?'💪':'📖'}</div>
        <h3>${lang==='ar'?'نتيجتك: '+score+' من '+QZ.length:'Your score: '+score+' of '+QZ.length}</h3>
        <p style="color:var(--muted)">${lang==='ar'?'+'+pts+' نقطة في حسابك':'+'+pts+' points in your account'}</p>
        <button class="btn-primary" id="quizAgain">${lang==='ar'?'أعد المحاولة':'Try again'}</button>
      </div>`;
      document.getElementById('quizAgain').onclick=()=>{i=0;score=0;q();};
      return;
    }
    const item=QZ[i];
    body.innerHTML = `<p style="color:var(--muted);font-size:13px">${lang==='ar'?'سؤال':'Question'} ${i+1} / ${QZ.length}</p>
      <h3 style="margin-bottom:10px">${esc(item.q)}</h3>
      <div id="opts">${item.o.map((o,j)=>`<button class="quiz-opt" data-j="${j}">${esc(o)}</button>`).join('')}</div>`;
    body.querySelectorAll('.quiz-opt').forEach(b=>b.onclick=()=>{
      const j=+b.dataset.j;
      body.querySelectorAll('.quiz-opt').forEach((x,k)=>{ x.classList.add(k===item.a?'correct':(k===j?'wrong':'')); x.disabled=true; });
      if(j===item.a) score++;
      setTimeout(()=>{i++;q();}, 1100);
    });
  }
  q();
}

function viewMentor(presetQ){
  const m=ageMeta(), li=lang==='ar'?0:1;
  const sugg = m.sugg ? m.sugg[li] : (lang==='ar'
    ? ['اشرح لي الذكاء الاصطناعي بأسلوب بسيط','ساعدني في بحث عن الطاقة المتجددة','ناقشني: هل التعلّم الإلكتروني أفضل من التقليدي؟','أشعر بالإحباط وفقدان الشغف، كيف أستعيده؟']
    : ['Explain artificial intelligence simply','Help me outline research on renewable energy','Debate me: is online learning better than classrooms?','I feel unmotivated, how can I get my passion back?']);
  app.innerHTML = `
  <div class="chat-wrap">
    <div class="chat-head">
      <h2>${lang==='ar'?'مرشد إديوبرج':'EduBridge Mentor'}</h2>
      <span class="dot"></span>
      <span style="color:var(--muted);font-size:13px">${lang==='ar'?'مرشد مُوجَّه · يجيب بلغتك':'Guided mentor · answers in your language'}</span>
    </div>
    <div class="chat-box" id="chatBox">
      <div class="msg bot">${m.greet?m.greet[li]:(lang==='ar'
        ?'مرحباً بك! أنا مرشد إديوبرج. أجيب من محتوى تعليمي مكتوب بعناية عن مواضيع المكتبة والأسئلة الشائعة. اسألني عن أي موضوع من المكتبة، أو جرّب سؤالاً مقترحاً.'
        :'Welcome! I am the EduBridge mentor. I answer from carefully written learning content about the library topics and common questions. Ask me about any library topic, or try a suggested question.')}</div>
    </div>
    <div class="sugg" id="sugg">${sugg.map(s=>`<button>${esc(s)}</button>`).join('')}</div>
    <div class="chat-input">
      <input id="chatIn" placeholder="${lang==='ar'?'اكتب سؤالك':'Write your question'}">
      <button id="chatSend">➤</button>
    </div>
    <p class="note">${lang==='ar'?'ملاحظة: المرشد مساعد مُوجَّه بمحتوى مؤلَّف، وليس نموذج ذكاء اصطناعي حياً؛ المعلومات تعليمية عامة وليست تشخيصاً أو خدمة طوارئ.':'Note: the mentor is a guided assistant with authored content, not a live AI model. Content is general education, not diagnosis or an emergency service.'}</p>
  </div>`;
  const box=document.getElementById('chatBox'), inp=document.getElementById('chatIn');
  function send(text){
    const q=(text||inp.value).trim(); if(!q) return;
    inp.value='';
    box.insertAdjacentHTML('beforeend',`<div class="msg user">${esc(q)}</div>`);
    box.insertAdjacentHTML('beforeend',`<div class="msg bot typing" id="typing">${lang==='ar'?'يكتب…':'Typing…'}</div>`);
    box.scrollTop=box.scrollHeight;
    setTimeout(()=>{
      document.getElementById('typing').remove();
      const ans = mentorAnswer(q);
      const closers = m.closers ? m.closers[li] : (lang==='ar'
        ? ['بالتوفيق! خطوة صغيرة كل يوم تصنع فرقاً كبيراً 🌱','سؤال جميل، استمر في فضولك، فهو أقوى أدواتك 💡','أنت على الطريق الصحيح، واصل التقدم 💪']
        : ['You got this - small steps every day add up! 🌱','Great question - keep that curiosity going, it is your superpower 💡','You are on the right track, keep going 💪']);
      const closer = ans.fallback
        ? (lang==='ar'?'ولا بأس أن أقول لا أعرف؛ الأمانة أهم من إجابة مصطنعة. اختر موضوعاً من المكتبة وسأشرحه لك خطوة بخطوة 🌱':'It is fine to say I do not know; honesty beats an invented answer. Pick a topic from the library and I will walk you through it step by step 🌱')
        : closers[(send.n=(send.n||0)+1) % closers.length];
      const div=document.createElement('div');
      div.className='msg bot';
      div.textContent=ans.text+(ans.urgent?'':'\n\n'+closer);
      if(ans.src){
        const sl=document.createElement('a');
        sl.className='src-link';
        sl.target='_blank'; sl.rel='noopener';
        sl.href=ans.src;
        sl.textContent=(lang==='ar'?'🔗 المصدر: ':'🔗 Source: ')+new URL(ans.src).hostname.replace(/^www\./,'');
        div.appendChild(sl);
      }
      if(ans.chips){
        const row=document.createElement('div');
        row.className='chip-row';
        ans.chips.forEach(id=>{
          const L=LESSONS.find(x=>x.id===id); if(!L) return;
          const c=document.createElement('a');
          c.className='chip';
          c.href='#/lesson/'+id;
          c.textContent=L.emoji+' '+(lang==='ar'?L.title:L.titleEn);
          row.appendChild(c);
        });
        div.appendChild(row);
      }
      if(ans.model){
        const row2=document.createElement('div');
        row2.className='chip-row';
        const mc=document.createElement('a');
        mc.className='chip model-chip';
        mc.href='#/lesson/'+ans.model+'/d3';
        mc.textContent=lang==='ar'?'🧊 شاهد النموذج ثلاثي الأبعاد':'🧊 View the 3D model';
        row2.appendChild(mc);
        div.appendChild(row2);
      }
      if(ttsAvailable()){
        [['ar','🔊 ع'],['en','🔊 EN']].forEach(function(pair){
          const code=pair[0], lab=pair[1];
          const mb=document.createElement('button');
          mb.className='tts-mini';
          mb.dataset.label=lab; mb.textContent=lab;
          mb.title=code==='ar'?'استمع بالعربية':'Listen in English';
          mb.onclick=()=>ttsSpeak(code==='ar'?(ans.textAr||ans.text):(ans.textEn||ans.text), mb, code);
          div.appendChild(mb);
        });
      }
      box.appendChild(div);
      box.scrollTop=box.scrollHeight;
    }, 500);
  }
  document.getElementById('chatSend').onclick=()=>send();
  inp.addEventListener('keydown',e=>{if(e.key==='Enter')send();});
  document.getElementById('sugg').querySelectorAll('button').forEach(b=>b.onclick=()=>send(b.textContent));
  if(presetQ) send(presetQ);
}

function viewProgress(){
  const started = store.get('started',{});
  const quiz = store.get('quiz',{});
  const nStarted = Object.keys(started).length;
  const points = Object.values(quiz).reduce((s,q)=>s+(q.points||0),0);
  const mastery = Math.round(Object.values(quiz).reduce((s,q)=>s+q.score/q.total,0) / Math.max(1,LESSONS.length) * 100);
  const rows = LESSONS.filter(L=>started[L.id]).map(L=>{
    const qz=quiz[L.id];
    const pct=qz?Math.round(qz.score/qz.total*100):0;
    return `<div class="card"><span>${L.emoji} ${lang==='ar'?L.title:L.titleEn}</span>
      <span style="display:flex;align-items:center;gap:10px"><span class="pbar"><i style="width:${pct}%"></i></span><b>${pct}%</b></span></div>`;
  }).join('');
  app.innerHTML = `
  <section class="section">
    <p class="kicker">${lang==='ar'?'تقدّمي':'My progress'}</p>
    <h2>${lang==='ar'?'تابع رحلتك التعليمية':'Track your learning journey'}</h2>
    <p class="lead">${lang==='ar'?'كل كويز تكمله يُسجَّل على جهازك مباشرة، بلا حساب ولا بيانات شخصية.':'Every quiz you finish is recorded on your device, no account and no personal data.'}</p>
    <div class="stat-cards">
      <div class="card"><b>${nStarted}</b><span>${lang==='ar'?'موضوعاً بدأته':'topics started'}</span></div>
      <div class="card"><b>${points}</b><span>${lang==='ar'?'نقطة إجمالية':'total points'}</span></div>
      <div class="card"><b>${mastery}%</b><span>${lang==='ar'?'نسبة الإتقان':'mastery'}</span></div>
    </div>
    <div class="progress-list">${rows || `<div class="card"><p style="color:var(--muted)">${lang==='ar'?'لم يبدأ أي موضوع بعد. اختر موضوعاً من المكتبة وابدأ الرحلة.':'No topic started yet. Pick one from the library and begin.'}</p><p style="margin-top:12px"><a class="go" href="#/library" style="color:var(--primary);font-weight:800">${lang==='ar'?'اذهب إلى المكتبة ←':'Go to the library →'}</a></p></div>`}</div>
    <button class="btn-ghost" id="resetP">${lang==='ar'?'إعادة تعيين التقدّم':'Reset progress'}</button>
  </section>`;
  document.getElementById('resetP').onclick=()=>{
    if(!confirm(lang==='ar'?'سيُحذف تقدّمك المحفوظ على هذا الجهاز نهائياً. هل تريد المتابعة؟':'This deletes your saved progress on this device. Continue?')) return;
    store.set('started',{}); store.set('quiz',{}); route();
  };
}

// ---------- Router ----------
function route(){
  const h = location.hash || '#/';
  const [path,qs] = h.slice(2).split('?');
  const params = new URLSearchParams(qs||'');
  document.querySelectorAll('[data-nav]').forEach(a=>a.classList.remove('active'));
  if(path===''||path==='/'){ viewHome(); document.querySelector('[data-nav=home]').classList.add('active'); }
  else if(path==='library'){ viewLibrary(); document.querySelector('[data-nav=library]').classList.add('active'); }
  else if(path.startsWith('lesson/')){ const seg=path.split('/'); viewLesson(seg[1], seg[2]); document.querySelector('[data-nav=library]').classList.add('active'); }
  else if(path==='mentor'){ viewMentor(params.get('q')); document.querySelector('[data-nav=mentor]').classList.add('active'); }
  else if(path==='games'){ viewGames(); document.querySelector('[data-nav=games]').classList.add('active'); }
  else if(path==='progress'){ viewProgress(); document.querySelector('[data-nav=progress]').classList.add('active'); }
  window.scrollTo(0,0);
}

// ---------- Wire up ----------
document.getElementById('langAr').onclick=()=>setLang('ar');
document.getElementById('langEn').onclick=()=>setLang('en');
document.getElementById('ageChip').onclick=()=>{
  const m=document.getElementById('ageModal'); m.classList.remove('hidden'); applyLang();
  m.querySelectorAll('[data-age]').forEach(b=>b.onclick=()=>{ age=b.dataset.age; store.set('age',age); m.classList.add('hidden'); applyLang(); route(); });
};
document.getElementById('ageModal').addEventListener('click',e=>{ if(e.target.id==='ageModal') e.target.classList.add('hidden'); });
window.addEventListener('hashchange', ()=>{ ttsStop(); route(); });

applyLang();
if(!age) showOnboarding();
route();
})();
