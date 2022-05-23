export default function ({ store, route, redirect }) {
    // IS PRODUCT EXIST INDICATOR
    let productFound = false;

    // PRODUCTS OBJECT
    const productsObject = store.state.products.products;

    // CONVERT PRODUCTS OBJECT TO ARRAY
    const productsObjectToArray = Object.entries(productsObject);

    // FIND PRODUCT IN PRODUCTS ARRAY
    productsObjectToArray.forEach(([key, value]) => {
        if (productFound) return;
        value.find(el => {
            if (el.id === route.params.id) {
                productFound = true;
            }
        })
    })

    // IF PRODUCT DOESN'T EXIST REDIRECT TO BROWSE PAGE
    if (!productFound) {
        return redirect('/browse');
    }
}