(()=>{"use strict";const e=(()=>{const e=document.getElementById("content");return console.log(e),{content:e,tabBtn:document.querySelectorAll(".tab-btn"),pages:document.querySelectorAll(".content")}})(),t=((()=>{const t=document.createElement("div");e.content.appendChild(t),t.classList.add("header"),t.textContent="Restaurant Page"})(),(()=>{const t=document.createElement("div");t.classList.add("btn-container"),e.content.appendChild(t),["home","menu","contact"].forEach((e=>{const n=document.createElement("button");n.classList.add("tab-btn"),n.setAttribute("data-id",e),n.textContent=e,t.appendChild(n)}))})(),(()=>{const t=document.createElement("div");return t.classList.add("about-content"),e.content.appendChild(t),{tabContainer:t}})());(()=>{const e=document.createElement("div");e.classList.add("content"),e.classList.toggle("active"),e.setAttribute("id","home");const n=document.createElement("h4");n.textContent="My Restaurant";const a=document.createElement("img");a.src="./images/home.jpeg";const o=document.createElement("p");o.textContent="Beary's has the best porridge! The atmosphere and customer service make you feel like you are sitting in the middle of the woods, eating like a bear! This is exactly the kind of place that I like to return to again and again.",t.tabContainer.appendChild(e),e.appendChild(n),e.appendChild(o),e.appendChild(a)})(),(()=>{const e=document.createElement("div");e.classList.add("content"),e.setAttribute("id","menu");const n=document.createElement("h4");n.textContent="Menu";const a=document.createElement("p");a.textContent="Beary's has the best porridge! The atmosphere and customer service make you feel like you are sitting in the middle of the woods, eating like a bear! This is exactly the kind of place that I like to return to again and again.",t.tabContainer.appendChild(e),e.appendChild(n),e.appendChild(a)})(),(()=>{const e=document.createElement("div");e.classList.add("content"),e.setAttribute("id","contact");const n=document.createElement("h4");n.textContent="Contact";const a=document.createElement("p");a.textContent="Beary's has the best porridge! The atmosphere and customer service make you feel like you are sitting in the middle of the woods, eating like a bear! This is exactly the kind of place that I like to return to again and again.",t.tabContainer.appendChild(e),e.appendChild(n),e.appendChild(a)})(),window.onload;const n=document.getElementById("home"),a=document.querySelector("[data-id='home']"),o=document.getElementById("menu"),c=document.querySelector("[data-id='menu']"),d=document.getElementById("contact"),i=document.querySelector("[data-id='contact']");a.addEventListener("click",(()=>{n.classList.add("active"),o.classList.remove("active"),d.classList.remove("active")})),c.addEventListener("click",(()=>{n.classList.remove("active"),o.classList.toggle("active"),d.classList.remove("active")})),i.addEventListener("click",(()=>{n.classList.remove("active"),o.classList.remove("active"),d.classList.toggle("active")}))})();