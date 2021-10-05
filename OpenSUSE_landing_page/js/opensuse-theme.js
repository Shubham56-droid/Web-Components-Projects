// Functions for the mobile version
$(document).on('click', '#open_main_menu', openMobileMenu);

// Add swipe detection
$(document).on('ready', detectMobileScreen);

var screenWidth;
var menuOpen = false;

function detectMobileScreen() {
  screenWidth = $(window).outerWidth();
  if (screenWidth < 768) {
    if (!menuOpen) {
      $('.finger-detection-open-menu').on('swiperight', openMobileMenu);
    }
  }
}

function openMobileMenu () {
  if (menuOpen) {
    $('aside').css({'left': '-250px'});
    menuOpen = false;
  } else {
    $('aside').css({'left': '0px'});
    menuOpen = true;
    $('aside').on('swipeleft', openMobileMenu);
  }
}

var scrolled, mainSectionHeight, headerHeight, containerHeight;

// always initiate the scroll at the top
$(window).on('beforeunload', function() {
  $(window).scrollTop(0);
});

// get the height of the browser screen
$(window).on('resize', function() {
  headerHeight = $('header').outerHeight();
  mainSectionHeight = $('#opensuse-os').outerHeight() - headerHeight;
  //remove the height in the container of the main section 'home'
  $('#opensuse-os').css('height', '')
  containerHeight = $('#opensuse-os').outerHeight() + 30
})

$(window).bind('scroll',function(e){
  getScrolledData();
});

var $mainMenu;

$(function() {
  $mainMenu = $('#main-menu').html()
  $('aside').html($mainMenu)
  headerHeight = $('header').outerHeight();
  mainSectionHeight = $('#opensuse-os').outerHeight() - headerHeight;
})

var scrolledDown = false;

function getScrolledData() {
  scrolled = $(window).scrollTop();

  // Go to Top
  if ($(window).outerHeight()/2 < scrolled) {
    $(".go-to-top").fadeIn();
  }
  else {
    $(".go-to-top").fadeOut();
  }

  // detect if the user has scrolled more than the first section (height) to reduce the size of the menu
  if (scrolled > mainSectionHeight) {
    headerChanges()
    scrolledDown = true;
  }

  if (scrolledDown && scrolled < mainSectionHeight) {
    headerReset()
  }
}

function headerChanges() {
  $('header').css({
    background: moreInfoOpened ? '#6da741' : '#173f4f',
    top: '0px',
    height: '45px',
    padding: '8px',
    'z-index': '1000'
  })
  $('#opensuseLogo').css({
    height: '25px'
  })
  $('header ul li a').css({
    'font-size': '14px',
    'color': '#fff'
  })

}
function headerReset() {
  $('header').removeAttr('style')
  //but always keep the color applied from the scrolling
  $('header').css({
    background: moreInfoOpened ? '#6da741' : '#173f4f'
  })
  $('#opensuseLogo').removeAttr('style')
  $('header ul li a').removeAttr('style')
  $('header ul li a').css({
    'color': moreInfoOpened ? '#fff' : ''
  })
}

// init WOW.js
wow = new WOW(
  {
    offset: 30
  }
)
wow.init();

// init OWL slider

$(document).ready(function() {
  $("#owl-slide-news").owlCarousel({

  navigation : true,
  slideSpeed : 300,
  paginationSpeed : 400,
  singleItem : true,
  navigationText : ["&#xf053;","&#xf054;"]
  });
});


// tumbleweed opensuse more information

var moreInfoOpened = false;
var $osSelected, title, text, icon;

$(function() {
  $('#tumbleweed').on('click', function() {
    osMoreInformation($(this))
  })
  $('#openSUSE').on('click', function() {
    osMoreInformation($(this))
  })
})

function osMoreInformation(os) {

  moreInfoOpened = true
  //get the height of the main container
  containerHeight = $('#opensuse-os').outerHeight();
  

  //find the information of the selected distribution
  $osSelected = os
  osSelectedTitle = $osSelected.find("h1").html()
  osSelectedText = $osSelected.find(".hidden-content").html()
  osSelectedIcon = $osSelected.find(".distributions-icon").html()

  window.location.hash = osSelectedTitle;
  
  //dont let users click more than once
  $osSelected.addClass('not-clickable')

  // animation
  $('#opensuse-os .container-fluid').addClass('animated bounceOut')
  $('#opensuse-os').css({
    background: '#6da741'
  })
  $('header').css({
    background: moreInfoOpened ? '#6da741' : '#173f4f'
  })
  $('header ul li a').css({
    color: "#fff"
  })

  setTimeout(hideLandingPageInfo, 800)
  setTimeout(createMoreInformationArea, 1300)

  function hideLandingPageInfo () {
    $('#opensuse-os').css({
      height: containerHeight + 'px'
    })
    $('#opensuse-os .container-fluid').hide()
  }
  function createMoreInformationArea () {
    information = '<div class="text-center" id="more-information-os">'
                  + '<div class="os-icon"></div>'
                  + '<h1 class="wow fadeInUp">'
                  + osSelectedTitle
                  + '</h1>'
                  + '<div class="wow fadeInUp">'
                  + osSelectedText
                  + '</div>'
                  + '<br/>'
                  + '<div class="btn btn-link back-to-main-page">'
                  + '<i class="fa fa-long-arrow-left"></i>'
                  + '<span lang="en">Back to main page</span>'
                  + '</div>'
                  + '</div>'
    $('#opensuse-os').append(information)
    $('.os-icon').html(osSelectedIcon)

    $('.back-to-main-page').on('click', function() {
      history.pushState('', document.title, window.location.pathname);  
      backToMainPageOs($osSelected)
    })

    $('#home, #opensuseLogo').on('click', function() {
      history.pushState('', document.title, window.location.pathname);  
      scrolled = $(window).scrollTop();
      if (scrolled > mainSectionHeight) {
        setTimeout('backToMainPageOs($osSelected)', 900);

      } else
      {
        backToMainPageOs($osSelected)
      }
    })

  }
}

function backToMainPageOs (os) {
  moreInfoOpened = false;
  $('#more-information-os').addClass('animated bounceOut')
  $('header').removeAttr('style')
  $('header ul li a').removeAttr('style')
  $('#opensuse-os').removeAttr('style').css({
      height: containerHeight + 'px'
    })

  setTimeout(hideMoreInformation, 800)
  setTimeout(showMainInformation, 1300)

  function hideMoreInformation () {
    $('#more-information-os').hide()
    $('#more-information-os').remove()

  }

  function showMainInformation () {
    $('#opensuse-os .container-fluid').removeClass('animated bounceOut').show().addClass('animated bounceIn')
  }

  //make the area clickable again
  $osSelected = os
  $osSelected.removeClass('not-clickable')

}

//*****************init i18n

var lang = new Lang('en');
//languages setup - please list here all new language packs
window.lang.dynamic('ar', 'assets/js/langpack/ar.json');
window.lang.dynamic('ast', 'assets/js/langpack/ast.json');
window.lang.dynamic('ca', 'assets/js/langpack/ca.json');
window.lang.dynamic('cs', 'assets/js/langpack/cs.json');
window.lang.dynamic('da', 'assets/js/langpack/da.json');
window.lang.dynamic('de', 'assets/js/langpack/de.json');
window.lang.dynamic('el', 'assets/js/langpack/el.json');
window.lang.dynamic('et', 'assets/js/langpack/et.json');
window.lang.dynamic('es', 'assets/js/langpack/es.json');
window.lang.dynamic('fa', 'assets/js/langpack/fa.json');
window.lang.dynamic('fi', 'assets/js/langpack/fi.json');
window.lang.dynamic('fr', 'assets/js/langpack/fr.json');
window.lang.dynamic('gl', 'assets/js/langpack/gl.json');
window.lang.dynamic('hy', 'assets/js/langpack/hy.json');
window.lang.dynamic('id', 'assets/js/langpack/id.json');
window.lang.dynamic('it', 'assets/js/langpack/it.json');
window.lang.dynamic('ja', 'assets/js/langpack/ja.json');
window.lang.dynamic('ko', 'assets/js/langpack/ko.json');
window.lang.dynamic('lt', 'assets/js/langpack/lt.json');
window.lang.dynamic('nl', 'assets/js/langpack/nl.json');
window.lang.dynamic('nn', 'assets/js/langpack/nn.json');
window.lang.dynamic('pl', 'assets/js/langpack/pl.json');
window.lang.dynamic('pt_BR', 'assets/js/langpack/pt_BR.json');
window.lang.dynamic('ru', 'assets/js/langpack/ru.json');
window.lang.dynamic('sk', 'assets/js/langpack/sk.json');
window.lang.dynamic('sv', 'assets/js/langpack/sv.json');
window.lang.dynamic('uk', 'assets/js/langpack/uk.json');
window.lang.dynamic('zh_CN', 'assets/js/langpack/zh_CN.json');
window.lang.dynamic('zh_TW', 'assets/js/langpack/zh_TW.json');

//change language on click
$(document).on("click", ".change-language", function() {
  var languageSelected = $(this).data('language-value');
  var languageString = $(this).html();
  $('.dropup_language-menu').removeClass('open');
  $("body").fadeOut(300, function() {
    window.lang.change(languageSelected);
    $(".selected-language").html(languageString);
    $(this).fadeIn(300);
  });

  return false;
})

//check if there is a langCookie in the browser
$(document).on("ready", function(){

  var languageCode;
  var selectedLanguageName;

  if (cookieLanguage === undefined) {
    try {
      // try to use navigator.language
      languageCode = navigator.language.replace("-","_");
      window.lang.change(languageCode);
    }
    catch(err) {
      // navigator.language is not available
      if (navigator.language.length > 2) {
        try {
          // try with a more general string (for example, if navigator.language is "es-ES" then "es" is tried)
          languageCode = navigator.language.substring(0,2);
          window.lang.change(languageCode);
        }
        catch(err) {
          languageCode = "en";
        }
      }
      else {
        languageCode = "en";
      }
    }
  }
  else {
    languageCode = cookieLanguage;
  }

  selectedLanguageName = $(".languages").find("[data-language-value='" + languageCode + "']").html();
  $(".selected-language").html(selectedLanguageName);

});
//*****************


//init particles background
/* Disabled for excessive CPU consumption
$(document).ready(function() {
  var colorParticles = 'rgba(255,255,255,0.07)'
  $('#opensuse-os').particleground({
    dotColor: colorParticles,
    lineColor: colorParticles
  });
});
*/

//Contribution interpolation

$(document).ready(function () {

  contributionInterpolation()

});

var contributionInterpolation = function () {
  $(document).on("click", '.contribute-code', function () {
    bounceBall($(this), 3, 250);
  })
  $(document).on("click", '.contribute-hardware', function () {
    bounceBall($(this), 3, 250);
  })

  function bounceBall(element, times, speed) {

    //dont let the user click on the ball while the description is open
    element.addClass('not-clickable');

    //add the class Active to the element
    element.addClass('active');

    //take the initial position of the element
    var x = element.offset().left - $(window).scrollLeft();
    var y = $(window).outerHeight() - (element.offset().top - $(window).scrollTop()) - element.outerHeight();
    var elementWidth = element.outerWidth();

    //make the element a position absolute element of the body removing it first from the original container
    var parent = element.parent();
    element.detach();
    $('#contribute-details').prepend(element).css({display: 'block'});
    //element.

    element.css({
      position: 'absolute',
      left: x + 'px',
      bottom: y + 'px',
      width: elementWidth + 'px'
    })

    for(var i = 0; i < times; i++) {
      distance =  y / (i+2) ;

      element.animate({bottom: 0}, speed, 'easeInQuad')
        .animate({bottom: '+='+distance}, speed, 'easeOutQuad');
      if (i === 2) {
        element.animate({bottom: 0}, 400, 'easeInQuad', function() {
          openContributionDetails()
        });
      }
    }

    var openContributionDetails = function () {
      var $closeDetails = '<button type="button" class="close-details btn btn-default" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>'
      var $detailsContent = parent.find('.hidden-content').html();
      var $details = "<div class='contribution-extended-details animated fadeInUp'>" + $detailsContent + "</div>"

      $("#contribute-details").css({background: 'rgba(109, 167, 65, 0.9)'})
        .append($details).append($closeDetails);

      //close the details
      $('.close-details').on("click", function() {
        //remove the Animated class first, to restart the effect in case the user
        //clicks more than once on the element
        parent.prepend(element).removeClass('animated fadeInUp');
        $('#contribute-details').fadeOut(function() {
          $(this).empty().removeAttr('style');
          element.removeAttr('style').removeClass('active');
          parent.prepend(element).addClass('animated fadeInUp');
          element.removeClass('not-clickable');
        })
      });

    }
  }

}

// Add "openSUSE Linux OS" to the document Title
$(document).on("ready", function() {
  $("title").prepend('openSUSE - Linux OS. ')
})

// check if SVG is supported by the user's browser
$(document).on("ready", function(){
  if (!Modernizr.svg) {
    //replace all the svg images for png
    $("img").each(function() {
      var currentValue = $(this).attr("src");
      var newValue = currentValue.replace(".svg", ".png");
      $(this).attr("src", newValue)
    });
    //add a class to the background of Contribute so the background is a .jpg
    $("#contribute-to-opensuse").addClass('no-svg')
  }
})

window.onkeyup = function(e) {
  var key = e.keyCode ? e.keyCode : e.which;

  if (key == 8 || key == 27) {
    history.pushState('', document.title, window.location.pathname);
    backToMainPageOs($osSelected);
  }
}


