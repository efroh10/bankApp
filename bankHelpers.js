newUser.onsubmit = function(event)  {
    event.preventDefault();
    let user = document.querySelector('#user');
    let currency = document.querySelector('#currency');
    let description = document.querySelector('#description');
    let balance = document.querySelector('#balance');
    let forbidden = ['!', '@', '#', '$', '%', '^', '&', '*']

    if ((user.value.length < 8) || (user.value.includes('$'))){
        user.classList.add('invalid');
        return;
    }
    else if ((balance.value < 50) || (isNaN(balance.value))){
        balance.classList.add('invalid');
        return;
    }
    else{
        fetch("http://localhost:5000/api/accounts", {
        "method": "POST",
        "headers": {"Content-Type": "application/json"},
        "body": JSON.stringify({'user': user, 'description': description, 'currency': currency, 'balance': balance})
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(err => console.error(err))
    }
}


// for the transaction page, i'll use js functions to change the innerhtml of the h1 to reflect change from login to transaction entry
// ^ is there a better way than innerHTML?
// i'll also hide the form for login and show the form for transaction entry  