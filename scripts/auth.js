//get data
db.collection('films').get().then(snapshot => {
    setUpGuides(snapshot.docs);
})
//listen for status change
auth.onAuthStateChanged(user => {
    if(user){
        console.log('User logged in', user);
    }else{
        console.log('User logged out');
    }
});

const signUpForm = document.querySelector('#signup-form');
signUpForm.addEventListener('submit', e => {
    e.preventDefault();
    const email = signUpForm['signup-email'].value;
    const password = signUpForm['signup-password'].value;

    //sign up the user
    auth.createUserWithEmailAndPassword(email, password).then(cred => {
        const modal = document.querySelector('#modal-signup');
        M.Modal.getInstance(modal).close();
        signUpForm.reset();
    })
});

const logout = document.querySelector('#logout');
logout.addEventListener('click', e => {
    e.preventDefault();
    auth.signOut().then(() => {
    });
})

//login
const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', e => {
    e.preventDefault();
    const email = loginForm['login-email'].value;
    const password = loginForm['login-password'].value;

    //sign up the user
    auth.signInWithEmailAndPassword(email, password).then(cred => {
        const modal = document.querySelector('#modal-signup');
        M.Modal.getInstance(modal).close();
        loginForm.reset();
    })
});