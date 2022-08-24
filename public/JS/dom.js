const addButtonPost = document.querySelector('.add-buton');
const categoryPost = document.querySelector('#Category');
const imagePost = document.querySelector('#image');
const contentPost = document.querySelector('#content');

addButtonPost.addEventListener('click', (e) => {
  e.preventDefault();
  fetch('api/v1/post', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      category: categoryPost.value,
      image: imagePost.value,
      content: contentPost.value,
    }),
  })
    .then(console.log);
});

fetch('/api/v1/posts')
  .then((res) => res.json())
  .then((res) => createPosts(res));

//   .catch((err) => console.log(err));

const postSection = document.querySelector('.posts');

function createPosts(data) {
  data.forEach((element) => {
    const post = document.createElement('div');
    post.classList.add('post');
    const category = document.createElement('h4');
    category.textContent = `${element.category}`;
    const content = document.createElement('p');

    content.textContent = `${element.content}`;
    const image = document.createElement('img');
    image.setAttribute('src', `${element.image}`);
    const iconsDiv = document.createElement('div');
    iconsDiv.classList.add('icons');
    const likeContainer = document.createElement('div');
    const likeIcon = document.createElement('i');
    likeIcon.classList.add('fa-solid');
    likeIcon.classList.add('fa-thumbs-up');
    likeContainer.appendChild(likeIcon);

    const commentContainer = document.createElement('div');
    const commentIcon = document.createElement('i');
    commentIcon.classList.add('fa-solid');
    commentIcon.classList.add('fa-comment');
    commentContainer.appendChild(commentIcon);

    const deleteContainer = document.createElement('div');
    const deleteIcon = document.createElement('i');
    deleteIcon.classList.add('fa-solid');
    deleteIcon.classList.add('fa-trash');
    deleteContainer.appendChild(deleteIcon);

    iconsDiv.appendChild(likeContainer);
    iconsDiv.appendChild(commentContainer);
    iconsDiv.appendChild(deleteContainer);
    post.appendChild(category);
    post.appendChild(content);
    post.appendChild(image);
    post.appendChild(iconsDiv);

    postSection.appendChild(post);
  });
}
