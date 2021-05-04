window.onload = function(event){            //This whole section is actually unnecessary!!
    let newUser = document.querySelector('#newUser');
    let user = document.querySelector('#user');
    let currency = document.querySelector('#currency');
    let description = document.querySelector('#description');
    let balance = document.querySelector('#balance');
    let userNote = document.querySelector('#userNote');
    let currencyNote = document.querySelector('#currencyNote');
    let descriptionNote = document.querySelector('#descriptionNote');
    let balanceNote = document.querySelector('#balanceNote');


    user.onblur = function(event){
        if(!(/^([a-zA-Z0-9]{8,25})$/.test(user.value))){
            user.classList.add('invalid');
            userNote.classList.remove('hidden');
        }
    }

    user.onfocus = function(event){
        user.classList.remove('invalid');
        userNote.classList.add('hidden');
    }   

    currency.onblur = function(event){
        if(currency.value == ''){
            currency.classList.add('invalid');
            currencyNote.classList.remove('hidden');
        }
    }

    currency.onfocus = function(event){
        currency.classList.remove('invalid');
        currencyNote.classList.add('hidden');
    }

    description.onblur = function(event){
        if(description.value == ''){
            description.classList.add('invalid');
            descriptionNote.classList.remove('hidden');
        }
    }

    description.onfocus = function(event){
        description.classList.remove('invalid');
        descriptionNote.classList.add('hidden');
    }

    balance.onblur = function(event){
        if(balance.value < 50){
            balance.classList.add('invalid');
            balanceNote.classList.remove('hidden');
        }
    }

    balance.onfocus = function(event){
        balance.classList.remove('invalid');
        balanceNote.classList.add('hidden');
    }
// could have put additional verification in case onblur isn't triggered before submit
    newUser.onsubmit = function(event){
        event.preventDefault();
        fetch("http://localhost:5000/api/accounts", {
        "method": "POST",
        "headers": {"Content-Type": "application/json"},
        "body": JSON.stringify({'user': user.value, 'description': description.value, 'currency': currency.value, 'balance': balance.value})
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(err => console.error(err))
    }
}

// for the transaction page, i'll use js functions to change the innerhtml of the h1 to reflect change from login to transaction entry
// ^ is there a better way than innerHTML?
// i'll also hide the form for login and show the form for transaction entry  
