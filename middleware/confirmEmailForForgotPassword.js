export default function ({ store, redirect }) {
    // IF THERE IS NO EMAIL REDIRECT TO SET EMAIL
    if (!store.state.forgotPasswordEmail && !store.state.forgotPasswordConfirmationCode) {
        return redirect('/setEmail');
    }
    
    // IF THERE IS NO CONFIRM CODE REDIRECT TO CONFIRM EMAIL
    if (!store.state.forgotPasswordConfirmationCode) {
        return redirect('/confirmEmail');
    }
}