/* EduBridge kid side-games (child stage only): balloon pop + catch the star.
   Panels are fixed at the page sides on wide screens; on small screens they
   become floating launcher buttons that expand when tapped. */
(function(){
'use strict';

function el(tag, cls, html){ const e=document.createElement(tag); if(cls)e.className=cls; if(html!=null)e.innerHTML=html; return e; }
function store(k, v){ try{ if(v===undefined) return JSON.parse(localStorage.getItem('eb_'+k)||'0'); localStorage.setItem('eb_'+k, JSON.stringify(v)); }catch(e){ return 0; } }

function makePanel(id, side, launchEmoji, title){
  const p = el('div','kidgame '+side); p.id=id;
  const launch = el('button','kg-launch',launchEmoji);
  launch.type='button'; launch.setAttribute('aria-label',title);
  launch.onclick=function(){ p.classList.add('open'); };
  const body = el('div','kg-body');
  const h = el('h5',null,title);
  const score = el('div','kg-score','⭐ <span>0</span>');
  const area = el('div','kg-area');
  const close = el('button','kg-score','✕');
  close.type='button'; close.setAttribute('aria-label','close');
  close.onclick=function(){ p.classList.remove('open'); };
  body.appendChild(h); body.appendChild(score); body.appendChild(area); body.appendChild(close);
  p.appendChild(launch); p.appendChild(body);
  document.body.appendChild(p);
  return {panel:p, body:body, score:score.firstElementChild, area:area};
}

function visible(area){ return !!(area.offsetWidth || area.offsetHeight); }

/* Balloon pop */
(function(){
  const g = makePanel('kgBalloon','kg-start','🎈','🎈 بالونات · Balloons');
  let score = store('kg_balloon')||0; g.score.textContent = score;
  const HUES=[0,40,120,200,280,320];
  function spawn(){
    if(!visible(g.area)) return;
    if(g.area.querySelectorAll('.kg-balloon').length>=4) return;
    const b = el('button','kg-balloon','🎈'); b.type='button';
    b.style.left = (Math.random()*72)+'px';
    b.style.filter = 'hue-rotate('+HUES[Math.floor(Math.random()*HUES.length)]+'deg)';
    b.style.animationDuration = (3.6+Math.random()*2.2)+'s';
    b.onclick = function(){
      score++; store('kg_balloon',score); g.score.textContent=score;
      const pop = el('span','kg-pop','💥');
      pop.style.left=b.style.left; pop.style.top=b.getBoundingClientRect().top-g.area.getBoundingClientRect().top+'px';
      g.area.appendChild(pop); setTimeout(function(){pop.remove();},380);
      b.remove();
    };
    b.addEventListener('animationend',function(){ b.remove(); });
    g.area.appendChild(b);
  }
  setInterval(spawn, 1600);
})();

/* Catch the star */
(function(){
  const g = makePanel('kgStar','kg-end','⭐','⭐ اصطد النجمة · Catch the star');
  let score = store('kg_star')||0; g.score.textContent = score;
  const star = el('button','kg-star','⭐'); star.type='button';
  g.area.appendChild(star);
  function move(){
    if(!visible(g.area)) return;
    star.style.left = (Math.random()*74)+'px';
    star.style.top  = (Math.random()*150)+'px';
  }
  star.onclick = function(){
    score++; store('kg_star',score); g.score.textContent=score;
    const pop = el('span','kg-pop','✨');
    pop.style.left=star.style.left; pop.style.top=star.style.top;
    g.area.appendChild(pop); setTimeout(function(){pop.remove();},380);
    move();
  };
  move();
  setInterval(move, 1500);
})();

})();
