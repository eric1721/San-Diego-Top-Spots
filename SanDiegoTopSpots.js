$(document).ready(function() {
    $.getJSON('TopSpots.json', function(data) {

var tRow;
  for (i=0; i<data.length; i++) {
tRow =  $('<tr/>');
      tRow.append("<td>" + data[i].name + "</td>");
      tRow.append("<td>" + data[i].description + "</td>");
      tRow.append("<td><a href='https://www.google.com/maps/place/"+data[i].location+"'>Link</a></td>");
      $('table').append(tRow)

};
});
});
