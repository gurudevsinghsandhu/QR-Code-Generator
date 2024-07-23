
let input= document.querySelector('input')
let img=document.querySelector('#qrimg')
let btn=document.querySelector('.btn button')


btn.addEventListener('click',()=>{
    img.src= "https://api.qrserver.com/v1/create-qr-code/?size=130x130&data=" +input.value
})
