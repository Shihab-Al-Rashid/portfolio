// Portfolio V5 Premium Starter

document.addEventListener("DOMContentLoaded", () => {

  // Smooth scrolling
  document.querySelectorAll('a[href^="#"]').forEach(link=>{
    link.addEventListener("click",e=>{
      const target=document.querySelector(link.getAttribute("href"));
      if(target){
        e.preventDefault();
        target.scrollIntoView({behavior:"smooth"});
      }
    });
  });

  // Sticky header shadow
  const header=document.querySelector("header");
  window.addEventListener("scroll",()=>{
    if(header){
      header.style.boxShadow=window.scrollY>30
        ?"0 10px 30px rgba(0,0,0,.25)"
        :"none";
    }
  });

  // Active navbar
  const sections=document.querySelectorAll("section[id]");
  const navLinks=document.querySelectorAll("nav a");

  function updateActive(){
    let current="";
    sections.forEach(sec=>{
      const top=sec.offsetTop-140;
      if(window.scrollY>=top){
        current=sec.id;
      }
    });

    navLinks.forEach(link=>{
      link.classList.remove("active");
      if(link.getAttribute("href")==="#"+current){
        link.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll",updateActive);
  updateActive();

  // Scroll reveal
  const revealItems=document.querySelectorAll(".card,.skill-card,.project-card,.timeline-item,.section-title");

  const observer=new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.style.opacity="1";
        entry.target.style.transform="translateY(0)";
      }
    });
  },{threshold:0.15});

  revealItems.forEach(el=>{
    el.style.opacity="0";
    el.style.transform="translateY(40px)";
    el.style.transition="all .6s ease";
    observer.observe(el);
  });

  // Typing effect
  const title=document.querySelector(".hero h2");
  if(title){
    const txt=title.textContent;
    title.textContent="";
    let i=0;
    (function type(){
      if(i<txt.length){
        title.textContent+=txt.charAt(i++);
        setTimeout(type,60);
      }
    })();
  }

  // Back to top button
  const btn=document.createElement("button");
  btn.innerHTML="↑";
  btn.id="backTop";
  Object.assign(btn.style,{
    position:"fixed",
    right:"25px",
    bottom:"25px",
    width:"50px",
    height:"50px",
    borderRadius:"50%",
    border:"none",
    background:"#2563eb",
    color:"#fff",
    fontSize:"22px",
    cursor:"pointer",
    display:"none",
    zIndex:"9999"
  });

  document.body.appendChild(btn);

  window.addEventListener("scroll",()=>{
    btn.style.display=window.scrollY>350?"block":"none";
  });

  btn.onclick=()=>window.scrollTo({
    top:0,
    behavior:"smooth"
  });

  console.log("Portfolio V5 Premium Loaded");
});
