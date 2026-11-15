// API 2: "https://jsonplaceholder.typicode.com/posts?userId=:id"

const postListElem = document.querySelector('.post-list')

async function main() {
  const idM = localStorage.getItem("idY")
  const posts = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${idM}`);
  const postsData = await posts.json();

    
  postListElem.innerHTML = 
  postsData.map((blog) => 
    `<div class="post">
      <div class=${"title"}>
        Post Title
      </div>
      <p class=${"body"}>
        Post Body
      </p>
    </div>`).join("");



}

main();