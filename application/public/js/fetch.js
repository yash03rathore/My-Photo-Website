

/**
 * Build a card div using a template literal
 * string (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)
 * @param {*} data about each product 
 * @returns a string consisting of HTML elements.
 */
 
 
 function buildCardsUsingStrings(data) {
    return `<div class="product-card" id="${data.id}" onclick=remove(id)>
                <img class="prod-img" src="${data.thumbnail}" alt="Fake photo for id: ${data.id}" />
                <div class="prod-info">
                    <p class="prod-title">${data.title}</p>
                    <p class="prod-cost">${data.price}</p>
                </div>
            </div>`;
}




function fetchPhotos(){
    var url = "https://dummyjson.com/products";
    // where we will get products from
    fetch(url)
    .then((response) =>{
        //extract the body from response object.
        return response.json();
    }).then( (products) => {
        //get the array of products from data json object
        let productsList = products.products;
        let htmlString = '';
        productsList.forEach(element => {
            //for each product , build a card HTML element using strings
            htmlString += buildCardsUsingStrings(element)
        });
        /**
         * get the product-list div and set the 
         * innerHTML propery to our string
         * of HTML elements
         */
        document.getElementById('product-list').innerHTML = htmlString;
    })
    .catch((error) =>{
        console.log(error);
    });
}

function remove(id){
    var count = document.getElementsByClassName("product-card").length ;
    count = count - 2;
    let c = document.getElementsByClassName('product-card');
        [...c].forEach(d =>{
            d.addEventListener("click",(e)=>{
                d.style.opacity = 0.5;
                setInterval(function()  {
                    d.remove();
                }, 1000);
                
                
                document.getElementById('count').innerHTML = "Photo Count: " + count;
            });
    })}

fetchPhotos();

