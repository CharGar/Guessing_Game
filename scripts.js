console.log('test');
var people = ['colin', 'charlie', 'jorge', 'ryan'];

var rando = people[Math.floor(Math.random()*people.length)];


$(document).ready(function(){


  console.log('jQuery test');
  $('#name').text(rando);
  $('.pic').on('click', function(){
  $(this).data('name');
  console.log($(this).data ('name'));
  // clickRando();
console.log($("#name").text());
    if( $(this).data('name') === $("#name").text()) {

        alert('You Are Correct!!');
      }else{
        alert('You Are Wronger!!');

      }


    // end if
// function clickRando(){
// // $('.pic').on('click').append(rando);
//   $('#name').append(rando);
//   console.log($('#name').append(rando));
//
// }

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
