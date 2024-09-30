const allButtons = document.querySelectorAll('.fa-solid')
const imageRoll = document.querySelector('.plates img')

allButtons.forEach(button => {
    button.addEventListener('click', () =>{
        if(button.classList.contains('fa-burger')){
            imageRoll.style.transform = 'rotate(-90deg)'
        }
        if(button.classList.contains('fa-martini-glass')){
            imageRoll.style.transform = 'rotate(10deg)'
        }
        if(button.classList.contains('fa-bowl-food')){
            imageRoll.style.transform = 'rotate(-240deg)'
        }
    })
});
