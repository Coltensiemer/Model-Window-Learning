const hidden = document.querySelector(".hidden"); 
const modal = document.querySelector(".modal"); 
const overlay = document.querySelector(".overlay"); 
const showModal = document.querySelectorAll('.show-modal'); 
const closeModal = document.querySelector('.close-modal'); 

console.log(modal); 
console.log(hidden);
console.log(showModal); 


// for (i=0; i < showModal.length; i++); 


// forEach to add the event listener ENGINE. 
showModal.forEach(item => {
   item.addEventListener('click', ()=>
{ 
modal.classList.remove("hidden");
overlay.classList.remove('hidden'); 
})
}) 

closeModal.addEventListener('click', () => 
{ 
    modal.classList.add("hidden");
overlay.classList.add('hidden'); 
})

overlay.addEventListener('click', ()=>
{ 
    modal.classList.add("hidden");
overlay.classList.add('hidden'); 

})

document.addEventListener('keydown', (e)=> 
{ 
    if(e.key === 'Escape') { 
        modal.classList.add("hidden");
overlay.classList.add('hidden'); 
    }

})