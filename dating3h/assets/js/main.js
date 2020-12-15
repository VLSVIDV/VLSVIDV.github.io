// skeleton load
$(document).ready(function() {
  $('.chart__review .btn').on('click', function(){
    $(this).toggleClass('show');
    $(this).parents('.chart__info').next('.chart__info--adv').slideToggle('fast');
  }); 
  
  
  var url_string = window.location.href;
  var url = new URL(url_string);
  
  var open = {
    0: url.searchParams.get("open1"),
    1: url.searchParams.get("open2"),
    2: url.searchParams.get("open3"),
    3: url.searchParams.get("open4"),
    4: url.searchParams.get("open5")  
  }

  var chartInfo = $('.chart__info--adv');
  
  
  
  for(let i = 0; i < 5; i++){
      if(open[i]){
        //  console.log(chartInfo[i]);
         $(chartInfo[i]).show();
        //   chartInfo[i].toggleClass('show');
      }
  }
  
  
  //LEAVE WINDOW FUNC


  // var isLeavePopup = jQuery('.exit-popup');
  // if (isLeavePopup) {
  //   jQuery('html').mouseleave(function(event) {
  //     isLeavePopup.removeClass('hidden');
  //     jQuery('.exit-popup-overflow').removeClass('hidden');
  //   });
  //   jQuery('.modal__close-icon').click(function() {
  //     isLeavePopup.addClass('hidden');
  //     jQuery('.exit-popup-overflow').addClass('hidden');
  //   });
  // }

});
