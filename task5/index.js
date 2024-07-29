const items=document.querySelectorAll('#cart-items .item');
items.forEach(item=>{
if (item.textContent.includes('Mirinda 1.5 l.')) {
    item.remove();
}
});
items.forEach(item=>{
    if (item.textContent.includes('Chocolate')) {
        const candyItem=document.createElement('div');
        candyItem.className='item';
        candyItem.innerHTML='Candy<span class="qty">x 4</span>';
        item.parentNode.replaceChild(candyItem, item);
    }
});