export default function ({ store, route, redirect }) {
    // IS ITEM EXIST INDICATOR
    let itemFound = false;

    console.log(route)

    // FIND ITEM IN ITEMS ARRAY
    itemFound = store.state.adminDashboard.withdrawals.find((item) => {
        if (item.id === route.params.id) {
            return item;
        }
    })

    // IF ITEM DOESN'T EXIST REDIRECT TO ADMIN DASHBOARD PAGE
    if (!itemFound) {
        return redirect('/adminDashboard');
    }
}