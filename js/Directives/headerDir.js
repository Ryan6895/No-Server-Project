angular.module("App")
.directive('headerDir', function () {
  return {
    restrict: 'E',
    templateUrl: 'js/Directives/headerDir.html',
    controller: 'Controller',
    link: function(scope, elem, attrs) {

          $('.erase').hide();
          $('.searchbar').on('mouseenter', function () {
          $('.search').css('filter', 'invert(0%)');
          $('.erase').show();
          });
          $('.searchbar').on('mouseleave', function () {
          $('.search').css('filter', 'invert(60%)');
          $('.erase').hide();
          });

    }
    }
  }
)
