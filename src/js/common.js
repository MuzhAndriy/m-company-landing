window.onscroll = (event) => {
    let btn = document.querySelector('.upbtn')
    if (window.pageYOffset > 850) {
        btn.style.display = 'block';
    } else btn.style.display = 'none';
    btn.onclick = () => {
        window.scrollTo(0, 0);
    }
}

let mobile = document.querySelector('.nav__mobile');
    mobile.onclick = () =>{
        let menu = document.querySelector('.nav__menu');
        menu.classList.toggle('nav__menu_active');
        menu.onclick = () =>{
            menu.classList.remove('nav__menu_active');
        }
        setTimeout(()=>{
            menu.classList.remove('nav__menu_active');
        }, 5000);
    }
