window.onload=function(){
    var palette=[
        "--learnmyog-purple: #3d3846ff;",
        "--dark-purple: #312744ff;",	
        "--prussian-blue: #133754ff;",
        "--bright-navy-blue: #1874ddff;",
        "--viridian-green: #019aa5ff;",
        "--sunglow: #ffcc37ff;",
        "--pearly-purple: #b063aaff;",
        "--magenta-dye: #d0046fff;"
    ];
    var colors=[
        "#3d3846",
        "#3d3846",
        "#1874dd",
        "#019aa5",
        "#312744",
        "#019aa5",
        "#ffcc37",
        "#133653",
        "#b063aa",
        "#d0045f"
    ];
    let rn = Math.floor(Math.random()*colors.length);
    var color1 = colors[rn];
    var color2 = colors[Math.floor(Math.random()*colors.length)];
    $(':root').css('--banner', color1); 
    if (color2 != color1){
        $(':root').css('--spotlight', color2);
    }
    console.log("banner is " + color1, "spotlight is " + color2);
}