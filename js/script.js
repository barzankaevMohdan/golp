const slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    controls: false,
    nav: false,
  });

document.querySelector('.prev').addEventListener ('click' ,function () {
    slider.goTo('prev');
 });

document.querySelector('.next').addEventListener ('click' ,function () {
    slider.goTo('next');
 });

 //Modal

 $(document).ready(function(){
   
      $('[data-modal=consultation]').on('click', function () {
        $('.overlay, #consultation').fadeIn('fast');
      });
      $('.modal__close').on('click', function() {
          $('.overlay, #consultation, #thanks').fadeOut('fast');
      });

 //Validate 

 function validateForms(form){
  $(form).validate({
    rules: {
      name: {
        required: true,
        minlength: 2
      },
      phone: "required",
      email: {
        required: true,
        email: true
      },
      text: {
        required: true,
        minlength: 2
      }
    },
    messages: {
      name: {
        required: "Пожалуйста, введите свое имя",
        minlength: jQuery.validator.format("Введите минимум {0} символа")
      },
      phone: "Пожалуйста, введите свой номер телефона",
      email: {
        required: "Пожалуйста, введите свою почту",
        email: "Неправильно введен адрес почты"
      },
      text: {
        required: "Пожалуйста, заполните поле",
        minlength: jQuery.validator.format("Введите минимум {0} символа")
      }
    }
  });
};

  
  validateForms('#consultation form');
  validateForms('#choise-form form');
  validateForms('#question-form form');
  //Number 

  $('input[name=phone]').mask("+7 (999) 999-99-99");

  //Pageup

  $(window).scroll(function() {
    if($(this).scrollTop() > 1600) {
      $('.pageup').fadeIn();
    } else {
      $('.pageup').fadeOut();
    }
  });

});