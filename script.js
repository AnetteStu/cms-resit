const api = "https://kads.flywheelsites.com/wp-json/wp/v2/";
const contentContainer = document.querySelector(".content");

async function fetchApi(url) {

  // Fetch Posts
  const postsRes = await fetch(url+"posts");
  const posts = await postsRes.json();

  // Fetch Users
  const usersRes = await fetch(url+"users");
  const users = await usersRes.json()

  posts.forEach(function(post){
    // Modify Date
    const newDate = post.modified_gmt.split("T")

    contentContainer.innerHTML += `
    <div class="post">
        <h2 class="post_title">
          ${post.title.rendered}
        </h2>
        <div class="post_header">
          <div class="post_author">
            ${users[post.author-1].name}
          </div>
          <div class="post_date">
           ${newDate[0]}
          </div>
        </div>
        <div class="post_body">
          ${post.content.rendered}
        </div>
      </div>
    `
  })

  console.log(posts);
}fetchApi(api)