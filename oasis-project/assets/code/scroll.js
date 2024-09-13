const allMenuOptions = document.querySelectorAll('.menu li')

allMenuOptions.forEach(option =>{
    option.addEventListener('click', () =>{
        if(option.textContent === 'nossa história')(
            window.scroll({
                top: window.innerHeight,
                left: 0,
                behavior: 'smooth'
        }))
        if(option.textContent === 'nossa culinária'){
            window.scroll({
                top: window.innerHeight *2.05,
                left: 0,
                behavior: 'smooth'})
        }
        if(option.textContent === 'Os melhores'){
            window.scroll({
                top: window.innerHeight *3.05,
                left: 0,
                behavior: 'smooth'
            })
        }
        if(option.textContent === 'contato'){
            window.scroll({
                top: window.innerHeight *4.5,
                left: 0,
                behavior: 'smooth'
            })
        }
    })
})