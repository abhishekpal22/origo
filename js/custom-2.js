$(document).ready(function () {
    AOS.init();

    // $(window).scroll(function(){
    //     if($(window).scrollTop() > 100){
    //         $('header').addClass('fix')
    //     }else{
    //         $('header').removeClass('fix')
    //     }
    // })

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


    for (i = 0; i <= 30; i++) {

        let currentDate = new Date();
        let nextDate = currentDate.setDate(currentDate.getDate() + i);
        let newDate = new Date(nextDate);
        let getDay = newDate.getDay();
        let getDate = newDate.getDate();
        let getMonth = newDate.getMonth();

        if (getDay == 0) {
            getDay = "Sun";
        } else if (getDay == 1) {
            getDay = "Mon";
        } else if (getDay == 2) {
            getDay = "Tue";
        } else if (getDay == 3) {
            getDay = "Wed";
        } else if (getDay == 4) {
            getDay = "Thu";
        } else if (getDay == 5) {
            getDay = "Fri";
        } else if (getDay == 6) {
            getDay = "Sat";
        }

        if (getMonth == 0) {
            getMonth = "Jan";
        } else if (getMonth == 1) {
            getMonth = "Feb";
        } else if (getMonth == 2) {
            getMonth = "Mar";
        } else if (getMonth == 3) {
            getMonth = "Apr";
        } else if (getMonth == 4) {
            getMonth = "May";
        } else if (getMonth == 5) {
            getMonth = "Jun";
        } else if (getMonth == 6) {
            getMonth = "Jul";
        } else if (getMonth == 7) {
            getMonth = "Aug";
        } else if (getMonth == 8) {
            getMonth = "Sep";
        } else if (getMonth == 9) {
            getMonth = "Oct";
        } else if (getMonth == 10) {
            getMonth = "Nov";
        } else if (getMonth == 11) {
            getMonth = "Dec";
        }
        $('.thsltxt .calendar').append('<div class="item"><div class="dv"><div>' + getDay + '</div><div class="dt">' + getDate + '</div><div>' + getMonth + '</div></div></div>');
    }

    

    $('.thsltxt .calendar').owlCarousel({
        loop: false,
        margin: 12,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 6
            },
            600: {
                items: 6
            },
            1000: {
                items: 6
            }
        }
    });

    $('.thsltxt .calendar .owl-item').eq(0).find('.item .dv').addClass('active');

})