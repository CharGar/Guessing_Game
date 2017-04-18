console.log('test');
var people = ['colin', 'charlie', 'jorge', 'ryan'];

var rando = people[Math.floor(Math.random()*people.length)];


$(document).ready(function(){


  console.log('jQuery test');
  $('#name').text(rando); //add arr to span

  $('.pic').on('click', function(){

    if( $(this).data('name') === $("#name").text()) {

        alert('You Are Correct!!');

      } else {

        alert('You Are Wronger!!');

      }




});











});
