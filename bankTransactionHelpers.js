login.onsubmit = function(event){
    event.preventDefault();
    let loginUser = document.querySelector('#loginUser').value;
    let newTransaction = document.querySelector('#newTransaction');
    let login = document.querySelector('#login');
    let heading = document.querySelector('h2');

    newTransaction.classList.remove('hidden');
    login.classList.add('hidden');
    heading.innerHTML = 'New Transaction';
    return loginUser;
}

newTransaction.onsubmit = function(event){
    event.preventDefault();
    let date = document.querySelector('#date');
    let object = document.querySelector('#object');
    let amount = document.querySelector('#amount');
    console.log(loginUser.value); 

    if ((amount.value >= 0) || isNaN(amount.value)){
        amount.classList.add('invalid');
        return;
    }
    else{
        amount.classList.remove('invalid');
        fetch(`http://localhost:5000/api/accounts/${loginUser.value}/transactions`, { //why do i have to add .value when i already did l3?
        "method": "POST",
        "headers": {"Content-Type": "application/json"},
        "body": JSON.stringify({'date': date.value, 'object': object.value, 'amount': amount.value})
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(err => console.error(err))
    }
}