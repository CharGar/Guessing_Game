console.log('test');
var people = ['Colin', 'Charlie', 'Jorge', 'Ryan'];

var rando = people[Math.floor(Math.random()*people.length)];


$(document).ready(function(){
  console.log('jQuery test');

$('#name').text(rando);


$('.pic').on('click', function(){

$(this).data('name');
console.log($(this).data ('name'));
});
// function checkname(){
//
//
//
// };







});

// function randomNumber(min, max){
//     return Math.floor(Math.random() * (1 + max - min) + min);
// }
//
//
// console.log(randomNumber);
