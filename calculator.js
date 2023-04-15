const screen=document.querySelector(".screen");

let buttons=document.querySelectorAll(".btn");
let equals=document.querySelector(".btn-equal");
let clear=document.querySelector(".btn-clear");




buttons.forEach(button=>{
    button.addEventListener('click',(e)=>{
        checkvalue(e.target.dataset.num);
    })
});
document.addEventListener("keypress",(e)=>{
    if(e.key === 'Enter'){
        let answer1 = eval(screen.value);
        screen.value = answer1;
    }
    else if(e.key === 'c'){
        screen.value = " ";
    }
    
    
    else{checkvalue(e.key);}
})
function checkvalue(x){
    const value=x;
    screen.value+= value;
    console.log(screen.value);

}
equals.addEventListener('click',(e)=>{
    if(screen.value=='')
    {
        screen.value= " ";
    }
    else{
        let answer=eval(screen.value);
        screen.value=answer;
       
    }
});

clear.addEventListener('click',(e)=>{
    screen.value="";
})

