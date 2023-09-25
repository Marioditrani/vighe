const body = document.querySelector('body')
const light = document.getElementById('lightButton')

light.addEventListener('click', ()=>{
    body.classList.toggle ('dark');
    if(light.innerHTML ==='<i class="far fa-moon></i>'){
        light.innerHTML ='<i class="fas fa-sun></i>'
    }
    else{
        light.innerHTML ='<i class="far fa-moon></i>'
    }
})