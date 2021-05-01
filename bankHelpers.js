newUser.onsubmit = function(event)  {
    let user = document.querySelector('#user');
    let description = document.querySelector('#description');
    let balance = document.querySelector('#balance');

    event.preventDefault();
}

// for the transaction page, i'll use js functions to change the innerhtml of the h1 to reflect change from login to transaction entry
// ^ is there a better way than innerHTML?
// i'll also hide the form for login and show the form for transaction entry  