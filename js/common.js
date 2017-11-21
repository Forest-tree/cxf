$(function () {

    scrollTop('a[href^="#top"]');
    
        function scrollTop(id) {
            $(id).click(function (e) {
                console.log(id);
                e.preventDefault();
                $('html, body').animate({
                    scrollTop: $(this.hash).offset().top
                }, 1000);
            });
        }
    
    console.log(2)
})