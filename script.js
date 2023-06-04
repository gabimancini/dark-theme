const OSTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
const switchBtn = document.getElementById("switch__btn");

/* Establecemos el theme */
let setTheme = (theme)=>{
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
}

/* Obtenemos el theme */
let getTheme = ()=>{
   let switchTheme = localStorage.getItem("theme") === "dark" ? "light" : "dark";
   setTheme(switchTheme);
}

switchBtn.addEventListener("click",getTheme);

setTheme(localStorage.getItem("theme") || OSTheme)