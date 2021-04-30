// function createUser()   {
//     let newUserForm = document.querySelector('newUser');
//     let newUserData = new FormData(newUserForm);
//     let userDataObject = Object.fromEntries(newUserData);
//     let jsonUserData = JSON.stringify(userDataObject);
//     let div = document.createElement('div');
//     fetch('//localhost:5000/api/accounts', {
//         method: 'POST',
//         headers: {'Content-Type': 'application/json'},
//         body: jsonUserData
//     })
//     .then(response => response.json())
//     .then(data => {
//         data = div.innerHTML})
//     .catch(err => console.log(err));
//     document.append(div);
// }

// newUser.onsubmit

