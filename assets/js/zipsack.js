/*
    Zip Pouch Calculator. 2020.
    https://github.com/myogpatterns/myogpatterns.github.io
    Calculate fabric pattern sizes for rectangular zip sack
*/

function roundToEigthInch (number) {
    var number = (Math.round(number * 8) / 8); 
    return number;
}

// function patternSize(l,w,h) {
//     var zsA = 0.5;      // zipper seam allowance
//     var sA = 0.375;     // general seam allowance
//     if (l,w,h > 0) {
//         var fabricW = 2*w + 2*h + (2*zsA);
//         var fabricH = 1*l + 1*h + (2*sA);
//         return [fabricW, fabricH];
//     }
// }

function patternSize(units,l,w,h) {
    if (units==1) {         // metric
        var zsA = 1.3;        // channel seam allowance
        var sA = 1.0;       // general seam allowance
    }
    else {                  // imperial
        var zsA = 0.5;      // channel seam allowance
        var sA = 0.375;     // general seam allowance
    }
    if (l,w,h > 0) {
        var fabricW = 2*w + 2*h + (2*zsA);
        var fabricH = 1*l + 1*h + (2*sA);

        if (units==1) { 
            var fabricW = fabricW.toFixed(1);    //trimming to closest mm
            var fabricH = fabricH.toFixed(1);
        }
        else { 
            var fabricW = roundToEigthInch(fabricW); //rounding to nearest 1/8" increment
            var fabricH = roundToEigthInch(fabricH); 
        }   
                
        return [fabricW, fabricH];   // returns radius
    }
}


$('document').ready(function () {

    var version = "v0.3";
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

        var units = $( "input[type=radio][name=units]:checked" ).val();     // inches (val=0) or cm (val=1)

        var length = $('#length').val();
        var width = $('#width').val();
        var height = $('#height').val();
        
        if (length, width, height != "") {
            var scrap = patternSize(units, length,width,height);
            var fabricW = scrap[0];
            var fabricH = scrap[1];
            if (units == 1) { var unitText = " cm" }
            else { var unitText = " in" }
            var volLiters = (vol * 0.0163871).toFixed(1);   //convert cubic inches to liters

            //html id returns
            $('#volumeCuIn').html(vol);     
            $('#volumeLiters').html(volLiters);
            $('.patternHeight').html(fabricH + unitText);
            $('.patternWidth').html(fabricW + unitText);

        }
    });
});