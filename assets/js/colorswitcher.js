// Challenge Colors 
const mainColors=[
    "#3d3846", //--learnmyog-purple: #3d3846ff
    "#312744", //--dark-purple: #312744ff
    "#133653", //--prussian-blue: #133653ff
    "#2a3d37", //--green-mountain: #2a3d37ff
    "#4e0d0f", //--barn-red: #4e0d0fff
    "#433818", //--army-olive: #433818ff
    "#375466", //--blue-wave: #375466ff;
    "#800007", //--brick-red: #800007ff;
];

const accentColors = [
    "#1874dd", //--bright-navy-blue: #1874ddff
    "#019aa5", //--viridian-green: #019aa5ff
    "#ffcc37", //--sunglow: #ffcc37ff
    "#b063aa", //--pearly-purple: #b063aaff
    "#d0046f", //--magenta-dye: #d0046fff
    "#c2c1c2", //--silver-bullet: #c2c1c2ff
    "#a0743c", //--coyote-brown: #a0743cff
];

const lightColors = ["#ffcc37"]; // these need black text

window.onload=function(){

    let primary = mainColors[randomNumberInList(mainColors)];
    let secondary = accentColors[randomNumberInList(accentColors)];
    $(':root').css('--banner', primary); 
    $(':root').css('--overlay', hexToRGB(primary, .4))
    if (secondary != primary){
        $(':root').css('--spotlight', secondary);
    }

    // for light colored primary (e.g.) yellow remove invert class for text colors
    // if( $.inArray(primary, lightColors) != -1){
    //     $('footer').removeClass('invert');
    //     console.log('primary is light')
    // } else {
    //     console.log('primary is dark so invert');
    // }
    console.log("banner is " + primary, "spotlight is " + secondary);
}

function randomNumberInList(list) {
    let rn = Math.floor(Math.random()*list.length);

    return rn;
}

function hexToRGB(hex, alpha) {
    var r = parseInt(hex.slice(1, 3), 16),
        g = parseInt(hex.slice(3, 5), 16),
        b = parseInt(hex.slice(5, 7), 16);

    if (alpha) {
        return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
    } else {
        return "rgb(" + r + ", " + g + ", " + b + ")";
    }
}