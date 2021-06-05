const sharebutton = document.querySelector('.share')
const shareel = document.querySelector('.shareel')



sharebutton.addEventListener('click' , () => {
    if(!shareel.classList.contains('active')){
        shareel.classList.add('active')
        
    }else{
        shareel.classList.remove('active')
    }
})