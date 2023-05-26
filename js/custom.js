$(document).ready(function () {
    // AOS.init();

    // $(window).scroll(function(){
    //     if($(window).scrollTop() > 100){
    //         $('header').addClass('fix')
    //     }else{
    //         $('header').removeClass('fix')
    //     }

    
    // })

    // toggle password
    $('.shpass').click(function(){
        $(this).toggleClass('fa-eye-slash fa-eye')
        let inpType = $('.psh').attr('type')
        $('.psh').attr('type', inpType === 'password' ? 'text' : 'password'); 
    })

    

    $('.mbar-btn').click(function () {
        $('.nav-sidebar').toggleClass('nav-sidebarActive')
    })
    $('.sidebar-close').click(function () {
        $('.nav-sidebar').removeClass('nav-sidebarActive')

    })

    $('.cuaccord').click(function () {
        $('.cuaccord1-cir').toggle()
        $('.cuaccord i').toggleClass('fa-minus fa-plus')
    })

    
    

})