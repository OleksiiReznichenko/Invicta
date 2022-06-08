export default function ({ store, route, redirect }) {
    // IS PRODUCT EXIST INDICATOR
    let productFound = false;

    // PRODUCTS ARRAY
    const productsArray = store.state.products.products;

    // FIND PRODUCT IN PRODUCTS ARRAY
    productFound = productsArray.find((product) => {
        if (product.id === route.params.id) {
            return product;
        }
    })

    // IF PRODUCT DOESN'T EXIST REDIRECT TO BROWSE PAGE
    if (!productFound) {
        return redirect('/browse');
    }
}