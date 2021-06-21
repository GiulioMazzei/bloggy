import AuthService from "./auth.service";


//verify if the user is logged in and if not redirect it to a specific route
const verifyAuth = (props, redirectRoute) => {

    const currentUser = AuthService.getCurrentUser()

    if (!currentUser) {
        props.history.push(redirectRoute);
        window.location.reload();
    }
}

export default verifyAuth