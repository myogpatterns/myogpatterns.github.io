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
    if (units==1) {         // METRIC
        var rt = 12;        // roll-top collar height (12 cm)
        var hem = 4;        // double fold hem allowance at top of collar (20 mm webbing)
        var sA = 1.5;         // general seam allowance (1.5 cm) for french seams
    }
    else {                  // IMPERIAL
        var rt = 4.5;         // roll-top collar height (4.5") 3/4" webbing rolled 4 times
        var hem = 1.5;      // double fold hem allowance at top of collar (0.75" webbing)
        var sA = 5/8;       // general seam allowance (5/8") for french seams
    }

    
    // body fabric panel
    var fabricL  = 2*bL + (2*bW) + (2*sA);
    var rollTopH = rt + hem;                 // roll-top height + top hem
    var webbingL = bL + bW + 2*hem; //adds hem on each end to fold under

    if (bW > 3) {                                           // add material so top will close when bW is wide
        var fabricH = h + bW + sA + rollTopH;           // adds (1/2bW) to top of fabricH to make up additional width
        }
        else {
            var fabricH = h + (0.5*bW) + sA + rollTopH; // 1/2bW is the corner cut off bottom to make rectangular
        }
    


    // rounding dimensions for output
    if (units==1) { 
        var fabricL = fabricL.toFixed(1);           //trimming to closest mm
        var fabricH = fabricH.toFixed(1);
    }
    else { 
        var fabricL = roundToEigthInch(fabricL);    //rounding to nearest 1/8" increment
        var fabricH = roundToEigthInch(fabricH); 
    }   
            
    return [fabricL, fabricH, sA, hem, webbingL];   
    
};



$('document').ready(function () {

    var version = "v0.1";               // initial version
    $('.version').html(version);

    
    $('.dimension').change(function () {   //when any .dimension changes (input loses focus), function runs

        var units = $( "input[type=radio][name=units]:checked" ).val();     // inches (val=0) or cm (val=1)

        // assign variables based on input id values from html form. 
        //Ensure object is number otherwise arithmetic is screwy
        var bottomLength = Number( $('#bottomLength').val() );    
        var bottomWidth  = Number( $('#bottomWidth').val() );
        var sackHeight   = Number( $('#height').val() );

        var halfBottomWidth = bottomWidth / 2;          //used to size bottom corner within instructions
        var halfTop = bottomLength + bottomWidth;       //used to size length of webbing along roll-top 
        
        if (bottomLength > 1 && bottomWidth > 0 && sackHeight > 1) {        // html input min=1, crappy validation but works
            var scrap = patternSize(units, bottomLength, bottomWidth, sackHeight);
            var fabricL = scrap[0];
            var fabricH = scrap[1];
            if (units == 1) { 
                var unitText = " cm";
                var sA = scrap[2];
                var hem = scrap[3];
                }
                else { 
                    var unitText = " in";
                    var sA = "5/8";
                    var hem = scrap[3];
                }
            var webbingLength = scrap[4]; 
        
            // html id returns  
            $('.patternLength').html(fabricL + unitText);
            $('.patternHeight').html(fabricH + unitText);
            $('.sA').html(sA + unitText);
            $('.hem').html(hem + unitText);
            $('.bottomWidth').html(bottomWidth + unitText);
            $('.halfBottomWidth').html(halfBottomWidth + unitText);
            $('.bottomLength').html(bottomLength + unitText);
            $('.webbingLength').html(webbingLength + unitText);
            $('.halfTop').html(halfTop + unitText);
            
        }
    });
});