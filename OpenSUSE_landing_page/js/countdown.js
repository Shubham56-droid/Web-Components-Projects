$(function () {

  // one hour later due to https://github.com/openSUSE/landing-page/issues/113
  var leapReleaseDate = moment.tz("2021-06-02 13:00", "UTC");

  $('.opensuse-countdown__number').countdown(leapReleaseDate.toDate(), function(event) {

    //if no more days left, but still some hours (at least 1 hour left)
    if (event.strftime('%D') == 00 && event.strftime('%H') > 00) {

      $(this).html(event.strftime('%H'));
      //if there is only 1 hour, show the singular text form
      if (event.strftime('%H') == 01) {
        $('.opensuse-countdown__hours__plural').hide();
        $('.opensuse-countdown__hours__singular').show();
      } else {
        $('.opensuse-countdown__hours__plural').show();
        $('.opensuse-countdown__hours__singular').hide();
      }

      $('.opensuse-countdown__days').hide();

      $('.opensuse-countdown__time-left').removeClass('hidden');
    }

    //if no more hours are left (although minutes are not considered here)
    else if (event.strftime('%H') == 00 && event.strftime('%D') == 00) {

      $('.opensuse-countdown__time-left').addClass('hidden');
      $('.opensuse-countdown__released').removeClass('hidden');
    }

    //if there are more than 1 day left
    else {

      $(this).html(event.strftime('%D'));
      //if there is only 1 day, show the singular text form
      if (event.strftime('%D') == 01) {
        $('.opensuse-countdown__days__singular').show();
        $('.opensuse-countdown__days__plural').hide();
      } else {
        $('.opensuse-countdown__days__singular').hide();
        $('.opensuse-countdown__days__plural').show();
      }

      $('.opensuse-countdown__hours').hide();

      $('.opensuse-countdown__time-left').removeClass('hidden');

    }
  });

});
