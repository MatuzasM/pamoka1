// Generate array of years
function generateArrayOfYears(length = 1) {
  var max = new Date().getFullYear()
  var min = max - 100
  var years = []
  for (var i = max; i >= min; i--) {
    years.push(i)
  }
  return years
}

// Generate array of months
function generateArrayOfMonths() {
  const months = [];
  const d = new Date();
  for (let month = 0; month < 12; ++month) {
    d.setMonth(month);
    months.push(d.toLocaleString(undefined, { month: 'long' }));
  } return months
}

// Get month from select element
function selectMonth() {
  return document.getElementById("month").value;
}
// Get year from select element
function selectYear() {
  return document.getElementById("year").value;
}

// Generate number of days by month and year
function daysInMonth() {
  selectedMonth = selectMonth();
  selectedYear = selectYear();
  monthNum = new Date(Date.parse(selectedMonth + " 1," + selectedYear)).getMonth() + 1
  return new Date(selectedYear, monthNum, 0).getDate();
}

// Generate list of days by month
function generateDayList() {
  return Array.from({ length: daysInMonth() }, (_, i) => i + 1)
}