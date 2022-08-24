fetch('/posts')
  .then((res) => res.json())
  .then((res) => createPosts(res))
  .catch((err) => console.log(err));

const postSection= document.querySelector('.posts')

function createPosts(data) {
  data.forEach((element) => {
    const post = document.createElement('div');
    const category = document.createElement('h4');
    category.textContent = `${element.category}`;
    const content = document.createElement('p');
    content.textContent = `${element.content}`;
    const image = document.createElement('img');
    image.setAttribute('src', `${element.image}`);
    const iconsDiv = document.createElement('div');

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

    postSection.appendChild(post)
  });
}
