
let total = 0; 
const elementsArr = document.querySelectorAll('.item')
elementsArr.forEach(element => {
    total += 1; 
} 
)
console.log(`Number of categories: ${total}`)


elementsArr.forEach(item => {
    console.log(`Category: ${item.firstElementChild.textContent}`);
    console.log(`Elements: ${item.lastElementChild.children.length}`)
});