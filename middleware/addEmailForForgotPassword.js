export default function ({ store, redirect }) {
    // IF THERE IS NO EMAIL REDIRECT TO SET EMAIL
    if (!store.state.forgotPasswordEmail) {
        return redirect('/setEmail');
    }
}