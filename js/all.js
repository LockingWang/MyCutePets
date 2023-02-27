$(document).ready(function () {
    // 漢堡選單
    $('.mobile-menuBTN').click(function (e) { 
        e.preventDefault();
        $(this).toggleClass('change');
        $('.navbar').toggleClass('show');  
    });
    // 網頁導覽
    $('.navbar li a').click(function (e) { 
        e.preventDefault();
        const target = $(this).attr('href');
        const targetPos = $(target).offset().top;
        $('html, body').animate({scrollTop:targetPos},1000);
    });
    // 監聽視窗區
    $(window).scroll(function(){
        const scrollPos = $(window).scrollTop();
        const windowHeight = $(window).height();
        
        // 滾動替navbar加上CSS
        $('.navbar li a').each(function(){
            const target = $(this).attr('href');
            const targetPos = $(target).offset().top;
            const targetHeight = $(target).outerHeight();
            if(scrollPos > targetPos && scrollPos < targetPos + targetHeight){
                $('.navbar li a').removeClass('active');
                $(this).addClass('active');
            }else{
                $(this).removeClass('active');
            }
        })

        // 進度條效果
        $('.introPart').each(function(){
            const targetPos = $(this).offset().top;
            const targetHeight = $(this).outerHeight();
            const targetEle = '.' + $(this).attr('id') + ' .bar_inside';

            const widthValue = $(targetEle).data('width');
            if(scrollPos > targetPos - targetHeight/2){
                $(targetEle).css('width', widthValue + '%');
            }
        })

        // 靠近fadeIn效果
        $('.init_hide').each(function(){
            const targetPos = $(this).offset().top;

            if(scrollPos > targetPos - windowHeight/1.5){
                $(this).addClass('fadeIn');
            }
        })

        // 滾動效果(耗效能)
        $('.placeIntro img').css('transform', 'translateX( ' + -(scrollPos / 2) + 'px )')
        $('.intro_money, .intro_marbo').css('background-position-x', (scrollPos / 2) +'px')
        $('.intro_mi').css('background-position-x', -(scrollPos / 2) +'px')
    })
});