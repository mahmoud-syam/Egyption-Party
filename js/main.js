/// <reference types="../@types/jquery" />




$('.burger-icon').on('click', function () {
    $('.left-nav').animate({ width: 'toggle' }).show(1000)
});
$('.closebtn').on('click', function () {
    // $('.left-nav').hide(1000)
    $('.left-nav').animate({ width: 'toggle' }).hide(1000)
});

// Start SlideDown toggle

$('#toggleOne').on('click', function () {
    // $('.left-nav').hide(1000)
    $('#innerOne').animate({ height: 'toggle' })
});
$('#toggleTwo').on('click', function () {
    // $('.left-nav').hide(1000)
    $('#innerTwo').animate({ height: 'toggle' })
});
$('#toggleThree').on('click', function () {
    // $('.left-nav').hide(1000)
    $('#innerThree').animate({ height: 'toggle' })
});
$('#toggleFour').on('click', function () {
    // $('.left-nav').hide(1000)
    $('#innerFour').animate({ height: 'toggle' })
});


// $('.toggle').on('click',function(){
//     $(this).next().css('display','block')
//     // $(this).next().siblings().css('display','none')
// })



// Start CountDown
var endDate = new Date("2023-10-25T23:59:59").getTime();

setInterval(function () {
    var dateTimeNow = new Date().getTime();
    var remainingTime = dateTimeNow - endDate;

    var days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    var hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

    // $("#countdown").html(days + "days " + hours + "hrs " + minutes + "min " + seconds + "s");
    $("#countdown").html(`
    <div class="col-md-3">
                  <div class="conuter border border-white py-5">
                     <div class="days">
                        ${days} Days
                     </div>
                  </div>
               </div>
               <div class="col-md-3">
                  <div class="conuter border border-white py-5">
                     <div class="hours">
                        ${hours} Hours
                     </div>
                  </div>
               </div>
               <div class="col-md-3">
                  <div class="conuter border border-white py-5">
                     <div class="minites">
                        ${minutes} Minites 
                     </div>
                  </div>
               </div>
               <div class="col-md-3">
                  <div class="conuter border border-white py-5">
                     <div class="secondes">
                        ${seconds} Secondes
                     </div>
                  </div>
               </div> 
    `);
}, 1000);



/*Start textarea*/

var maxLength = 100;
$('textarea').keyup(function () {
    var length = $(this).val().length;
    var AmountLeft = maxLength - length;
    if (AmountLeft <= 0) {
        $("#chars").text("Your Character Finished");

    }
    else {

        $("#chars").text(AmountLeft);
    }
});

