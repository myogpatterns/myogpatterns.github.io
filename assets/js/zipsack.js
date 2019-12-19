/*
    Zip Pouch Calculator. 2020.
    https://github.com/myogpatterns/myogpatterns.github.io
    Calculate fabric pattern sizes for rectangular zip sack
*/

function patternSize(l,w,h) {
    var zsA = 0.5;      // zipper seam allowance
    var sA = 0.375;     // general seam allowance
    if (l,w,h > 0) {
        var fabricW = 2*w + 2*h + (2*zsA);
        var fabricH = 1*l + 1*h + (2*sA);
        return [fabricW, fabricH];
    }
}



$('document').ready(function () {

    var version = "v0.2";
    $('.version').html(version);

    $('.dimension').change(function () {   //when any .dimension changes (input loses focus), function runs
        var vol = 1;
        $.each($('input[class=dimension]'), function () {
            var curr_val = $(this).val();
            if (curr_val != "") {
                //console.log($(this).attr('id')+" is "+curr_val);
                vol = vol * curr_val;    //volume cu in
            }
        });

        var length = $('#length').val();
        var width = $('#width').val();
        var height = $('#height').val();
        
        if (length, width, height != "") {
            var scrap = patternSize(length,width,height);
            var fabricW = scrap[0];
            var fabricH = scrap[1];
        
            var volLiters = (vol * 0.0163871).toFixed(1);   //convert cubic inches to liters

            //html id returns
            $('#volumeCuIn').html(vol);     
            $('#volumeLiters').html(volLiters);
            $('.patternHeight').html(fabricH + '"');
            $('.patternWidth').html(fabricW + '"');

        }
    });
});