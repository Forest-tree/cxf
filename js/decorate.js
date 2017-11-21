$(function () {
    console.log(2);
    var mySwiper = new Swiper('.swiper-container', {
        direction: 'horizontal',
        loop: true,
        effect: 'fade',
        initialSlide: 2,
        paginationType: 'bullets', //默认小圆点
        autoplay: 6000, //自动播放
        speed: 300, //自动滑动
        // nextButton: '.swiper-button-next',
        // prevButton: '.swiper-button-prev',
        // 如果需要分页器
        pagination: '.swiper-pagination',

        // 如果需要前进后退按钮
        // navigation: {
        //     nextEl: '.swiper-button-next',
        //     prevEl: '.swiper-button-prev',
        // }

        // 如果需要滚动条
        // scrollbar: {
        //     el: '.swiper-scrollbar',
        // },
    });


$('.vision_nav_div_bottom_Vi_ul_nav li').click(function(){
        $(this).addClass('indexes').siblings().removeClass('indexes');
        // $(".tab-pane active vision_nav_div_bottom_Vi .qqq").eq( $(this).index()).show(1000).siblings().hide(1000);
        // $(this).
})








})