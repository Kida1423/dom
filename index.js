// 1
// let text1=document.getElementById("string-3").textContent;
// let text2=document.getElementById("string-5").textContent;
// let text3=document.getElementById("string-2").textContent;
// let text4=document.getElementById("string-6").textContent;
// let text5=document.getElementById("string-1").textContent;
// console.log(text1,text2,text3,text4,text5);

// 2
// let elements=document.querySelectorAll(".element");
// elements.forEach((element,index)=>{
//     if(index<3){
//         element.style.color='red';
//     }else{
//         element.style.color='green'
//     }
// })

// 3
// const tasks = ['Do Task', 'Make work', 'Clean Home', 'Get info about task', 'Feed a dog'];
// let list=document.getElementById("todo-list");
// tasks.forEach(task =>{
//     let li=document.createElement('li');
//     li.className='task'
//     li.textContent=task;
//     list.appendChild(li);
// })

// 4
// let p=document.querySelectorAll('article p');

// p.forEach(p=>{
//     let hr=document.createElement(hr);
//     p.parentNode.insertBefore(he,p.nextSibling);
// })

// 5
// const items=document.querySelectorAll('#cart-items .item');
// items.forEach(item=>{
// if (item.textContent.includes('Mirinda 1.5 l.')) {
//     item.remove();
// }
// });
// items.forEach(item=>{
//     if (item.textContent.includes('Chocolate')) {
//         const candyItem=document.createElement('div');
//         candyItem.className='item';
//         candyItem.innerHTML='Candy<span class="qty">x 4</span>';
//         item.parentNode.replaceChild(candyItem, item);
//     }
// });