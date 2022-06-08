export default function ({ store, route, redirect }) {
    // IS ITEM EXIST INDICATOR
    let itemFound = false;

    // FIND ITEM IN ITEMS ARRAY
    itemFound = store.state.adminDashboard.reports.find((item) => {
        if (item.id === route.params.id) {
            return item;
        }
    })

    // IF ITEM DOESN'T EXIST REDIRECT TO ADMIN DASHBOARD PAGE
    if (!itemFound) {
        return redirect('/adminDashboard');
    }
}