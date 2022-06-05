export default function ({ store, redirect }) {
  // IF USER IS NOT ADMIN - REDIRECT TO MAIN PAGE
  if (!store.state.user.isAdmin) {
    return redirect('/');
  }
}