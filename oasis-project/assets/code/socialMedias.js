const socialTextContent = document.querySelector('#contato-text')
const allSocialMedias = document.querySelectorAll('.contato a i')

allSocialMedias.forEach(social =>{
    console.log(social)
    social.addEventListener('mouseover', (e) =>{
        if(social.classList.contains('fa-github')){
            socialTextContent.textContent = 'Meu gitHub'
        }
        if(social.classList.contains('fa-linkedin-in')){
            socialTextContent.textContent = 'Meu Linkedin'
        }
        if(social.classList.contains('fa-person-circle-exclamation')){
            socialTextContent.textContent = 'Sobre mim'
        }
        if(social.classList.contains('fa-note-sticky')){
            socialTextContent.textContent = 'avalie este site'
        }
        if(social.classList.contains('fa-arrow-up')){
            socialTextContent.textContent = 'voltar ao topo'
        }
    })
})