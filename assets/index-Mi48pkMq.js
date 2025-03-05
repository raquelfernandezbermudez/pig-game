(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))b(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&b(i)}).observe(document,{childList:!0,subtree:!0});function h(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function b(e){if(e.ep)return;e.ep=!0;const t=h(e);fetch(e.href,t)}})();document.querySelector("#app").innerHTML=`
    <main>
      <section class="player player--0 player--active">
        <h2 class="name" id="name--0">Player 1</h2>
        <p class="score" id="score--0">43</p>
        <div class="current">
          <p class="current-label">Current</p>
          <p class="current-score" id="current--0">3</p>
        </div>
      </section>
      <section class="player player--1">
        <h2 class="name" id="name--1">Player 2</h2>
        <p class="score" id="score--1">24</p>
        <div class="current">
          <p class="current-label">Current</p>
          <p class="current-score" id="current--1">5</p>
        </div>
      </section>

      <img src="dice-5.png" alt="Playing dice" class="dice" />
      <button class="btn btn--new">🔄 New game</button>
      <button class="btn btn--roll">🎲 Roll dice</button>
      <button class="btn btn--hold">📥 Hold</button>

      <div id="winMessage" class="hidden"></div>
    </main>

`;const o=document.querySelector(".player--0"),l=document.querySelector(".player--1"),a=document.querySelector("#score--0"),d=document.querySelector("#score--1"),p=document.querySelector("#current--0"),y=document.querySelector("#current--1"),L=document.querySelector(".btn--new"),m=document.querySelector(".btn--hold"),f=document.querySelector(".btn--roll"),u=document.querySelector(".dice");let c,r;const g=()=>{c=0,r=0,u.classList.add("hidden"),a.textContent=0,d.textContent=0,p.textContent=0,y.textContent=0};g();f.addEventListener("click",S);function S(){const n=Math.trunc(Math.random()*6+1);u.classList.remove("hidden"),u.src=`dice-${n}.png`,n!==1?w(n):v()}function w(n){c+=n,r===0?p.textContent=c:y.textContent=c}function v(){C(),o.classList.toggle("player--active"),l.classList.toggle("player--active"),r=r===0?1:0}function C(){c=0,r===0?p.textContent=c:y.textContent=c}m.addEventListener("click",x);function x(){let n=parseInt(r===0?a.textContent:d.textContent)+c;if(r===0?a.textContent=n:d.textContent=n,n>=100){const s=document.getElementById("winMessage");s.textContent=`¡El Jugador ${r+1} ha ganado!`,s.style.display="block",m.disabled=!0,f.disabled=!0,r===0?(o.classList.add("player--winner"),o.classList.remove("player--active")):(l.classList.add("player--winner"),l.classList.remove("player--active"))}else v()}L.addEventListener("click",q);function q(){g(),o.classList.add("player--active"),l.classList.remove("player--active"),o.classList.remove("player--winner"),l.classList.remove("player--winner"),m.disabled=!1,f.disabled=!1,document.getElementById("winMessage").style.display="none"}
