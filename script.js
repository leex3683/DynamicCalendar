

$(function () {
  //dynamically change colors of calendar and current date
  setInterval(function () {
  today = dayjs();

    $('#currentDay').text("Today is " + today.format('dddd, MMMM, D'))
    let nowBlock =$('#hour-' + today.format('H'));
    
    nowBlock.addClass("present");
    nowBlock.nextAll().addClass("future");
    nowBlock.prevAll().addClass("past");

    // let today = dayjs();
    // let timePart, ampmPart = 0;
    // //Dynamically set current date at top of screen
    // $('#currentDay').text("Today is " + today.format('dddd, MMMM, D'));

    // //loop through each row (with tag hour-i) and compare the text with the current date. Add class past, future, or present accordingly
    // for (let i = 9; i < 18; i++) {
    //   let time = $('#hour-' + i).children('.hour').text();
    //   if (time.length == 3) {
    //     timePart = Number(time.slice(0, 1));
    //     ampmPart = time.slice(1, 3);
    //   } else {
    //     timePart = Number(time.slice(0, 2));
    //     ampmPart = time.slice(2, 4);
    //   }
    //   //convert AM PM formatted time to military by adding 12 to timePart when 1pm or later
    //   if (ampmPart == 'PM' && timePart !== 12) { timePart = timePart + 12 };
    //   //compart military to military and add class accordingly
    //   if (timePart > today.format('HH')) {
    //     $('#hour-' + i).children('textarea').addClass("future");
    //   } else if (timePart == today.format('HH')) {
    //     $('#hour-' + i).children('textarea').addClass("present");
    //   } else if (timePart < today.format('HH')) {
    //     $('#hour-' + i).children('textarea').addClass("past");
    //   }
    // }


  }, 1000);

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  $('button').click(function () {

    $(this).siblings('textarea').text($(this).siblings('textarea').val());

    let successMessageEl = $('<p>').text("Saved to local Storage").css("font-size", "20px");
    $(this).children('.fas').hide(0);
    $(this).append(successMessageEl);
    successMessageEl.fadeOut(2000);
    successMessageEl.promise().done(function () {
      $(this).siblings('.fas').show(1000)
    })
  })


  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
