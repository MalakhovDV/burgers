function popupReview(){
    const reviewList = document.querySelector('.reviews__list');
    
    reviewList.addEventListener('click' , function(e){
      event.preventDefault(); 
      if(e.target.classList.contains('review__view')){
        const title = e.target.parentNode.parentNode.querySelector('.review__title').textContent;
        const text = e.target.parentNode.parentNode.querySelector('.review__shorttext').textContent;
        
        renderPopup(title, text);
      }
    })
    
    function renderPopup(title, text){
      const popup = document.querySelector('.popup');
  
      popup.classList.add('popup--active');
  
      popup.querySelector('.popup__title').textContent = title;
      popup.querySelector('.popup__text').textContent = text;
  
      popup.querySelector('.popup__close').addEventListener('click' , e=>{
        e.preventDefault();
  
        popup.classList.remove('popup--active');
      })
    }
  }
  
  popupReview();
  