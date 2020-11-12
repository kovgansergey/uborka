const accordeon = document.querySelector('.accordeon'),
  accordeonCards = accordeon.querySelectorAll('.accordeon-card');

// слайдер
var slider1 = new Swiper('.slider1', {
  spaceBetween: 1000,
  navigation: {
    nextEl: '.slider1-next-btn',
    prevEl: '.slider1-prev-btn'
  },
  pagination: {
    el: '.slider1-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    }
  },
});

// аккордеон
accordeon.addEventListener('click', event => {
  const target = event.target;

  function openCardAnimate(content) {
    let coin = 110;
    const height = content.clientHeight;

    requestAnimationFrame(function openCardAnim() {
      content.style.height = coin + 'px';

      if (coin < height) {
        coin += 15
        requestAnimationFrame(openCardAnim);
      } else {
        content.style.height = '';
      }
    });
  }
  
  if (target.closest('.accordeon-card__title') && !target.closest('.accordeon-card').classList.contains('active')) {
    accordeonCards.forEach(item => {
      item.classList.remove('active');
    });

    target.closest('.accordeon-card').classList.add('active');
    openCardAnimate(target.closest('.accordeon-card').querySelector('.accordeon-card__content'));
  }
});

$('[type=tel]').mask('+7 (000) 000-00-00');

$('#form1').validate({
  rules: {
    userName: {
      required: true
    },
    userPhone: {
      required: true
    },
    check: 'required'
  },
  messages: {
    userName: {
      required: 'обязательно'
    },
    userPhone: {
      required: 'обязательно'
    },
    check: 'ss'
  },
  errorPlacement: function (error, element) {
    if (element.attr("type") == "checkbox") {
      element.next('label').append(error); //addClass()
    } else {
      error.insertAfter($(element));
    }
  },
  // highlight: function (element, errorClass) {
  //   if (element.attr("type") == "checkbox") {
  //     element.next('label').addClass(errorClass);
  //   }
  // },
  // unhighlight: function (element, errorClass) {
  //   if (element.attr("type") == "checkbox") {
  //     element.next('label').removeClass(errorClass);
  //   }
  // },
  submitHandler: function (form) {
    alert('valid form submitted');
    return false;
  }
});