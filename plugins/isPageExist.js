export default function ({ route, redirect }) {
    // IF PAGE WITH THAT URL DOESNT EXIST - REDIRECT ON BROWSE PAGE
    if (!route.name && route.matched.length === 0) {
        return redirect('/browse');
    }
}