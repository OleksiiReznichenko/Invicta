export default function ({ store, redirect }) {
  // IF USER IS NOT LOGGED IN - REDIRECT TO HIS PROFILE
  if (store.state.isLoggedIn) {
    return redirect('/users/' + store.state.user.id);
  }
}