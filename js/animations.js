  $(document).ready(function() {
    $('.item_addToList').css('display', 'none');
    $('.openList').on('mouseenter', function () {
    $('.item_addToList').show();
    });
    $('.searchbar').on('mouseleave', function () {
    $('.search').css('filter', 'invert(60%)');
    $('.erase').hide();
    });

  })
