$('#collapseOne').on('show.bs.collapse', function () {
    $('#seeMoreText').text('Pokaż Mniej');
  })

$('#collapseOne').on('hide.bs.collapse', function () {
    $('#seeMoreText').text('Pokaż Więcej');
  })