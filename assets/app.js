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
  document.title = lang==='ar' ? 'EduBridge ,  مرشد تعلّم للمواضيع المتاحة' : 'EduBridge ,  A guided mentor for covered topics';
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
  const v = vs.find(x=>x.lang && x.lang.toLowerCase().startsWith(speechLang));
  if(v) u.voice = v;
  u.rate = 0.95;   // friendly teacher pace
  u.pitch = 1.05;
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
    <p>${lang==='ar'?'اختر مرحلتك لتسجيلها على هذا الجهاز. المحتوى الحالي مشترك بين المراحل، ويمكنك تغيير اختيارك لاحقاً.':'Choose a stage to save on this device. Current lesson content is shared across stages; you can change this later.'}</p>
    <div class="choice-row">
      <button data-age="child">${lang==='ar'?'طفل ٦-١١':'Child 6-11'}</button>
      <button data-age="teen">${lang==='ar'?'مراهق ١٢-١٧':'Teen 12-17'}</button>
      <button data-age="university">${lang==='ar'?'جامعي ١٨+':'University 18+'}</button>
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
    return {text:lang==='ar'?authored.ar:authored.en,src:authored.src||null,urgent:!!authored.urgent,model:(rel&&window.EB3D&&EB3D.available(rel.id))?rel.id:null};
  }
  // 2) lesson explanations - prefer the longest matching title so "عضيات الخلية" beats "الخلية"
  let best=null, bestLen=0;
  for(const L of LESSONS){
    const names=[L.title,L.titleEn,L.id].concat(L.kw||[]).map(x=>x.toLowerCase());
    const hit = names.filter(n=>n.length>2 && matches(n)).sort((a,b)=>b.length-a.length)[0];
    if(hit && hit.length>bestLen){ best=L; bestLen=hit.length; }
  }
  if(best){
    const intro = lang==='ar' ? `سؤالك عن ${best.title}. إليك شرحاً مبسطاً:` : `You asked about ${best.titleEn}. Here is a simple explanation:`;
    return {text: intro+'\n\n'+(lang==='ar'?best.ar:best.en), src: best.src||null, model: (window.EB3D && EB3D.available(best.id)) ? best.id : null};
  }
  // 3) honest fallback, suggesting the closest covered topics
  const words = s.split(/[^a-z\u0621-\u064a0-9]+/).filter(w=>w.length>3);
  const close = LESSONS.filter(L=>words.some(w=>(L.title+' '+L.titleEn+' '+L.ar+' '+L.en).toLowerCase().includes(w))).slice(0,3).map(L=>L.id);
  return {
    text: lang==='ar'
      ? 'لا أملك إجابة موثوقة عن هذا السؤال بعد. أنا مرشد مُوجَّه أجيب من محتوى مكتوب بعناية، ولست ذكاءً اصطناعياً حياً.\n\nجرّب أحد الأسئلة المقترحة، أو افتح أقرب موضوع لسؤالك من المكتبة:'
      : 'I do not have a reliable answer for that yet. I am a guided mentor answering from carefully written content, not a live AI.\n\nTry one of the suggested questions, or open the closest library topic to your question:',
    src: null,
    chips: close.length ? close : ['cell','atom','gravity']
  };
}

// ---------- Views ----------
const app = document.getElementById('app');
const esc = s=>s.replace(/</g,'&lt;');

function viewHome(){
  const chips = LESSONS.slice(0,6).map(L=>`<button data-topic="${L.id}">${L.emoji} ${lang==='ar'?L.title:L.titleEn}</button>`).join('');
  app.innerHTML = `
  <section class="hero">
    <span class="eyebrow">${lang==='ar'?'مرشد المستقبل · ٢٠٢٦':'Mentor of the future · 2026'}</span>
    <h1>${lang==='ar'?'اسأل وجرّب.<br><span class="grad">وافهم خطوة بخطوة.</span>':'Ask and explore.<br><span class="grad">Learn step by step.</span>'}</h1>
    <p class="sub">${lang==='ar'?'شروحات عربية وإنجليزية للمواضيع المتاحة، مع نماذج تعليمية تفاعلية ومرشد موجه من محتوى مؤلف. القصص والكويزات بالعربية حالياً.':'Arabic and English explanations for covered topics, with interactive teaching models and an authored guided mentor. Stories and quizzes are currently in Arabic.'}</p>
    <div class="askbar">
      <input id="heroQ" placeholder="${lang==='ar'?'اسأل عن موضوع من المكتبة، مثل الخلية أو الكهرباء':'Ask about a library topic, such as cells or electricity'}">
      <button class="btn-grad" id="heroGo">${lang==='ar'?'ابدأ الآن':'Start now'}</button>
    </div>
    <div class="topic-chips">${chips}</div>
    <div class="stats">
      <div><b>${LESSONS.length}</b><span>${lang==='ar'?'موضوعاً جاهزاً':'ready topics'}</span></div>
      <div><b>2</b><span>${lang==='ar'?'لغتان · عربي / إنجليزي':'languages · AR / EN'}</span></div>
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
function heroAsk(){
  const q = document.getElementById('heroQ').value.trim();
  const hit = LESSONS.find(L=>q && (q.includes(L.title)||q.toLowerCase().includes(L.titleEn.toLowerCase())));
  location.hash = hit ? '#/lesson/'+hit.id : '#/mentor'+(q?'?q='+encodeURIComponent(q):'');
}

function lessonCard(L){
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
    <h2>${lang==='ar'?'كل المواضيع الجاهزة':'All ready topics'}</h2>
    <p class="lead">${lang==='ar'?LESSONS.length+' درساً بالشرح ومشهد تعليمي وكويز ونموذج تفاعلي. روابط البحث والفيديوهات الخارجية تحتاج اتصالاً بالإنترنت.':LESSONS.length+' lessons with explanations and models. Stories and quizzes are currently Arabic. External searches and videos need an internet connection.'}</p>
    <div class="mode-row" id="catRow">
      <button class="active" data-cat="">${lang==='ar'?'الكل':'All'}</button>
      ${cats.map(c=>`<button data-cat="${c}">${c}</button>`).join('')}
    </div>
    <div class="card-grid" id="libGrid">${LESSONS.map(lessonCard).join('')}</div>
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
    <div class="lesson-tabs" id="lessonTabs">
      <button class="active" data-tab="explain">${lang==='ar'?'الشرح':'Explanation'}</button>
      <button data-tab="story">${lang==='ar'?'القصة':'Story (Arabic)'}</button>
      <button data-tab="quiz">${lang==='ar'?'الكويز':'Quiz (Arabic)'}</button>
      <button data-tab="video">${lang==='ar'?'فيديو':'Video'}</button>
      ${window.EB3D&&EB3D.available(id)?`<button data-tab="d3">${lang==='ar'?'نموذج 3D':'3D model'}</button>`:''}
    </div>
    <div class="lesson-body" id="lessonBody"></div>
  </section>`;
  const body = document.getElementById('lessonBody');
  const tabs = {
    explain: ()=> esc(lang==='ar'?L.ar:L.en),
    story:   ()=> `<div dir="rtl" lang="ar">${esc(L.story)}</div>`,
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
  let curTab=(startTab && ['explain','story','quiz','video','d3'].includes(startTab) && (startTab!=='d3' || (window.EB3D&&EB3D.available(id)))) ? startTab : 'explain';
  if(ttsAvailable()){
    const tBtn=document.createElement('button');
    tBtn.className='tts-btn';
    tBtn.dataset.label=lang==='ar'?'🔊 استمع':'🔊 Listen';
    tBtn.textContent=tBtn.dataset.label;
    tBtn.onclick=()=>{
      const text = curTab==='story' ? L.story : (lang==='ar'?L.ar:L.en);
      ttsSpeak(text, tBtn,curTab==='story'?'ar':lang);
    };
    document.getElementById('lessonTabs').appendChild(tBtn);
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
  let i=0, score=0;
  const done = store.get('quiz',{});
  function q(){
    if(i>=L.quiz.length){
      const pts = score*10;
      done[L.id]={score:score,total:L.quiz.length,points:pts};
      store.set('quiz',done);
      body.innerHTML = `<div style="text-align:center">
        <div style="font-size:44px">${score===L.quiz.length?'🏆':score>0?'💪':'📖'}</div>
        <h3>${lang==='ar'?'نتيجتك: '+score+' من '+L.quiz.length:'Your score: '+score+' of '+L.quiz.length}</h3>
        <p style="color:var(--muted)">${lang==='ar'?'+'+pts+' نقطة في حسابك':'+'+pts+' points in your account'}</p>
        <button class="btn-primary" id="quizAgain">${lang==='ar'?'أعد المحاولة':'Try again'}</button>
      </div>`;
      document.getElementById('quizAgain').onclick=()=>{i=0;score=0;q();};
      return;
    }
    const item=L.quiz[i];
    body.innerHTML = `<p style="color:var(--muted);font-size:13px">${lang==='ar'?'سؤال':'Question'} ${i+1} / ${L.quiz.length}</p>
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
  const sugg = lang==='ar'
    ? ['اشرح لي الذكاء الاصطناعي بأسلوب بسيط','ساعدني في بحث عن الطاقة المتجددة','ناقشني: هل التعلّم الإلكتروني أفضل من التقليدي؟','أشعر بالإحباط وفقدان الشغف، كيف أستعيده؟']
    : ['Explain artificial intelligence simply','Help me outline research on renewable energy','Debate me: is online learning better than classrooms?','I feel unmotivated, how can I get my passion back?'];
  app.innerHTML = `
  <div class="chat-wrap">
    <div class="chat-head">
      <h2>${lang==='ar'?'مرشد إديوبرج':'EduBridge Mentor'}</h2>
      <span class="dot"></span>
      <span style="color:var(--muted);font-size:13px">${lang==='ar'?'مرشد مُوجَّه · يجيب بلغتك':'Guided mentor · answers in your language'}</span>
      <span class="chip">${AGE_LABEL[age||'teen'][lang==='ar'?0:1]}</span>
    </div>
    <div class="chat-box" id="chatBox">
      <div class="msg bot">${lang==='ar'
        ?'مرحباً بك! أنا مرشد إديوبرج. أجيب من محتوى تعليمي مكتوب بعناية عن مواضيع المكتبة والأسئلة الشائعة ,  اسألني عن أي موضوع من المكتبة، أو جرّب سؤالاً مقترحاً.'
        :'Welcome! I am the EduBridge mentor. I answer from carefully written learning content about the library topics and common questions - ask me about any library topic, or try a suggested question.'}</div>
    </div>
    <div class="sugg" id="sugg">${sugg.map(s=>`<button>${esc(s)}</button>`).join('')}</div>
    <div class="chat-input">
      <input id="chatIn" placeholder="${lang==='ar'?'اكتب سؤالك':'Write your question'}">
      <button id="chatSend">➤</button>
    </div>
    <p class="note">${lang==='ar'?'ملاحظة: المرشد مساعد مُوجَّه بمحتوى مؤلَّف، وليس نموذج ذكاء اصطناعي حياً ,  المعلومات تعليمية عامة وليست تشخيصاً أو خدمة طوارئ.':'Note: the mentor is a guided assistant with authored content, not a live AI model - Content is general education, not diagnosis or an emergency service.'}</p>
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
      const closers = lang==='ar'
        ? ['بالتوفيق! خطوة صغيرة كل يوم تصنع فرقاً كبيراً 🌱','سؤال جميل ,  استمر في فضولك، فهو أقوى أدواتك 💡','أنت على الطريق الصحيح، واصل التقدم 💪']
        : ['You got this - small steps every day add up! 🌱','Great question - keep that curiosity going, it is your superpower 💡','You are on the right track, keep going 💪'];
      const closer = closers[(send.n=(send.n||0)+1) % closers.length];
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
        const mb=document.createElement('button');
        mb.className='tts-mini';
        mb.dataset.label='🔊';
        mb.textContent='🔊';
        mb.title=lang==='ar'?'استمع للإجابة':'Listen to the answer';
        mb.onclick=()=>ttsSpeak(ans.text, mb);
        div.appendChild(mb);
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
    <p class="lead">${lang==='ar'?'كل كويز تكمله يُسجَّل على جهازك مباشرة ,  بلا حساب ولا بيانات شخصية.':'Every quiz you finish is recorded on your device - no account, no personal data.'}</p>
    <div class="stat-cards">
      <div class="card"><b>${nStarted}</b><span>${lang==='ar'?'موضوعاً بدأته':'topics started'}</span></div>
      <div class="card"><b>${points}</b><span>${lang==='ar'?'نقطة إجمالية':'total points'}</span></div>
      <div class="card"><b>${mastery}%</b><span>${lang==='ar'?'نسبة الإتقان':'mastery'}</span></div>
    </div>
    <div class="progress-list">${rows || `<div class="card"><p style="color:var(--muted)">${lang==='ar'?'لم يبدأ أي موضوع بعد. اختر موضوعاً من المكتبة وابدأ الرحلة.':'No topic started yet. Pick one from the library and begin.'}</p></div>`}</div>
    <button class="btn-ghost" id="resetP">${lang==='ar'?'إعادة تعيين التقدّم':'Reset progress'}</button>
  </section>`;
  document.getElementById('resetP').onclick=()=>{ store.set('started',{}); store.set('quiz',{}); route(); };
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
  else if(path==='progress'){ viewProgress(); document.querySelector('[data-nav=progress]').classList.add('active'); }
  window.scrollTo(0,0);
}

// ---------- Wire up ----------
document.getElementById('langAr').onclick=()=>setLang('ar');
document.getElementById('langEn').onclick=()=>setLang('en');
document.getElementById('ageChip').onclick=()=>{
  const m=document.getElementById('ageModal'); m.classList.remove('hidden'); applyLang();
  m.querySelectorAll('[data-age]').forEach(b=>b.onclick=()=>{ age=b.dataset.age; store.set('age',age); m.classList.add('hidden'); applyLang(); });
};
document.getElementById('ageModal').addEventListener('click',e=>{ if(e.target.id==='ageModal') e.target.classList.add('hidden'); });
window.addEventListener('hashchange', ()=>{ ttsStop(); route(); });

applyLang();
if(!age) showOnboarding();
route();
})();
