const addButton = document.querySelector('.add-buton');
const category = document.querySelector('#Category');
const image = document.querySelector('#image');
const content = document.querySelector('#content');

addButton.addEventListener('click', (e) => {
  e.preventDefault();
  fetch('api/v1/post', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ category: category.value, image: image.value, content: content.value }),
  })
    .then(console.log);
});
