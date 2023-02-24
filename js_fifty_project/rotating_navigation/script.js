const open=document.getElementById('open')
const close=document.getElementById('close')
const container =document.querySelector('.container')

open.addEventListener('dblclick',()=>
    container.classList.add('show-nav'))
close.addEventListener('dblclick',()=>{
    container.classList.remove('show-nav')
})