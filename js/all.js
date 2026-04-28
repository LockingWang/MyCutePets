$(document).ready(function () {
    /** 依 YYYY-MM-DD（本地時區）計算足歲（截至指定「參考日」，含過世日） */
    function petAgeYearsAsOf(birthStr, refStr) {
        const pb = birthStr.split('-').map(Number);
        const pr = refStr.split('-').map(Number);
        if (pb.length !== 3 || pr.length !== 3 || pb.some(Number.isNaN) || pr.some(Number.isNaN)) {
            return '';
        }
        const birth = new Date(pb[0], pb[1] - 1, pb[2]);
        const ref = new Date(pr[0], pr[1] - 1, pr[2]);
        let age = ref.getFullYear() - birth.getFullYear();
        const monthDiff = ref.getMonth() - birth.getMonth();
        if (monthDiff < 0 || (monthDiff === 0 && ref.getDate() < birth.getDate())) {
            age--;
        }
        return age;
    }
    /** 依生日計算目前足歲 */
    function petAgeYears(birthStr) {
        const y = new Date().getFullYear();
        const m = String(new Date().getMonth() + 1).padStart(2, '0');
        const d = String(new Date().getDate()).padStart(2, '0');
        return petAgeYearsAsOf(birthStr, y + '-' + m + '-' + d);
    }
    $('.pet-age').each(function () {
        const $el = $(this);
        const birth = $el.attr('data-birth');
        const passed = $el.attr('data-passed');
        if (passed) {
            $el.text(petAgeYearsAsOf(birth, passed));
        } else {
            $el.text(petAgeYears(birth));
        }
    });

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
        $('.intro_money, .intro_marbo, .intro_mumu').css('background-position-x', (scrollPos / 2) +'px')
        $('.intro_mi').css('background-position-x', -(scrollPos / 2) +'px')
    })
});