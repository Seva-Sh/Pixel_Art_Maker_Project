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
// Using height and width variables,
// we append rows(tr) and columns or boxes(td) for each row.
function makeGrid(height, width) {
  $("tr").remove();
  for (var row = 1; row <= height; row++) {
    $('#pixelCanvas').append('<tr id=row' + row + '></tr>');
    for (var column = 1; column <= width; column++) {
      $('#row' + row).append('<td id=column' + column + '></td>');
    }
  }
  // adding color to boxes
  $('td').click(function addColor() {
    color = $('#colorPicker').val();
    if ($(this).attr('style')) {
      $(this).removeAttr('style')
    } else {
      $(this).attr('style', 'background-color:' + color);
    }
  })
}
