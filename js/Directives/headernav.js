angular.module("App")
.directive('headerNav', function () {
  return {
    restrict: 'A',
    link: function(scope, elem, attr) {
      elem.on('click', function(e){
        elem.css('color', 'blue')
      })
    }
  }
})
