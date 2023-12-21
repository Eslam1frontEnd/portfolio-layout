var backgrung_imgs = ["class1","class2","class3","class4"]
var header = document.getElementById("header")

setInterval(function(){
    var randomkey = Math.floor(Math.random()*backgrung_imgs.length);
    header.setAttribute("class",backgrung_imgs[randomkey]);
},1500)







$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if(scroll > 780){
            $(".navbar").css("background" , "#000")
            $("span").addClass("show")
        }
        else{
            $(".navbar").css("background" , "transparent")
            $("span").removeClass("show")
        }
    })



        $('.section').each(function(){
        if($(window).scrollTop() > $(this).offset().top){
            thisOfs = $(this).attr('id'); 
            tisOfsHov = $(thisOfs).addClass("active");
            $(".navbar ul li a").addClass('activ');
        } 
    });

    $(".navbar ul li a").click(function(){
        $(this).addClass("active");
        $(this).parent().siblings().find('a').removeClass("active");
        $("html,body").animate({
            scrollTop: $("#" + $(this).data('scroll')).offset().top - 180,
        })
    })

})