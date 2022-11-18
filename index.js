const mainContainer=document.querySelector('.main-container')
const thanksPage=document.querySelector('.thankyou')
const submit=document.getElementById('submit')
const rateButton=document.getElementById('rate')
const rating=document.getElementById('rating')
const rates=document.querySelectorAll('.btn')

submit.addEventListener('click',()=>{
    thanksPage.classList.remove('hidden')
    mainContainer.style.display='none'
})
rateButton.addEventListener('click',()=>{
    thanksPage.classList.add('hidden')
    mainContainer.style.display='block'
})

rates.forEach((rate)=>{
    rate.addEventListener('click',()=>{
        rating.innerHTML=rate.innerHTML
    })
})