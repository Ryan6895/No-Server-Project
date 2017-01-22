$(document).ready(function() {
  $('.erase').hide();
  $('.searchbar').on('mouseenter', function () {
  $('.search').css('filter', 'invert(0%)');
  $('.erase').show();
  });
  $('.searchbar').on('mouseleave', function () {
  $('.search').css('filter', 'invert(60%)');
  $('.erase').hide();
  });
  $('#hamburger').click(function(){
  		$(this).toggleClass('open');
  	});
});
