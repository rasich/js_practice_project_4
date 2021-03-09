import $ from '../core';

$.prototype.modal = function(created) {
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

    const closeElements = document.querySelectorAll(`${target} [data-close]`);
    closeElements.forEach(elem => {
      $(elem).click(() => {
        $(target).fadeOut(500);
        setTimeout(() => {
          document.body.style.overflow = '';
          document.body.style.marginRight = `0px`;
        }, 500);
        if (created) {
          document.querySelector(target).remove();
        }
      });
    });
  
    $(target).click(e => {
      if (e.target.classList.contains('modal')) {
        $(target).fadeOut(500);
        setTimeout(() => {
          document.body.style.overflow = '';
          document.body.style.marginRight = `0px`;
        }, 500);
        if (created) {
          document.querySelector(target).remove();
        }
      }
    });
  }
};

$('[data-toggle="modal"]').modal();

$.prototype.createModal = function({text, btns} = {}) {
  for (let i = 0; i < this.length; i++) {
    let modal = document.createElement('div');
    modal.classList.add('modal');
    modal.setAttribute('id',this[i].getAttribute('data-target').slice(1));

    // btns = {count: num, settings: [ [text, className=[], close, cb] ]}
    const buttons = [];
    const {settings} = btns;
    for (let j = 0; j < btns.count; j++) {
      let btn = document.createElement('button');
      btn.classList.add('btn', ...settings[j][1]);
      btn.textContent = settings[j][0];
      if (settings[j][2]) {
        btn.setAttribute('data-close', 'true');
      }
      if (settings[j][3] && typeof(settings[j][3]) === 'function') {
        btn.addEventListener('click', settings[j][3]);
      }

      buttons.push(btn);
    }

    modal.innerHTML = `
      <div class="modal-dialog">
        <div class="modal-content">
          <button class="close" data-close>
            <span>&times;</span>
          </button>

          <div class="modal-header">
            <div class="modal-title">
              ${text.title}
            </div>
          </div>
          <div class="modal-body">
            ${text.body}
          </div>
          <div class="modal-footer">
            
          </div>
        </div>
      </div>
    `;

    modal.querySelector('.modal-footer').append(...buttons);
    document.body.appendChild(modal);
    $(this[i]).modal(true);
    $(this[i].getAttribute('data-target')).fadeIn(500);
  }
};