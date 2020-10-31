
// Generate a password string
function randString(id){
    var dataSet = $(id).attr('data-character-set').split(',');
    var possible = '';
    if($.inArray('a-z', dataSet) >= 0){
        possible += 'abcdefghijklmnopqrstuvwxyz';
    }
    if($.inArray('A-Z', dataSet) >= 0){
        possible += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }
    if($.inArray('0-9', dataSet) >= 0){
        possible += '0123456789';
    }
    if($.inArray('#', dataSet) >= 0){
        possible += '![]{}()%&*$#^<>~@|';
    }
    var text = '';
    for(var i=0; i < $(id).attr('data-size'); i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}


// Create a new password
$(".getNewPass").click(function(){
    var field = $(this).closest('div').find('input[rel="gp"]');
    field.val(randString(field));
});

// Auto Select Pass On Focus
$('input[rel="gp"]').on("click", function () {
    $(this).select();
});

/*********************************** side navbar *************************************/
function openNav() {
    document.getElementById("mySidenav").style.width = "260px";
    document.getElementById("card-menu").style.display = "block";
    // document.getElementById("opennav").style.display = "none";
    document.getElementById("overlay").style.opacity = "10";
    document.getElementById("overlay").style.zIndex = "10";
    // document.getElementById("main").style.marginRight = "340px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    // document.getElementById("main").style.marginRight = "0";
    // document.getElementById("opennav").style.display = "block";
    document.getElementById("overlay").style.opacity = "0";
    document.getElementById("overlay").style.zIndex = "-1";
    document.getElementById("card-menu").style.display = "none";
    // setTimeout(myFunction, 300);
}
function myFunction() {

    document.getElementById("card-menu").style.display = "none";

}
$(document).ready(function(){
    $windowWidth = $(window).width();
    if ($windowWidth>=1200){
        document.getElementById("opennav-div").style.display = "none";
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("card-menu").style.display = "none";
    }
    else {
        document.getElementById("opennav-div").style.display = "block";
    }
    document.getElementById('overlay').addEventListener('click', function() {
        document.getElementById("mySidenav").style.width = "0";
        // document.getElementById("main").style.marginRight = "0";
        // document.getElementById("opennav").style.display = "block";
        document.getElementById("overlay").style.opacity = "0";
        document.getElementById("overlay").style.zIndex = "-1";
        document.getElementById("card-menu").style.display = "none";
        // setTimeout(myFunction, 300);
    });
});
$(window).resize(function() {
    $windowWidth = $(window).width();
    if ($windowWidth>=1200){
        document.getElementById("opennav-div").style.display = "none";
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("card-menu").style.display = "none";
    }
    else {
        document.getElementById("opennav-div").style.display = "block";
    }
});
/*********************************** side navbar *************************************/
