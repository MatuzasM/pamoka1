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
  month = document.getElementById("month").value;
  return month
}
// Get year from select element
function selectYear() {
  year = document.getElementById("year").value;
  return year
}

// Generate number of days by month and year
function daysInMonth(month, year) {
  month = selectMonth();
  year = selectYear();
  monthNum = new Date(Date.parse(month + " 1," + year)).getMonth() + 1
  return new Date(year, monthNum, 0).getDate();
}

// Generate list of days by month
function generateDayList() {
  return Array.from({ length: daysInMonth(month, year) }, (_, i) => i + 1)
}

const form = {
  month: generateArrayOfMonths(),
  day: generateDayList(),
  year: generateArrayOfYears(),
  gender: ['male', 'female', 'other'],
  courses: ['java', 'javascript', 'ruby', 'php'],
  city: ['Kaunas', 'Vilnius', 'Klaipeda', 'Panevezys'],
  state: ['Jonava', 'Kedainiai', 'Garliava', 'Prienai', 'Vilkija', 'Raseiniai', 'Elektrenai', 'Salcininkai', 'Sirvintos', 'Trakai', 'Svencionys', 'Ukmerge', 'Neringa', 'Palanga', 'Kretinga', 'Skuodas', 'Silute', 'Pasvalys', 'Birzai', 'Kupiskis', 'Rokiskis']
}


// Create option elements
function createOption(dataList) {
  let option = "";
  for (let dataItem of dataList) {
    option += "<option>" + dataItem + "</option>";
  }
  return option;
}
for (const formKey of Object.keys(form)) {
  const options = createOption(form[formKey]);
  document.getElementById(formKey).innerHTML = options;
}
