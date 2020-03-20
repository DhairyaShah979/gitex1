const firstName = document.querySelector('.firstName');
const lastName = document.querySelector('.lastName');
const addButton = document.querySelector('.addButton');
const updateButton = document.querySelector('.updateButton');
const table = document.querySelector('.table');
const addHere = document.querySelector('.addHere');
let user = [];
let currentUserIdForUpdate;
let deletebtnNew;
checkUser();
  function addRow() {
    if (firstName.value.trim() != '' && lastName.value.trim() != '') {
        user.push({
            firstName: firstName.value.trim(),
            lastName: lastName.value.trim()
        })
        firstName.value = '';
        lastName.value = '';
        showUsers();
    } else {
        alert('Please provide your firstName And lastName')
    }
}
 

function checkUser() {
    if (user.length === 0) {
        table.style.display = 'none';
    } else {
        table.style.display = 'initial';
    }
}

function showUsers() {
    checkUser();
    addHere.innerHTML = '';
    for (let i = 0; i < user.length; i++) {
        
        addHere.innerHTML += `<tr>
        <th scope="row">${i+1}</th>
        <td>${user[i].firstName}</td>
        <td>${user[i].lastName}</td>
        <td>
            <button type="button" onclick="editRow(${i})" class=" mr-3 pr-2 edit">Edit</button>
            <button type="button" onclick="deleteRow(${i})" class=" delete">Delete</button>
        </td>
      </tr>`

    }
    deletebtnNew=document.querySelector(".delete");
}

function editRow(userId) {
    console.log(userId);
    console.log(deletebtnNew)
    console.log("calling function",firstName);
    currentUserIdForUpdate = userId;
    firstName.value = user[userId ].firstName;
    lastName.value = user[userId ].lastName;
    addButton.style.display = 'none';
    updateButton.style.display = 'initial';
   // deletebtnNew=document.querySelector('.delete');
    deletebtnNew.disabled=true;

}

function updateRow() {
    user[currentUserIdForUpdate].firstName = firstName.value;
      user[currentUserIdForUpdate].lastName = lastName.value;
    addButton.style.display = 'initial';
    updateButton.style.display = 'none';
    firstName.value = '';
    lastName.value = '';

    //document.querySelector(".delete").disabled = true;
    
    showUsers();
}

function deleteRow(userId) {
    console.log(userId)
    user.splice(userId,1);
    showUsers();
}