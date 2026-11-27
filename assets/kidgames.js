/* EduBridge kid games (child stage only, v13): three calm games.
   No timer, no score pressure, no sound, no network. Big taps, soft feedback,
   so the child stage stays quiet and simple. */
(function(){
'use strict';

var T = {
  pairs:{ar:{t:'طابق الصور',h:'اضغط على كرتين متشابهين.',win:'برافو! خلصت كل الأزواج 🎉',again:'العب تاني'},
         en:{t:'Match the pictures',h:'Tap two cards that look the same.',win:'Bravo! You matched them all 🎉',again:'Play again'}},
  count:{ar:{t:'عدّ معايا',h:'عدّ الصور واضغط الرقم الصح.',win:'خلصت! عدّك ممتاز 👏',again:'العب تاني',yes:'صح! ✅',no:'جرّب تاني 🙂',round:'جولة',of:'من'},
         en:{t:'Count with me',h:'Count the pictures and tap the right number.',win:'Done! Great counting 👏',again:'Play again',yes:'Yes! ✅',no:'Try again 🙂',round:'Round',of:'of'}},
  odd:{ar:{t:'إيه المختلف؟',h:'اضغط على الصورة اللي مش زي الباقي.',win:'شاطر! لقيت المختلف 👏',again:'العب تاني',yes:'صح! ✅',no:'جرّب تاني 🙂',round:'جولة',of:'من'},
       en:{t:'Which one is different?',h:'Tap the picture that is not like the others.',win:'Well done! You found it 👏',again:'Play again',yes:'Yes! ✅',no:'Try again 🙂',round:'Round',of:'of'}}
};
function t3(key, lang){ return T[key][lang==='en'?'en':'ar']; }

function el(tag, cls, html){
  var e = document.createElement(tag);
  if(cls) e.className = cls;
  if(html != null) e.innerHTML = html;
  return e;
}
function shuffle(a){
  for(var i=a.length-1;i>0;i--){ var j=Math.floor(Math.random()*(i+1)); var x=a[i]; a[i]=a[j]; a[j]=x; }
  return a;
}
function head(box, c){
  box.innerHTML = '';
  box.appendChild(el('div','kg-title', c.t));
  box.appendChild(el('div','kg-hint', c.h));
}
function againBtn(box, label, onAgain){
  var b = el('button','kg-again', label);
  b.type = 'button';
  b.onclick = onAgain;
  box.appendChild(b);
  return b;
}

/* ---- 1. Match the pictures (three visible pairs) ---- */
function mountPairs(box, lang){
  var c = t3('pairs', lang);
  var pool = ['🐣','🌟','🐟','🌻','🚗','🐢','🎈','🍎','🦋','🐘','🌙','🚂'];
  function render(){
    head(box, c);
    var stage = el('div','kg-stage');
    var msg = el('div','kg-msg');
    box.appendChild(stage); box.appendChild(msg);
    var picks = shuffle(pool.slice()).slice(0,3);
    var deck = shuffle(picks.concat(picks));
    var sel = null, done = 0;
    deck.forEach(function(face){
      var b = el('button','kg-tile', face);
      b.type = 'button';
      b.onclick = function(){
        if(b.classList.contains('done')) return;
        if(sel === b){ b.classList.remove('sel'); sel = null; return; }
        if(!sel){ sel = b; b.classList.add('sel'); return; }
        if(sel.textContent === b.textContent){
          sel.classList.remove('sel'); sel.classList.add('done');
          b.classList.add('done');
          sel = null; done++;
          if(done === picks.length){
            msg.textContent = c.win;
            againBtn(box, c.again, render);
          }
        } else {
          var first = sel; sel = null;
          first.classList.add('nudge'); b.classList.add('nudge');
          setTimeout(function(){
            first.classList.remove('sel','nudge');
            b.classList.remove('sel','nudge');
          }, 650);
        }
      };
      stage.appendChild(b);
    });
  }
  render();
}

/* ---- 2. Count with me (five gentle rounds) ---- */
function mountCount(box, lang){
  var c = t3('count', lang);
  var TOTAL = 5, round = 0;
  var faces = ['🍎','⭐','🐟','🎈','🌸','🦋'];
  function render(){
    round++;
    head(box, c);
    box.appendChild(el('div','kg-round', c.round + ' ' + round + ' ' + c.of + ' ' + TOTAL));
    var n = 2 + Math.floor(Math.random()*5);          // 2..6
    var face = faces[Math.floor(Math.random()*faces.length)];
    var row = el('div','kg-count-row');
    for(var i=0;i<n;i++) row.appendChild(el('span', null, face));
    var nums = el('div','kg-nums');
    var msg = el('div','kg-msg');
    box.appendChild(row); box.appendChild(nums); box.appendChild(msg);
    var cand = shuffle([n-1, n+1]);
    shuffle([n].concat(cand)).forEach(function(v){
      var b = el('button','kg-num', String(v));
      b.type = 'button';
      b.onclick = function(){
        if(b.classList.contains('ok')) return;
        if(v === n){
          b.classList.add('ok');
          msg.className = 'kg-msg';
          msg.textContent = c.yes;
          nums.querySelectorAll('.kg-num').forEach(function(x){ x.disabled = true; });
          setTimeout(function(){
            if(round >= TOTAL){
              head(box, c);
              box.appendChild(el('div','kg-msg', c.win));
              againBtn(box, c.again, function(){ round = 0; render(); });
            } else render();
          }, 750);
        } else {
          msg.className = 'kg-msg soft';
          msg.textContent = c.no;
        }
      };
      nums.appendChild(b);
    });
  }
  render();
}

/* ---- 3. Which one is different? (five gentle rounds) ---- */
function mountOdd(box, lang){
  var c = t3('odd', lang);
  var TOTAL = 5, round = 0;
  var pairs = [['🐶','🐱'],['🌞','🌜'],['🍎','🍏'],['🐟','🐠'],['🚗','🚙'],['🌸','🌼'],['🐸','🐷'],['🐘','🦒']];
  function render(){
    round++;
    head(box, c);
    box.appendChild(el('div','kg-round', c.round + ' ' + round + ' ' + c.of + ' ' + TOTAL));
    var stage = el('div','kg-stage kg-stage-4');
    var msg = el('div','kg-msg');
    box.appendChild(stage); box.appendChild(msg);
    var p = pairs[Math.floor(Math.random()*pairs.length)];
    var same = p[0], diff = p[1];
    if(Math.random() < .5){ same = p[1]; diff = p[0]; }
    var tiles = shuffle([same, same, same, diff]);
    tiles.forEach(function(face){
      var b = el('button','kg-tile', face);
      b.type = 'button';
      b.onclick = function(){
        if(b.classList.contains('done')) return;
        if(face === diff){
          b.classList.add('done');
          msg.className = 'kg-msg';
          msg.textContent = c.yes;
          stage.querySelectorAll('.kg-tile').forEach(function(x){ x.classList.add('done'); });
          setTimeout(function(){
            if(round >= TOTAL){
              head(box, c);
              box.appendChild(el('div','kg-msg', c.win));
              againBtn(box, c.again, function(){ round = 0; render(); });
            } else render();
          }, 750);
        } else {
          msg.className = 'kg-msg soft';
          msg.textContent = c.no;
          b.classList.add('nudge');
          setTimeout(function(){ b.classList.remove('nudge'); }, 600);
        }
      };
      stage.appendChild(b);
    });
  }
  render();
}

window.KID_GAMES = {
  mount: function(box, kind, lang){
    if(!box) return;
    if(kind === 'pairs') mountPairs(box, lang);
    else if(kind === 'count') mountCount(box, lang);
    else if(kind === 'odd') mountOdd(box, lang);
  }
};
})();
