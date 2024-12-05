const anchor = document.querySelector('a');
anchor.href = 'https://www.google.com';

const container1 = document.querySelector('#container1');
const container2 = document.querySelector('#container2');

if (container1) container1.style.backgroundColor = 'green';
if (container2) container2.style.backgroundColor = 'green';

const listItems = document.querySelectorAll('li');
listItems.forEach((li, index) => {
    li.style.backgroundColor = 'gray';
    li.textContent = `List baru ${index + 1}`;
});
