// Portfolio V4 Script

// Smooth active nav
const sections=document.querySelectorAll("section");
const navLinks=document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{
  let current="";
  sections.forEach(sec=>{
    const top=sec.offsetTop-120;
    if(pageYOffset>=top){current=sec.getAttribute("id");}
  });

  navLinks.forEach(link=>{
    link.classList.remove("active");
    if(link.getAttribute("href")==="#"+current){
      link.classList.add("active");
    }
  });

  const header=document.querySelector("header");
  if(header){
    header.style.boxShadow=window.scrollY>50?"0 8px 25px rgba(0,0,0,.35)":"none";
  }
});

// Typing effect
const title=document.querySelector(".hero h2");
if(title){
  const text=title.textContent;
  title.textContent="";
  let i=0;
  function type(){
    if(i<text.length){
      title.textContent+=text.charAt(i++);
      setTimeout(type,60);
    }
  }
  window.addEventListener("load",type);
}

// Fade-in on scroll
const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.style.opacity="1";
      entry.target.style.transform="translateY(0)";
    }
  });
},{threshold:0.15});

document.querySelectorAll(".card,.skill-card,.project-card,.timeline-item").forEach(el=>{
  el.style.opacity="0";
  el.style.transform="translateY(40px)";
  el.style.transition="all .6s ease";
  observer.observe(el);
});

// Back to top
const btn=document.createElement("button");
btn.innerHTML="↑";
btn.id="topBtn";
Object.assign(btn.style,{
 position:"fixed",bottom:"25px",right:"25px",
 width:"48px",height:"48px",borderRadius:"50%",
 border:"none",background:"#2563eb",color:"#fff",
 fontSize:"22px",cursor:"pointer",display:"none",zIndex:"9999"
});
document.body.appendChild(btn);

window.addEventListener("scroll",()=>{
  btn.style.display=window.scrollY>300?"block":"none";
});
btn.onclick=()=>window.scrollTo({top:0,behavior:"smooth"});

console.log("Portfolio V4 loaded.");
