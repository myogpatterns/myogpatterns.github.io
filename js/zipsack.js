$('document').ready(function() {
    
    var version = "v0.1";
    $('.version').html(version);

    $('.length').keyup(function(event) {
        var val = $(this).val().replace(/[^\d.-]/,"");
        $(this).val(val);
        console.log(".length: "+val);
    })
    

})