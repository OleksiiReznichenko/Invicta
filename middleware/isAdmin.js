export default function ({ store, redirect }) {
  // CHECK IF USER IS ADMIN
  let isAdmin = false;
  store.state.users.users.find(el => {
      if (el.id === store.state.user.id) {
        isAdmin = el.isAdmin;
      }
  })

  // IF USER IS NOT ADMIN - REDIRECT TO MAIN PAGE
  if (!isAdmin) {
    return redirect('/');
  }
}