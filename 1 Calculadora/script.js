const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

buttons.forEach((item)=>{
    item.onclick=()=>{//reconozco que boton le he dato click
    if (item.id=="clear") {
        display.innerText="";

    }else if (item.id=="backspace") {
        let string = display.innerText.toString(); //Combierte todo a una cadenade caracteres  
        display.innerText=string.substr(0,string.length-1); //Devuelve la cantindad de caracteres
            
    }else if (display.innerText !=""&& item.id=="equals") {
        display.innerText=eval(display.innerText);

    }else if (display.innerText == "" && item.id=="equals"){
        display.innerText="Null";
        setTimeout(()=>(display.innerText = " "),2000);
    }else{
        display.innerText += item.id;
    }
  }
})

const themeToggleBtn = document.querySelector(".theme-toggler");
const calculator = document.querySelector(".calculator");
// const toggleIcon = document.querySelector(".toggler-icon");
let isDark=true;
themeToggleBtn.onclick=()=>{
calculator.classList.toggle("dark");
themeToggleBtn.classList.toggle("active");
isDark=!isDark;
}