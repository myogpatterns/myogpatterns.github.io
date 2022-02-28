/*
    Build Gallery Hide/Show. 2022.
    https://github.com/myogpatterns/myogpatterns.github.io
    Hides a bunch of images until button click

    div id #build_gallery
*/

$("#toggle_style_gallery_button").click(function() {
    $("#style_gallery").slideToggle( 'fast' );
    $( this ).toggleClass('fa-angle-down');
    $( this ).toggleClass('fa-angle-up');
})
$("#toggle_build_gallery_button").click(function() {
    $("#build_gallery").slideToggle( 'fast' );
    $( this ).toggleClass('fa-angle-down');
    $( this ).toggleClass('fa-angle-up');
})

