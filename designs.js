// Select color input
// Select size input
var color;
var height;
var width;

// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(function (event) {
  event.preventDefault();
  height = $('#inputHeight').val();
  width = $('#inputWidth').val();
  makeGrid(height, width);
})

function makeGrid(height, width) {
  $("tr").remove();
  for (var row = 1; row <= height; row++) {
    $('#pixelCanvas').append('<tr id=row' + row + '></tr>');
    for (var column = 1; column <= width; column++) {
      $('#row' + row).append('<td id=column' + column + '></td>');
    }
  }

  $('td').click(function addColor() {
    color = $('#colorPicker').val();
    if ($(this).attr('style')) {
      $(this).removeAttr('style')
    } else {
      $(this).attr('style', 'background-color:' + color);
    }
  })
}
