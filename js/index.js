$(function () {
    console.log(1);
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

// 鼠标移动过去右侧导航变色
$('.field_consult_01').mouseenter(function(){
    $('.field_consult_01').css('background','#395e61');
    // $('.field_consult_01>div').css('display','block');
})

$('.field_consult_01').mouseleave(function(){
    $('.field_consult_01').css('background','none');
    // $('.field_consult_01>div').css('display','none');
})

$('.field_consult_02').mouseenter(function(){
    $('.field_consult_02').css('background','#5eb8e8');
    // $('.field_consult_02>div').css('display','block');
})

$('.field_consult_02').mouseleave(function(){
    $('.field_consult_02').css('background','none');
    // $('.field_consult_02>div').css('display','none');
})

$('.field_consult_03').mouseenter(function(){
    $('.field_consult_03').css('background','#f5ce00');
    $('.field_consult_03>div').css('display','block');
})
$('.field_consult_03').mouseleave(function(){
    $('.field_consult_03').css('background','none');
    $('.field_consult_03>div').css('display','none');
})

$('.field_consult_04').mouseenter(function(){
    $('.field_consult_04').css('background','#6cbd27');
    $('.field_consult_04>div').css('display','block');
})
$('.field_consult_04').mouseleave(function(){
    $('.field_consult_04').css('background','none');
    $('.field_consult_04>div').css('display','none');
})

$('.field_consult_05').mouseenter(function(){
    $('.field_consult_05').css('background','#f37500');
    $('.field_consult_05>div').css('display','block');
    $('.field_consult_05>a').css('text-decoration','none');
})
$('.field_consult_05').mouseleave(function(){
    $('.field_consult_05').css('background','none');
    $('.field_consult_05>div').css('display','none');
})

$('.field_consult_05').click(function(){
    $('.field_consult_05>a').css('text-decoration','none');
})



// 鼠标已过去，遮罩层不见

$('.after_03').mouseenter(function(){
    $('.after_03').css('display','none');
    console.log(11111)
})
$('.after_01').mouseleave(function(){
    $('.after_03').css('display','block');
})

$('.after_04').mouseenter(function(){
    $('.after_04').css('display','none');
    
})
$('.after_02').mouseleave(function(){
    $('.after_04').css('display','block');
})



// 当鼠标点击按钮，跳转到另外一个页面

// $('.field_consult_02_div>button').click(function(){
//     // console.log(2222);
//     window.location.href="http://crm2.qq.com/page/portalpage/wpa.php?uin=4001003366&f=1&ty=1";
// })

































})