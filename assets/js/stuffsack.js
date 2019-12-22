/*
    Stuff Sack Calculator. 2020.
    https://github.com/myogpatterns/myogpatterns.github.io
    Calculate fabric pattern sizes for round bottom stuff sack
*/

function roundToEigthInch (number) {
    var number = (Math.round(number * 8) / 8); 
    return number;
}

function patternSize(units, d, h) {
    if (units==1) {         // metric
        var csA = 4;        // channel seam allowance
        var sA = 1.0;       // general seam allowance
    }
    else {                  // imperial
        var csA = 1.5;      // channel seam allowance
        var sA = 0.375;     // general seam allowance
    }
    if (d,h > 0) {
        var circle = 1*d + 2*sA;
        var fabricW = (Math.PI*d + 2*sA);
        var fabricH = 1*h + 1*sA + 0.5*d + 1*csA;  

        if (units==1) { 
            var fabricW = fabricW.toFixed(1);    //trimming to closest mm
            var fabricH = fabricH.toFixed(1);
            var circle = circle.toFixed(1);
        }
        else { 
            var fabricW = roundToEigthInch(fabricW); //rounding to nearest 1/8" increment
            var fabricH = roundToEigthInch(fabricH); 
            var circle = roundToEigthInch(circle); 
        }   
                
        return [fabricW, fabricH, circle/2];   // returns radius
    }
};



$('document').ready(function () {

    var version = "v0.2";
    $('.version').html(version);

    

    $('.dimension').change(function () {   //when any .dimension changes (input loses focus), function runs
        
        
        
        /* Volume Calculation
        var vol = 1;
        $.each($('input[class=dimension]'), function () {
            var curr_val = $(this).val();
            if (curr_val != "") {
                //console.log($(this).attr('id')+" is "+curr_val);
                vol = vol * curr_val;    //volume cu in
            }
        });
        */

        var units = $( "input[type=radio][name=units]:checked" ).val();     // inches (val=0) or cm (val=1)

        var diameter = $('#diameter').val();
        var height = $('#height').val();
        
        if (diameter, height != "") {
            var scrap = patternSize(units,diameter,height);
            var fabricW = scrap[0];
            var fabricH = scrap[1];
            var radius = scrap[2];
            if (units == 1) { var unitText = " cm"}
            else { var unitText = " in"}
        
            //var volLiters = (vol * 0.0163871).toFixed(1);   //convert cubic inches to liters

            /* html id returns */ 
            $('.patternWidth').html(fabricW + unitText);
            $('.patternHeight').html(fabricH + unitText);
            $('.patternCircle').html(radius + unitText); 
            $('.patternDiameter').html(2*radius + unitText);
            
        }
    });
});