const colorHe="0123456789abcdef";
function buscarColor(color){
    let segundo="#";
    for(let i=1;i<color.length;i++){
        let cont,ban=0,j=0;
        switch(i){
            case 1:cont=Math.random()*(16-1)+1; break;
            case 2:cont=Math.random()*(16-1)+1; break;
            case 3:cont=Math.random()*(16-1)+1; break;
            case 4:cont=Math.random()*(16-1)+1;  break;
            case 5:cont=Math.random()*(16-1)+1;  break;
            case 6:cont=Math.random()*(16-1)+1;  break;
        }
        cont=Math.round(cont);
        while(ban==0&&j<16){         
            if(color.charAt(i)==colorHe.charAt(j)){
                ban=1;
                if((j+cont)<=15&&(j+cont)>=0){
                    segundo+=colorHe[j+cont];                
                }else {
                    segundo+=colorHe[0];
                }
            }
            j++;
        }
    }
    
    return segundo;
}

function rotacion(valor){
    if(valor>=360){
        valor=0;
    }else{
        valor+=10;
    }
    return valor;
}

const $d=document;
const $boton=document.querySelectorAll(".boton");
const $marco=document.getElementById("marco");
const $marcoL=document.querySelector(".marcoL");
let marco="#a2d5f2";
let mR=0;
const $container=document.querySelector(".container");
const $containerL=document.querySelector(".containerL");
let container="#40a8c4";

const $logo=document.querySelector(".logo");
const $logoL=document.querySelector(".logoL");
let logo="#07689f";

let inter;

function star(){
    inter=setInterval(()=>{
        marco=buscarColor(marco);
        $marco.style.backgroundColor=marco;
        $marcoL.innerHTML=marco;
        $marcoL.style.color=marco;
        mR=rotacion(mR);
        $marco.style.transform="rotate("+mR+"deg)";
    
        logo=buscarColor(logo);
        $logo.style.backgroundColor=logo;
        $logoL.innerHTML=logo;
        $logoL.style.color=logo;
        $logo.style.transform="rotate(-"+mR+"deg)";
    
        container=buscarColor(container);
        $container.style.backgroundColor=container;
        $containerL.innerHTML=container;
        $containerL.style.color=container;

        for(let i=0;i<2;i++){
            $boton[i].style.background="linear-gradient("+container+","+marco+")";
        }
        
    },1000);
}

function stop(){
    clearInterval(inter);
}
let act=0;
$d.addEventListener("click",(e)=>{
   if(e.target.matches("#star")&&act==0){
       star();act=1;
   }
   if(e.target.matches("#stop")){
       stop();act=0;
   }
});