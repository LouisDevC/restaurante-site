const allMenuOptions = document.querySelectorAll('.menu li')

allMenuOptions.forEach(option =>{
    option.addEventListener('click', () =>{
        if(option.textContent === 'nossa história'){
            document.querySelector('#history').scrollIntoView({ behavior: 'smooth' })
        }
        if(option.textContent === 'nossa culinária'){
            document.querySelector('#culinary').scrollIntoView({
            behavior: 'smooth' })
        }
        if(option.textContent === 'Os melhores'){
            document.querySelector('#bests').scrollIntoView({
            behavior: 'smooth' })
        }
        if(option.textContent === 'contato'){
            document.querySelector('#contact').scrollIntoView({
            behavior: 'smooth' })
        }
        })
    })
// 