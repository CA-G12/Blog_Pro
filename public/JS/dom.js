const addButtonPost = document.querySelector('.add-buton');
const categoryPost = document.querySelector('#Category');
const imagePost = document.querySelector('#image');
const contentPost = document.querySelector('#content');
const postSection = document.querySelector('.posts');
const popUpSec = document.querySelector('.pop-up-sec');

const commetFunction = (data) => {
  data.forEach((ele) => {
    const popUpBody = document.createElement('div');
    popUpBody.className = 'pop-up-body';
    popUpSec.appendChild(popUpBody);

    const closeIcon = document.createElement('i');
    closeIcon.classList.add('fa-solid');
    closeIcon.classList.add('fa-circle-xmark');
    closeIcon.addEventListener('click', () => {
      popUpSec.classList.remove('active');
    });
    popUpBody.appendChild(closeIcon);

    const input = document.createElement('input');
    const placeHolder = document.createAttribute('placeholder');
    placeHolder.textContent = 'write a comment';
    input.setAttributeNode(placeHolder);
    popUpBody.appendChild(input);
    const para = document.createElement('p');
    popUpBody.appendChild(para);
    para.textContent = ele.comment;
  });
};

const fetchComment = () => {
  fetch('api/v1/getCommit').then((res) => res.json()).then((data) => commetFunction(data.rows));
};

function createPosts(data) {
  data.forEach((element) => {
    const post = document.createElement('div');
    post.classList.add('post');
    const id = document.createAttribute('id');
    id.textContent = `${element.id}`;
    post.setAttributeNode(id);
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
    const likeSpan = document.createElement('span');
    likeSpan.textContent = 'Like';
    likeContainer.appendChild(likeIcon);
    likeContainer.appendChild(likeSpan);

    const commentContainer = document.createElement('div');
    const commentIcon = document.createElement('i');
    commentIcon.classList.add('fa-solid');
    commentIcon.classList.add('fa-comment');
    const commentSpan = document.createElement('span');
    commentSpan.textContent = 'Comment';
    commentContainer.appendChild(commentIcon);
    commentContainer.appendChild(commentSpan);
    commentContainer.addEventListener('click', (e) => {
      console.log(e.target.parentNode.parentNode.parentNode.id == element.id);
      if (e.target.parentNode.parentNode.parentNode.id == element.id) {
        popUpSec.classList.add('active');
        fetchComment();
      }
    });

    const deleteContainer = document.createElement('div');
    const deleteIcon = document.createElement('i');
    deleteIcon.classList.add('fa-solid');
    deleteIcon.classList.add('fa-trash');
    const deleteSpan = document.createElement('span');
    deleteSpan.textContent = 'delete';
    deleteContainer.appendChild(deleteIcon);
    deleteContainer.appendChild(deleteSpan);

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
    .then((data) => data.json()).then((res) => {
      createPosts(res.data);
      categoryPost.value = '';
      imagePost.value = '';
      contentPost.value = '';
    });
});

fetch('/api/v1/posts')
  .then((res) => res.json())
  .then((res) => createPosts(res))
  .catch((err) => console.log(err));
