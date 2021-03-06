import './lib/lib';

$('button').on('click', function() {
  $(this).toggleClass('active');
});

$('.qwer').setAttr('test', 'rewq');
console.log($('.qwer').getAttr('value'));
$('.qwer').removeAttr('data-url');
$('.qwer').toggleAttr('data-url',);


function sayHello() {
  console.log('hi');
}