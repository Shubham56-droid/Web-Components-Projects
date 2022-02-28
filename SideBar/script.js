let menuToggle = document.querySelector('.toggle');
menuToggle.addEventListener('click',()=>{
    menuToggle.classList.toggle('active')
})


let list = document.querySelectorAll('.list');
for (let i = 0; i < list.length; i++){
    list[i].addEventListener('click',()=>{
        let j=0;
        while(j< list.length)
        {
            list[j++].className = 'list';
        }
        list[i].className = 'list active';
    })
}