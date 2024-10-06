const totalCategories = document.querySelector('#categories');
const categoryItems = totalCategories.querySelectorAll('.item');
console.log(`Number of categories: ${categoryItems.length}`);
categoryItems.forEach(item => {
    const title = item.querySelector('h2').textContent;
    const totalElements = item.querySelectorAll('ul > li').length;
    console.log(`Category: ${title}`);
    console.log(`Elements: ${totalElements}`);
});