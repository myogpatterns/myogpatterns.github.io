/*
    Displays products from allproducts.json
    allproducts.json created with db-capture.py
*/
const allProducts = "assets/db/allproducts.json";
const imgdir = "images/shared/partners/48/"


// displayProductsfromArray(data);
const product_list = getProducts(allProducts);

async function getProducts(array) {
    const response = await fetch(array);
    const data = await response.json();

    // view number of elements
    let id_count = Object.keys(data).length;
    console.log(id_count + " items");
    displayProducts(data)
}

function displayProducts(product_list){
    product_list.sort((a,b) => a.title.localeCompare(b.title));
    // console.log(product_list.sort((a,b) => a.title.localeCompare(b.title)).slice(0,3))
    product_list.forEach(product => {
        let title = truncateString(product.title.toString(),30);
        if (typeof product.sizes === "string"){
            productsizes = product.sizes.replace(",",", ");
        } else if (typeof product.sizes === "object"){
            productsizes = product.sizes.join(", ");
        } else productsizes = product.sizes;
        
        const cards = document.querySelector('#card-shelf');
        let card = document.createElement('div');
        let shop = product.vendor.replaceAll(" ","-");
        card.className = `card ${product.product_type} ${shop}`; 
        // card.dataset.vendor = product.vendor.replaceAll(" ","-");
        card.innerHTML =
            `<img src="${product.productImg}" loading="lazy" alt="product image">
              <div class="card-info">
                  <p class="title">${title}</p>
                  <p class="option">${productsizes}</p>
                  <p class="vendor"><a href=${product.url} target=_blank title="product url"><img src=${imgdir}${product.vendorImg} alt="vendor logo"></a></p>
              </div>
            </div>`;
        cards.appendChild(card);
    });
}

/*
    Trim string to length and add ellipses
*/
function truncateString(str, num) {
    if (str.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
}

/* 
    Filter elements
*/
var filters = {};
// group class selectors from buttons
$('.filters').on('click', '.button', function( event ) {
    var $button = $( event.currentTarget );
    // get group key
    var $buttonGroup = $button.parents('.button-group');
    var filterGroup = $buttonGroup.attr('data-filter-group');
    // set filter for group
    filters[ filterGroup ] = $button.attr('data-filter');
    // combine filters
    var filterValue = concatValues( filters );
    // console.log( filterValue )
    // set filter
    filterElements( filterValue )
});
// change is-checked class on buttons
$('.button-group').each( function( i, buttonGroup ) {
    var $buttonGroup = $( buttonGroup );
    $buttonGroup.on( 'click', 'button', function( event ) {
        $buttonGroup.find('.is-checked').removeClass('is-checked');
        var $button = $( event.currentTarget );
        $button.addClass('is-checked');
    });
});
// flatten object by concatting values
function concatValues( obj ) {
    var value = '';
    for ( var prop in obj ) {
      value += obj[ prop ];
    }
    return value;
}
// flatten object by joining values
function joinString( obj ) {
    var value = '';
    var list = [];
    for ( var prop in obj ) {
        list.push( obj[prop] )
    }
    value = list.join(" ");
    return value;
}
// show/hide elements
function filterElements ( filterclasses ) {
    if (filterclasses.length < 1) {
        $('.card').show()
    }
    else {
        $('.card').hide()
        const elements = $(filterclasses);
        $(elements).show();
    }
}

