var backgrung_imgs = ["class1","class2","class3"]
var header = document.getElementById("header")

setInterval(function(){
    var randomkey = Math.floor(Math.random()*backgrung_imgs.length);
    header.setAttribute("class",backgrung_imgs[randomkey]);
},1500)