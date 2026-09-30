/* Unlock IQ — site.js v3.0 (no tracking, no cookies) */
(function () {
  var t = document.querySelector(".nav-toggle"), l = document.querySelector(".nav-links");
  if (t && l) t.addEventListener("click", function () {
    var open = l.classList.toggle("open"); t.setAttribute("aria-expanded", open ? "true" : "false");
  });
  document.querySelectorAll(".sub-toggle").forEach(function (b) {
    b.addEventListener("click", function () { b.parentElement.classList.toggle("open"); });
  });

  var box = document.getElementById("tryq"); if (!box) return;
  var Q = {
    "1": [{ q: "Which number comes just after 19?", o: ["18", "20", "21", "29"], a: 1, e: "Counting on: 19, 20." },
          { q: "Riya has 3 red balloons and 4 blue balloons. How many balloons in all?", o: ["6", "7", "8", "1"], a: 1, e: "3 + 4 = 7." }],
    "2": [{ q: "What is 48 + 27?", o: ["65", "75", "74", "85"], a: 1, e: "48 + 27 = 75 (8 + 7 = 15, carry the 1)." },
          { q: "How many minutes are there in 2 hours?", o: ["60", "100", "120", "200"], a: 2, e: "1 hour = 60 min, so 2 hours = 120 min." }],
    "3": [{ q: "Aarav packs 24 laddoos equally into 4 boxes. How many in each box?", o: ["4", "6", "8", "12"], a: 1, e: "24 ÷ 4 = 6." },
          { q: "Which of these is an even number?", o: ["37", "53", "68", "91"], a: 2, e: "68 ends in 8, so it is even." }],
    "4": [{ q: "The perimeter of a square is 36 cm. What is one side?", o: ["6 cm", "8 cm", "9 cm", "12 cm"], a: 2, e: "36 ÷ 4 = 9 cm." },
          { q: "What is 7 × 8?", o: ["54", "56", "64", "48"], a: 1, e: "7 × 8 = 56." }],
    "5": [{ q: "Which fraction is greater than 1/2?", o: ["2/5", "3/8", "5/9", "4/10"], a: 2, e: "5/9 ≈ 0.56, which is more than 0.5." },
          { q: "A train leaves at 9:40 and arrives at 11:15. How long is the journey?", o: ["1 h 25 min", "1 h 35 min", "1 h 45 min", "2 h 15 min"], a: 1, e: "9:40 → 11:15 is 1 hour 35 minutes." }],
    "6": [{ q: "What is the LCM of 6 and 8?", o: ["12", "16", "24", "48"], a: 2, e: "Multiples of 8: 8, 16, 24 — and 24 is divisible by 6." },
          { q: "The sum of a number and 9 is 21. What is the number?", o: ["11", "12", "13", "30"], a: 1, e: "21 − 9 = 12." }],
    "7": [{ q: "What is (−3) × (−4) + (−5)?", o: ["7", "−7", "17", "−17"], a: 0, e: "(−3)(−4) = 12; 12 + (−5) = 7." },
          { q: "20% of 250 is:", o: ["25", "40", "50", "75"], a: 2, e: "20% = 1/5; 250 ÷ 5 = 50." }],
    "8": [{ q: "The square root of 1,764 is:", o: ["38", "42", "44", "48"], a: 1, e: "42 × 42 = 1,764." },
          { q: "If 3x − 7 = 11, then x =", o: ["4", "5", "6", "18"], a: 2, e: "3x = 18, so x = 6." }],
    "9": [{ q: "Which of these is an irrational number?", o: ["√49", "0.75", "√2", "22/7"], a: 2, e: "√2 cannot be written as a fraction of integers." },
          { q: "The sum of the interior angles of a hexagon is:", o: ["540°", "720°", "900°", "1080°"], a: 1, e: "(6 − 2) × 180° = 720°." }],
    "10": [{ q: "The roots of x² − 5x + 6 = 0 are:", o: ["1 and 6", "2 and 3", "−2 and −3", "5 and 6"], a: 1, e: "(x − 2)(x − 3) = 0." },
           { q: "sin 30° + cos 60° =", o: ["0", "1/2", "1", "√3"], a: 2, e: "1/2 + 1/2 = 1." }],
    "11": [{ q: "How many 3-letter arrangements can be made from the letters of MATH (no repeats)?", o: ["12", "24", "48", "64"], a: 1, e: "4P3 = 4 × 3 × 2 = 24." },
           { q: "If the 5th term of an AP is 17 and the 9th term is 29, the common difference is:", o: ["2", "3", "4", "6"], a: 1, e: "4d = 12, so d = 3." }]
  };
  var sel = box.querySelector("select"), qEl = box.querySelector(".tryq-q"), oEl = box.querySelector(".tryq-opts"),
      fb = box.querySelector(".tryq-fb"), nxt = box.querySelector(".tryq-next button"), idx = 0, answered = false;
  function render() {
    var arr = Q[sel.value], item = arr[idx % arr.length]; answered = false;
    qEl.textContent = item.q; oEl.innerHTML = ""; fb.innerHTML = "";
    item.o.forEach(function (txt, i) {
      var b = document.createElement("button"); b.type = "button"; b.textContent = String.fromCharCode(65 + i) + ".  " + txt;
      b.addEventListener("click", function () {
        if (answered) return; answered = true;
        var ok = i === item.a; b.classList.add(ok ? "right" : "wrong");
        if (!ok) oEl.children[item.a].classList.add("right");
        fb.innerHTML = (ok ? "<b>Correct!</b> " : "<b>Not quite.</b> ") + item.e;
      });
      oEl.appendChild(b);
    });
  }
  sel.addEventListener("change", function () { idx = 0; render(); });
  nxt.addEventListener("click", function () { idx++; render(); });
  render();
})();

(function(){
  var box=document.getElementById('sbox'), res=document.getElementById('sres'); if(!box) return;
  var idx=null;
  function load(cb){ if(idx) return cb(); fetch('/search-index.json').then(function(r){return r.json()}).then(function(j){idx=j;cb()}); }
  function score(doc,q){ var t=doc.t.toLowerCase(), b=doc.b.toLowerCase(), s=0; q.forEach(function(w){ if(t.indexOf(w)>-1) s+=5; if(b.indexOf(w)>-1) s+=1; }); return s; }
  function run(){ var q=box.value.trim().toLowerCase().split(/\s+/).filter(Boolean); if(!q.length){res.innerHTML='';res.style.display='none';return;}
    load(function(){ var hits=idx.map(function(d){return [score(d,q),d]}).filter(function(x){return x[0]>0}).sort(function(a,b){return b[0]-a[0]}).slice(0,8);
      if(!hits.length){res.innerHTML='<div class="sr-none">No results</div>';res.style.display='block';return;}
      res.innerHTML=hits.map(function(x){var d=x[1];return '<a href="'+d.u+'"><b>'+d.t+'</b><span>'+d.s+'</span></a>'}).join(''); res.style.display='block'; });
  }
  var t; box.addEventListener('input',function(){clearTimeout(t);t=setTimeout(run,120)});
  box.addEventListener('focus',run); document.addEventListener('click',function(e){ if(!e.target.closest('.search')) res.style.display='none'; });
  box.addEventListener('keydown',function(e){ if(e.key==='Escape'){res.style.display='none';box.blur();} });
})();
