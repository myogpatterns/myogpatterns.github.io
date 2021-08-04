/*
    Quick Sack Calculator. 2021.
    https://github.com/myogpatterns/myogpatterns.github.io
    Calculate fabric pattern sizes for rectangular bottom stuff sack
*/

function roundToEigthInch (number) {
    var number = (Math.round(number * 8) / 8); 
    return number;
}

function patternSize(units,bL,bW,h) {
    if (units==1) {         // metric
        var csA = 4;        // cord channel height (4cm)
        var hemA = 1;     // hem allowance on each end of channel
        var sA = 1;       // general seam allowance (1 cm)
    }
    else {                  // imperial
        var csA = 1.5;      // cord channel height (1.5")
        var hemA = 0.5;     // single fold hem allowance on each end of channel
        var sA = 0.5;       // general seam allowance (0.5")
    }
    if (bL,bW,h > 0) {
        //main body fabric panel
        var fabricL = 2*bL + 2*bW + 2*sA;
        var fabricH = (h-csA) + 0.5*bW + 2*sA;  //input height includes channel

        // separate cord channel
        var channelL = 2*bL + 2*bW + 2*hemA;      //hem on each end
        var channelH = 2*(csA + sA);            //cord channel folded in half

        if (units==1) { 
            var fabricL = fabricL.toFixed(1);    //trimming to closest mm
            var fabricH = fabricH.toFixed(1);
            var channelL = channelL.toFixed(1);
            var channelH = channelH.toFixed(1);
        }
        else { 
            var fabricL = roundToEigthInch(fabricL); //rounding to nearest 1/8" increment
            var fabricH = roundToEigthInch(fabricH); 
            var channelL = roundToEigthInch(channelL); 
            var channelH = roundToEigthInch(channelH); 
        }   
                
        return [fabricL, fabricH, channelL, channelH, sA];   // 
    }
};



$('document').ready(function () {

    var version = "v0.1";               // initial version
    $('.version').html(version);

    
    $('.dimension').change(function () {   //when any .dimension changes (input loses focus), function runs

        var units = $( "input[type=radio][name=units]:checked" ).val();     // inches (val=0) or cm (val=1)

        // assign variables based on input id values from html form
        var bottomLength = $('#bottomLength').val();    
        var bottomWidth  = $('#bottomWidth').val();
        var totalHeight = $('#height').val();
        
        if (bottomLength, bottomWidth, totalHeight != 0) {
            var scrap = patternSize(units,bottomLength,bottomWidth,totalHeight);
            var fabricL = scrap[0];
            var fabricH = scrap[1];
            var channelL = scrap[2];
            var channelH = scrap[3];
            if (units == 1) { 
                var unitText = " cm";
                var sA = scrap[4];
                }
                else { 
                    var unitText = " in";
                    var sA = scrap[4];
                }
        
            /* html id returns */ 
            $('.patternLength').html(fabricL + unitText);
            $('.patternHeight').html(fabricH + unitText);
            $('.channelLength').html(channelL + unitText);
            $('.channelHeight').html(channelH + unitText);
            $('.sA').html(sA + unitText);
            
        }
    });
});