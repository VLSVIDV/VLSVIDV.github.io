// skeleton load
$(document).ready(function() {
  $('.chart__review .btn').on('click', function(){
    $(this).toggleClass('show');
    $(this).parents('.chart__info').next('.chart__info--adv').slideToggle('fast');
  });


  //LEAVE WINDOW FUNC

  var isLeavePopup = jQuery('.exit-popup');
  if (isLeavePopup) {
    jQuery('html').mouseleave(function(event) {
      isLeavePopup.removeClass('hidden');
      jQuery('.exit-popup-overflow').removeClass('hidden');
    });
    jQuery('.modal__close-icon').click(function() {
      isLeavePopup.addClass('hidden');
      jQuery('.exit-popup-overflow').addClass('hidden');
    });
  }


});
