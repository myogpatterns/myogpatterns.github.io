/*  Filters gallery articles based on class names matching filter button ids
    Gallery gets small if less than 4 images in filter set
    Adapted from https://codepen.io/thang4art/pen/pQqRLG



*/


var $btns = $('.button').click(function() {
    if (this.id=="all"){
        $('article').show();
    } else {
        var $el = $('article' + '.' + this.id).show();
        $('article').not($el).hide();
    }
    $btns.removeClass('active');
    $(this).addClass('active');
  }) 