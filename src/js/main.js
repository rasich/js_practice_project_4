import './lib/lib';

$('button').on('click', function() {
  $(this).toggleClass('active');
  $('div').eq(2).toggleClass('active');
});

$('.qwer').setAttr('test', 'rewq');
// console.log($('.qwer').getAttr('value'));
$('.qwer').removeAttr('data-url');

$('div').click(function() {
  // console.log($(this).index());
});

// console.log($('button').html('hello'));

// console.log($('div').eq(3).find('.some'));

// console.log($('.some').closest('.findmew'));
// console.log($('.some').closest('.findme').addClass('aedw'));

// console.log($('.more').eq(0).siblings());

$('button').fadeIn(1800);