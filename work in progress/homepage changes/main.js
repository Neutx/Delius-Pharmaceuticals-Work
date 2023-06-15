/*=========== toggle icon navbar ======== */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/*=========== scroll sections active links ======== */ 
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header .navbar a');

window.onscroll = () =>{
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header .navbar a[href*='+id+']').classList.add('active');
            });
        };
    });
    /*=========== scroll sections active links ======== */ 

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    /*=========== remove toggle icon and navbar when click navbar link ======== */ 

    menuIcon.classList.remove('bx-x');
    navbar.classList.toggle('active');

};


/*=========== Typed JS ======== */ 
const typed = new Typed('.multiple-text', {
    strings: ['The Site is Under Construction.', 'We will be live soon.', 'Stay Tuned.'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true  
} );
