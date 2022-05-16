//1 API URL
const url = 'https://jsonplaceholder.typicode.com/users'

//2. FETCH USERS FROM API URL
function fetchUsers() {
  //make use of the browswer fetch API
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);
      //    2.2 passing the user data to the renderuser function
      renderUsers(data)
    })
}



//3. RENDER IT IN THE DOM
function renderUsers(userData) {
  //  console.log("from renderUsers")
  //  console.log(userData);
  const ul = document.getElementById('user-list-container')
//   console.log(ul)

  // 3.1 render an li for each of the user
  userData.forEach((user, index) => {
    // console.log(user, index +1);
    const li = document.createElement('li')
    li.innerHTML = `
        <span> ${index + 1}.</span>
        <span> ${user.name}</span>
        <span>-</span>
        <span class="username">${user.username}</span>
        
         `
    // 3.2 append the current user li tag to the ul tag
    ul.appendChild(li)
  })
}

//4. ADD A SEARCH FUNCTION TO THE DOM

function searchUserByUserName() {
  const input = document.getElementById('search')
  const ul = document.getElementById('user-list-container')
  const inputValue = input.value.toUpperCase()
  
  const usersList = ul.querySelectorAll('li') //array of all li tags
  // loop through all the users and render the one that match the search
  for (let index = 0; index < usersList.length; index++) {
    const usernameSpanTag = usersList[index].querySelector('.username')
    const usernameSpanTagValue = usernameSpanTag.innerText.toUpperCase()
    const isMatch = usernameSpanTagValue.indexOf(inputValue) > -1
    if (isMatch) {
      usersList[index].style.display = 'block'
    } else {
      usersList[index].style.display = 'none'
    }
  }
}
// CALLING THE FETCH FUNCTION
fetchUsers()
