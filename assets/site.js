/* Unlock IQ — site.js v3.0 (no tracking, no cookies) */
(function () {
  var t = document.querySelector(".nav-toggle"), l = document.querySelector(".nav-links");
  if (t && l) t.addEventListener("click", function () {
    var open = l.classList.toggle("open"); t.setAttribute("aria-expanded", open ? "true" : "false");
  });
  document.querySelectorAll(".sub-toggle").forEach(function (b) {
    b.setAttribute("aria-expanded", "false");
    b.addEventListener("click", function () {
      var open = b.parentElement.classList.toggle("open"); b.setAttribute("aria-expanded", open ? "true" : "false");
    });
  });

  var box = document.getElementById("tryq"); if (!box) return;
  var Q = {
    "1": [{ q: "Meera is counting her marbles: 17, 18, 19 … Which number will she say next?", o: ["18", "20", "21", "29"], a: 1, e: "The number that comes just after 19 is 20." },
          { q: "Riya has 3 red balloons and 4 blue balloons. How many balloons does she have in all?", o: ["6", "7", "8", "1"], a: 1, e: "3 + 4 = 7, so Riya has 7 balloons." }],
    "2": [{ q: "A school library has 48 storybooks. It buys 27 more. How many storybooks does the library have now?", o: ["65", "75", "74", "85"], a: 1, e: "48 + 27 = 75 storybooks." },
          { q: "A cricket match lasts for 2 hours. For how many minutes does the match last?", o: ["60", "100", "120", "200"], a: 2, e: "1 hour has 60 minutes, so 2 hours have 120 minutes." }],
    "3": [{ q: "Aarav has 24 laddoos. He puts an equal number of laddoos into each of 4 boxes. How many laddoos are there in each box?", o: ["4", "6", "8", "12"], a: 1, e: "24 ÷ 4 = 6, so each box has 6 laddoos." },
          { q: "Which of these numbers is an even number?", o: ["37", "53", "68", "91"], a: 2, e: "A number that ends in 0, 2, 4, 6 or 8 is even. 68 ends in 8." }],
    "4": [{ q: "The perimeter of a square park is 36 metres. What is the length of one side of the park?", o: ["6 m", "8 m", "9 m", "12 m"], a: 2, e: "A square has 4 equal sides, so one side is 36 ÷ 4 = 9 m." },
          { q: "One box holds 8 pencils. How many pencils are there in 7 such boxes?", o: ["54", "56", "64", "48"], a: 1, e: "7 × 8 = 56 pencils." }],
    "5": [{ q: "Which of these fractions is greater than one half?", o: ["2/5", "3/8", "5/9", "4/10"], a: 2, e: "Half of 9 is 4.5. Since 5 is more than 4.5, 5/9 is greater than 1/2." },
          { q: "A train leaves the station at 9:40 a.m. and reaches Mumbai at 11:15 a.m. How long does the journey take?", o: ["1 h 25 min", "1 h 35 min", "1 h 45 min", "2 h 15 min"], a: 1, e: "9:40 to 10:40 is 1 hour, and 10:40 to 11:15 is 35 minutes." }],
    "6": [{ q: "One bell rings every 6 minutes and another bell rings every 8 minutes. They ring together at 10:00 a.m. After how many minutes will they ring together again?", o: ["12", "16", "24", "48"], a: 2, e: "The LCM of 6 and 8 is 24, so they ring together again after 24 minutes." },
          { q: "When 9 is added to a number, the answer is 21. What is the number?", o: ["11", "12", "13", "30"], a: 1, e: "21 − 9 = 12." }],
    "7": [{ q: "What is the value of (−3) × (−4) + (−5)?", o: ["7", "−7", "17", "−17"], a: 0, e: "(−3) × (−4) = 12, and 12 + (−5) = 7." },
          { q: "A shirt costs ₹250. The shop gives a discount of 20%. How much money does the buyer save?", o: ["₹25", "₹40", "₹50", "₹75"], a: 2, e: "20% of 250 = 250 × 20 ÷ 100 = ₹50." }],
    "8": [{ q: "A square garden has an area of 1,764 square metres. What is the length of one side of the garden?", o: ["38 m", "42 m", "44 m", "48 m"], a: 1, e: "42 × 42 = 1,764, so each side is 42 m." },
          { q: "Three times a number, minus 7, is equal to 11. What is the number?", o: ["4", "5", "6", "18"], a: 2, e: "3x − 7 = 11, so 3x = 18 and x = 6." }],
    "9": [{ q: "Which of these numbers is irrational?", o: ["√49", "0.75", "√2", "22/7"], a: 2, e: "√2 cannot be written as a fraction of two whole numbers. The others can: √49 = 7, 0.75 = 3/4, and 22/7 is already a fraction." },
          { q: "What is the sum of the interior angles of a hexagon?", o: ["540°", "720°", "900°", "1080°"], a: 1, e: "Sum of interior angles = (n − 2) × 180° = (6 − 2) × 180° = 720°." }],
    "10": [{ q: "What are the roots of the equation x² − 5x + 6 = 0?", o: ["1 and 6", "2 and 3", "−2 and −3", "5 and 6"], a: 1, e: "x² − 5x + 6 = (x − 2)(x − 3), so x = 2 or x = 3." },
           { q: "What is the value of sin 30° + cos 60°?", o: ["0", "1/2", "1", "√3"], a: 2, e: "sin 30° = 1/2 and cos 60° = 1/2, so the sum is 1." }],
    "11": [{ q: "How many different 3-letter arrangements can be made from the letters of the word MATH if no letter is repeated?", o: ["12", "24", "48", "64"], a: 1, e: "4 × 3 × 2 = 24 arrangements." },
           { q: "In an arithmetic progression, the 5th term is 17 and the 9th term is 29. What is the common difference?", o: ["2", "3", "4", "6"], a: 1, e: "From the 5th term to the 9th term, the common difference is added 4 times: 29 − 17 = 12, so d = 12 ÷ 4 = 3." }]
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
