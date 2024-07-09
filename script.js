

const nav_toggle=document.querySelector(".main_nav")
const nav_icon=document.querySelector(".nav_icon")
const toggle_nav=()=>{

nav_toggle.classList.toggle("nav_show")

nav_icon.classList.toggle("fa-xmark")

}
const  a_click=()=>{
    toggle_nav()
}
