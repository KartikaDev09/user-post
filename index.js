// API 1: "https://jsonplaceholder.typicode.com/users"
// API 2: "https://jsonplaceholder.typicode.com/posts?userId=:id"
 const userListElem = document.querySelector('.user-list');

async function main() { 

  const usersX = await fetch("https://jsonplaceholder.typicode.com/users");
  const userDataX = await usersX.json();  
  userListElem.innerHTML = userDataX.map((usersX) => userHTML(usersX)).join("");  
}

main();

function showUserPosts(idX) {
  localStorage.setItem("idY", idX);
  window.location.href = `${window.location.origin}/user.html`
  
}

function userHTML(usersX) {
  return `<div class="user-card" onclick="showUserPosts(${usersX.id})">
  <div class="user-card__container">
    <h3>${usersX.name}</h4>
      <p><b>Email:</b> ${usersX.email}</p>
      <p><b>Phone:</b> ${usersX.phone}</p>
      <p><b>Website:</b> <a href="https://${usersX.website}" target="_blank">${usersX.website}</a></p>
  </div>
</div>`;
}