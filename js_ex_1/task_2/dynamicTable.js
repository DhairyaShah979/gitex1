

let firstName = document.querySelector('.firstName');
let lastName = document.querySelector('.lastName');
let addButton = document.querySelector('.addButton');
let updateButton = document.querySelector('.updateButton');
let table = document.querySelector('.table');
let addHere = document.querySelector('.addHere');
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
            <button type="button" onclick="editRow(${i})" class=" mr-3 pr-2 edit btn btn-dark">Edit</button>
            <button type="button" onclick="deleteRow(${i})" class=" delete btn-danger">Delete</button>
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
   
    deletebtnNew.disabled=true;

}

function updateRow() {
    user[currentUserIdForUpdate].firstName = firstName.value;
      user[currentUserIdForUpdate].lastName = lastName.value;
    addButton.style.display = 'initial';
    updateButton.style.display = 'none';
    firstName.value = '';
    lastName.value = '';

    
    
    showUsers();
}

function deleteRow(userId) {
    console.log(userId)
    user.splice(userId,1);
    showUsers();
}
let obj = [
    {
        firstname:"Dhairya",
        lastname:"Shah"
    },
    {
        firstname:"Hardik",
        lastname:"Motwani"
    },
    {
        firstname:"Sarang",
        lastname:"Jain"
    },
    {
        firstname:"Darshan",
        lastname:"Vesatiya"
    },
    {
        firstname:"Shubham",
        lastname:"Sharma"
    },
    {
        firstname:"Malay",
        lastname:"Shah"
    },
    {
        firstname:"Deep",
        lastname:"Shah"
    },
    {
        firstname:"Ankit",
        lastname:"Shah"
    },
    {
        firstname:"Ravi",
        lastname:"Patekar"
    },
    {
        firstname:"Jatin",
        lastname:"Saraf"
    },
]

function dynamicfun(){
    for(let i=0;i<obj.length;i++)
    {
            user.push({
                firstName: firstName.value,
                lastName: lastName.value
            })

            showUsers1();
        
        
            
    }
    let new_name=obj[i].firstname;
        let new_last=obj[i].lastname;

}
function showUsers1()
{
    checkUser();
    addHere.innerHTML = '';
    for (let i = 0; i < user.length; i++) {
        
        addHere.innerHTML += `<tr>
        <th scope="row">${i+1}</th>
        <td>${obj[i].firstname}</td>
        <td>${obj[i].lastname}</td>
        <td>
            <button type="button" onclick="editRow(${i})" class=" mr-3 pr-2 edit btn btn-dark">Edit</button>
            <button type="button" onclick="deleteRow(${i})" class=" delete btn-danger">Delete</button>
        </td>
      </tr>`

    }
    deletebtnNew=document.querySelector(".delete");
}