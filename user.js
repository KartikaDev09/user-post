// API 2: "https://jsonplaceholder.typicode.com/posts?userId=:id"

const postListElem = document.querySelector('.post-list')
const idM = localStorage.getItem("idY")

async function onSearchChange(event) {
  const idM = event.target.value
  renderPosts(idM);
}

async function renderPosts(idM) {
  const posts = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${idM}`);
  const postsData = await posts.json(); 
  postListElem.innerHTML = postsData.map(blog => postHTML(blog)).join("");
  console.log(postsData)
}

function postHTML(blog) {
  return `
    <div class="post">
      <div class= "post__title">
        ${blog.title}
      </div>
      <p class= "post__body">
        ${blog.body}
      </p>
    </div>
  `
}

renderPosts(idM);