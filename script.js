let sidemenu=document.getElementById("sidemenu");
function openmenu(){
    sidemenu.style.right="0";
}
function closemenu(){
    sidemenu.style.right="-200px";
}

const slider=document.querySelector('.slider');
const leftArrow=document.querySelector('.left');
const rightArrow=document.querySelector('.right');
let i=0;
rightArrow.addEventListener('click',function(){
     i=(i<3)?i+1:3;
     slider.style.transform=`translate(${(i)*-25}%)`;
});

leftArrow.addEventListener('click',function(){
    i=(i>0)?i-1:0;
          slider.style.transform=`translate(${(i)*-25}%)`;
});
