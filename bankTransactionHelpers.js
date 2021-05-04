window.onload = function(event){
    let loginUser = document.querySelector('#loginUser');
    let newTransaction = document.querySelector('#newTransaction');
    let login = document.querySelector('#login');
    let heading = document.querySelector('h2'); //this is the only line of this section that's actually necessary!!
    let date = document.querySelector('#date');
    let object = document.querySelector('#object');
    let amount = document.querySelector('#amount');
    let dateNote = document.querySelector('#dateNote');
    let objectNote = document.querySelector('#objectNote');
    let amountNote = document.querySelector('#amountNote');


    login.onsubmit = function(event){
        event.preventDefault();
        newTransaction.classList.remove('hidden');
        login.classList.add('hidden');
        heading.innerHTML = 'New Transaction';
        return loginUser;
    }

    date.onblur = function(event){
        if(date.value == ''){
            date.classList.add('invalid');
            dateNote.classList.remove('hidden');
        }
    }

    date.onfocus = function(event){
        date.classList.remove('invalid');
        dateNote.classList.add('hidden');
    }

    object.onblur = function(event){
        if(object.value == ''){
            object.classList.add('invalid');
            objectNote.classList.remove('hidden');
        }
    }

    object.onfocus = function(event){
        object.classList.remove('invalid');
        objectNote.classList.add('hidden');
    }

    amount.onblur = function(event){
        if(amount.value >= 0){
            amount.classList.add('invalid');
            amountNote.classList.remove('hidden');
        }
    }

    amount.onfocus = function(event){
        amount.classList.remove('invalid');
        amountNote.classList.add('hidden');
        }
// could have put additional verification in case onblur isn't triggered before submit
    newTransaction.onsubmit = function(event){
        event.preventDefault();

        fetch(`http://localhost:5000/api/accounts/${loginUser.value}/transactions`, {
        "method": "POST",
        "headers": {"Content-Type": "application/json"},
        "body": JSON.stringify({'date': date.value, 'object': object.value, 'amount': amount.value})
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(err => console.error(err))
    }
}