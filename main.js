$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    items:1,
    look:true,
  
    autoplay:false,
    autoplayTimeout:800,
/*    animateOut:'fadeOut',*/
    navText:['<','>'],
  
})



$('.main_rasel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    autoplayTimeout:800,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})