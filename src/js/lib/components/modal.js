import $ from '../core';

$.prototype.modal = function() {
  const scroll = calcScroll();
  
  function calcScroll() {
    var div = document.createElement('div');
    div.style.width = '50px';
    div.style.height = '50px';
    div.style.overflowY = 'scroll';
    div.style.visibility = 'hidden';
    document.body.appendChild(div);
    var scrollWidth = div.offsetWidth - div.clientWidth;
    div.remove();
    return scrollWidth;
  }
  
  for (let i = 0; i < this.length; i++) {
    const target = $(this[i]).getAttr('data-target');
    $(this[i]).click((e) => {
      e.preventDefault();
      $(target).fadeIn(500);
      document.body.style.overflow = 'hidden';
      if (document.documentElement.clientHeight != document.documentElement.scrollHeight) {
        document.body.style.marginRight = `${scroll}px`;
      }
    });
  }
  
  const closeElements = document.querySelectorAll('[data-close]');
  closeElements.forEach(elem => {
    $(elem).click(() => {
      $('.modal').fadeOut(500);
      setTimeout(() => {
        document.body.style.overflow = '';
        document.body.style.marginRight = `0px`;
      }, 500);
    })
  });

  $('.modal').click( e => {
    if (e.target.classList.contains('modal')) {
      $('.modal').fadeOut(500);
      setTimeout(() => {
        document.body.style.overflow = '';
        document.body.style.marginRight = `0px`;
      }, 500);
    }
  });
};

$('[data-toggle="modal"]').modal();