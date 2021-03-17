onload = function() {
    productID = window.location.search.split('?')[1];
    loadProduct();
}

//Checks the products array in the search.js with a for-each loop and changes the page to a product info page. 
function loadProduct() {
    products.forEach(function(product) {
        if (product.id == productID) {
            document.getElementById("albumTitle").innerHTML = product.title;
            document.getElementById("image").src = product.image;
            document.getElementById("info").innerHTML = 'Artist: ' + product.artist +
                '\nGenre : ' + product.genre +
                '\nYear  : ' + product.year +
                '\nRating: ' + product.rateing + '/10';
            document.getElementById("dis").innerHTML = product.description;
            document.getElementById("price").value=product.price;
            document.getElementById("price").innerHTML="Price: $"+product.price;
        }
    });
}

//This function constantly change the price of the product based on the quantity selected by user
function changePrice() {
    var quantity = document.getElementById('quantity').value;
    var rawPrice = document.getElementById('price').value;
    var finalPrice = quantity * rawPrice;
    document.getElementById('price').innerHTML = 'Price: $' + finalPrice;
}

//This is implemented to give functionality to the search bar in this page as well.
function productSearch() {
    landSearchBox = document.getElementById("productSearchBox");
    window.location.href = 'search.html?' + landSearchBox.value;
}