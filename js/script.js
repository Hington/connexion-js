let mail = document.querySelector('#mail_inscr')
let mp = document.querySelector('#mp_inscr')
let valid = document.querySelector('#valid_inscr')

const local =JSON.parse(localStorage.getItem('login'))

valid.addEventListener('click',()=>{
    const login ={
        email : mail.value,
        password: mp.value
    }
    localStorage.setItem('login', JSON.stringify(login))
})