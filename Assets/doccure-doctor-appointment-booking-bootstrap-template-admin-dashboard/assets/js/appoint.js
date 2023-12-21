$(document).ready(function(){
    $('.table-remove').on('click', function(){
        console.log("object");
        $(this).parents(".appointment-list").detach();
    })
})