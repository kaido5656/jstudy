function onEdit(e) {
  addTimestamp(e);
}
function addTimestamp(e){
  //Edit the following Variables to your needs
  var startRow = 2;
  var ticketColumn = 6;
  var completeColumn = 7;
  var startColumn = 8;
  var endColumn =9;
  //Stop Editing
  var row = e.range.getRow();
  var col = e.range.getColumn();
  if(col === ticketColumn && row >= startRow) {
    var currentDate = new Date()
    e.source.getActiveSheet().getRange(row, startColumn).setValue(currentDate);
  }
  if (col === completeColumn && row >= startRow) {
    var currentDate = new Date()
    e.source.getActiveSheet().getRange(row, endColumn).setValue(currentDate);
  }
  if(col === breakstartColumn && row >= startRow) {
    var currentDate = new Date()
    e.source.getActiveSheet().getRange(row, breakstartTime).setValue(currentDate);
  }
  if (col === breakendColumn && row >= startRow) {
    var currentDate = new Date()
    e.source.getActiveSheet().getRange(row, breakendTime).setValue(currentDate);
  }
}