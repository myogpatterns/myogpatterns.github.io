// var challenge_palette = [
//     "--learnmyog-purple: #3d3846ff;",
//     "--dark-purple: #312744ff;",	
//     "--prussian-blue: #133754ff;",
//     "--bright-navy-blue: #1874ddff;",
//     "--viridian-green: #019aa5ff;",
//     "--sunglow: #ffcc37ff;",
//     "--pearly-purple: #b063aaff;",
//     "--magenta-dye: #d0046fff;"
// ];

window.onload=function(){
    var colors=[
        "#3d3846",
        "#1874dd",
        "#019aa5",
        "#312744",
        "#ffcc37",
        "#133653",
        "#b063aa",
        "#d0045f",
        "#3d3846"
    ];
    // let rn = Math.floor(Math.random()*colors.length);
    var primary = colors[randomNumberInList(colors)];
    var secondary = colors[randomNumberInList(colors)];
    $(':root').css('--banner', primary); 
    $(':root').css('--overlay', hexToRGB(primary, .4))
    if (secondary != primary){
        $(':root').css('--spotlight', secondary);
    }
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