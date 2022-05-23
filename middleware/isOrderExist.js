export default function ({ store, route, redirect }) {
    // IS ORDER EXIST INDICATOR
    let orderFound = false;

    // FIND ORDER ARRAY OF CURRENT USER
    let myOrdersArray = [];
    store.state.users.users.find(el => {
        if (el.id === store.state.user.id) {
            myOrdersArray = el.orders;
        }
    })

    // FIND ORDER IN ORDERS ARRAY
    myOrdersArray.find(el => {
        if (el.id === route.params.id) {
            orderFound = true;
        }
    });

    // IF ORDER DOESN'T EXIST REDIRECT TO PROFILE PAGE
    if (!orderFound) {
        return redirect('/orders');
    }
}