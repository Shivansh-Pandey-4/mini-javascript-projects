const heading=document.querySelector("h1");
const div=document.getElementById("display");

div.addEventListener("mouseenter",()=>{
    let randomNumber1=Math.ceil((Math.random()*255));
    let randomNumber2=Math.ceil((Math.random()*255));
    let randomNumber3=Math.ceil((Math.random()*255));
    // heading.innerHTML=randomNumber;
    let color=`${randomNumber1},${randomNumber2},${randomNumber3}`; 
    console.log(color);  
    heading.innerHTML=color;
    // div.style.background=`rgb${randomNumber1},${randomNumber2},${randomNumber3}`;
    div.style.background=`rgb(${randomNumber1},${randomNumber2},${randomNumber3})`;

})