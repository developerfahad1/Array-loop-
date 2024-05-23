const arr = ['apple', 'banaana', 'orange', 'watermelon', 'guava', 'mango'];


const div = document.querySelector('div');

for (let i = 0; i < arr.length; i++){
    console.log(arr[i]);
    div.innerHTML += `
    <h1>${arr[i]}</h1>`
}