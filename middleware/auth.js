export default ({ redirect }) => {
    console.log('auth middoleware');

    const loggedIn = false;

    if(!loggedIn) {
        return redirect('/')
    }
}