window.addEventListener("scroll" , function(){
    let header = document.querySelector('#header')
    menu.classList.toggle('rolagem' , window.scrollY > 0)
})