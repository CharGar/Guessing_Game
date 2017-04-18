console.log('test');
var people = ['colin', 'charlie', 'jorge', 'ryan'];

var rando = people[Math.floor(Math.random()*people.length)];

// var pic = url(https://img.clipartfest.com/524c5a4d699f21f3d0ec1ec209c058d3_dark-green-check-mark-clip-art-green-check-mark-clipart_600-461.png);

$(document).ready(function(){


  console.log('jQuery test');


  $('#name').text(rando); //add person to span



  $('.pic').on('click', function(){

    if( $(this).data('name') === $("#name").text()) {

        // pic.show( "drop", {direction: "down"}, 1000 );

        $('body').css({'background-image': "url('check.png')"});
          alert('You Are Correct!!');
        setTimeout(location.reload.bind(location), 5000);

      } else {


        $(this).effect( "explode", {times:4}, 5000 );
        alert('You Are Wronger!!');


      }




});





});
