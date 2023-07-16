$(function () {
  //dynamically change colors of calendar and current date
  setInterval(function () {
    today = dayjs();
    $('#currentDay').text("Today is " + today.format('dddd, MMMM, D'))
    let nowBlock = $('#hour-' + today.format('H'));
    if (today.format('H') < 9) {
      $(".row").addClass('future');
    }
    else if (today.format('H') > 17) {
      $(".row").addClass('past');
    }
    
    else {
    nowBlock.addClass("present");
    nowBlock.nextAll().addClass("future");
    nowBlock.prevAll().addClass("past");
    }
  }, 100);

  //on button click, save the text value to local storage with key equal to parent id
  $('button').click(function () {
    $(this).siblings('textarea').text($(this).siblings('textarea').val());
    localStorage.setItem($(this).parents().attr('id'), $(this).siblings('textarea').text());
    let successMessageEl = $('<p>').text("Saved to local Storage").css("font-size", "15px");
    $(this).children('.fas').hide(0);
    $(this).append(successMessageEl);
    successMessageEl.fadeOut(2000);
    successMessageEl.promise().done(function () {
      $(this).siblings('.fas').show(1000)
    })
  })
  //On page load, get all locally stored text and put it in the div with key matching id
  for (let j = 9; j < 18; j++) {
    $("#hour-" + j).children('textarea').text(localStorage.getItem("hour-" + j))
  }
});
