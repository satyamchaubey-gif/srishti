const $ = (s) => document.querySelector(s);
const $$ = (s) => document.querySelectorAll(s);

document.querySelectorAll("[data-scroll]").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelector(btn.dataset.scroll)?.scrollIntoView({behavior:"smooth"});
  });
});

const petals = $(".petals");
for(let i=0;i<18;i++){
  const p=document.createElement("span");
  p.className="petal";
  p.style.left=Math.random()*100+"%";
  p.style.animationDuration=(8+Math.random()*12)+"s";
  p.style.animationDelay=(-Math.random()*15)+"s";
  p.style.transform=`rotate(${Math.random()*360}deg)`;
  petals.appendChild(p);
}

const reveal = $("#revealBox");
$$(".reason").forEach(card=>{
  card.addEventListener("click",()=>{
    reveal.textContent = card.dataset.reveal;
    reveal.animate(
      [{opacity:.2,transform:"translateY(5px)"},{opacity:1,transform:"translateY(0)"}],
      {duration:350,easing:"ease-out"}
    );
  });
});

const letterButton=$("#openLetter");
const envelope=$(".envelope");
const letterContent=$("#letterContent");
letterButton.addEventListener("click",()=>{
  envelope.style.display="none";
  letterContent.classList.add("open");
});

const modal=$("#modal");
const modalText=$("#modalText");
$$(".photo-card").forEach(card=>{
  card.addEventListener("dblclick",()=>{
    modalText.textContent="Another little memory worth keeping. ♡";
    modal.classList.add("show");
  });
});
$("#closeModal").addEventListener("click",()=>modal.classList.remove("show"));
modal.addEventListener("click",e=>{if(e.target===modal)modal.classList.remove("show")});
