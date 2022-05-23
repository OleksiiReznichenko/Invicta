export default function ({ store, redirect }) {
  // IF USER IS NOT LOGGED IN - REDIRECT TO MAIN PAGE
  if (!store.state.isLoggedIn) {
    return redirect('/');
  }
}