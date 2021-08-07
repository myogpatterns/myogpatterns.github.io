/*
    Quick Sack Calculator. 2021.
    https://github.com/myogpatterns/myogpatterns.github.io
    Calculate fabric pattern sizes for rectangular bottom stuff sack
*/

function roundToEigthInch (number) {
    var number = (Math.round(number * 8) / 8); 
    return number;
}

function patternSize(units,collar,bL,bW,h) {
    if (units==1) {         // METRIC
        var csA = 4;        // cord channel height (4cm)
        var rt = 9;         // roll top height (9 cm)
        var hemA = 1;       // single fold hem allowance on each end of channel (1 cm)
        var hemRt = 4;      // double fold hem allowance at top edge of roll top for 20mm webbing
        var sA = 1;         // general seam allowance (1 cm)
    }
    else {                  // IMPERIAL
        var csA = 1.5;      // cord channel height (1.5")
        var rt = 3.5;       // roll top height (3.5")
        var hemA = 0.5;     // single fold hem allowance on each end of channel (0.5")
        var hemRt = 1.5;    // double fold hem allowance at top edge of roll top for 3/4" webbing
        var sA = 0.5;       // general seam allowance (0.5")
    }

    if (collar==1) {         // roll-top
        var collarh = rt;                           // open height minus roll top
        var channelH = collarh + 2*hemRt + sA;      //roll top height with hem and SA
        var fabricH = h + bW + (2*sA);            // height
    }
    else {                      // drawcord cinch
        var collarh = 2*csA;                // cSA folded on itself
        var channelH = collarh + (2*sA);      // SA on top and bottom
        var fabricH = h + bW - csA + (2*sA);     // height accounts for width and channel
    }
    
    if (bL,bW > 0) {
        //main body fabric panel
        var fabricL = 2*bL + 2*bW + 2*sA; 
       
        // separate cord channel
        var channelL = 2*bL + 2*bW + 2*hemA;      //hem on each end

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
        var collar = $( "input[type=radio][name=collar]:checked" ).val();     // cinch (val=0) or roll-top (val=1)

        // assign variables based on input id values from html form
        var bottomLength = Number($('#bottomLength').val());    
        var bottomWidth  = Number($('#bottomWidth').val());
        var totalHeight = Number($('#height').val());
        
        if (bottomLength, bottomWidth, totalHeight != 0) {
            var scrap = patternSize(units,collar,bottomLength,bottomWidth,totalHeight);
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