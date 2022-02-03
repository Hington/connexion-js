let bonM = document.querySelector('#bonM')
let motP = document.querySelector('#motP')
let btnS = document.querySelector('#btnS')

const local =JSON.parse(localStorage.getItem('login'))

btnS.addEventListener('click',()=>{
   if (local != bonM.value && local != motP.value) {
       alert('erreur')
   } else {
       alert('connecte')
   }
})