export default function ({ store, route, redirect }) {
    // IS SHOPPING ITEM EXIST INDICATOR
    let shoppingItemFound = false;

    // FIND SHOPPING ITEMS ARRAY OF CURRENT USER
    let myShoppingItemsArray = [];
    store.state.users.users.find(el => {
        if (el.id === store.state.user.id) {
            myShoppingItemsArray = el.shoppingItems;
        }
    })

    // FIND SHOPPING ITEM IN shoppingItemS ARRAY
    myShoppingItemsArray.find(el => {
        if (el.id === route.params.id) {
            shoppingItemFound = true;
        }
    });

    // IF SHOPPING ITEM DOESN'T EXIST REDIRECT TO PROFILE PAGE
    if (!shoppingItemFound) {
        return redirect('/shoppingItems');
    }
}