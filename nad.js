 var app = angular.module('firstApplication', ['ngMaterial']);
   app.controller('AppCtrl', function($scope, $mdSidenav) {
    $scope.showMobileMainHeader = true;
    $scope.openSideNavPanel = function() {
      $mdSidenav('left').open();
    };
    $scope.closeSideNavPanel = function() {
      $mdSidenav('left').close();
    };
      $('.count1').each(function () {
    $(this).prop('Counter',2000).animate({
        Counter: $(this).text()
    }, {
        duration: 4000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});
    $('.count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 4000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});
    $(function() {
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
    
        if (scroll >= 600) {
           $(".card").addClass('animated fadeInLeft');
        }
    });
});

  });
