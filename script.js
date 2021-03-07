const log = console.log
var currentTime = new Date().getFullYear()

// functions used to create a Form object
function generateArrayOfYears(length = 0) {
  var max = new Date().getFullYear()
  var min = max - 30
  var years = []
  for (var i = max; i >= min; i--) {
    years.push(i)
  }
  return Array.from({ length: years.length - 1 }, (v, i) => ({ value: i, label: years[i] }));
}
function generateArrayOfDays(year = currentTime, month = 1) {
  days = new Date(year, month, 0).getDate();
  return Array.from({ length: days }, (v, i) => ({ value: i + 1, label: i + 1 }));
}
function generateArrayOfMonths() {
  let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  return Array.from({ length: months.length }, (v, i) => ({ value: i + 1, label: months[i] }));
}
function generateArrayOfGenders() {
  let genders = ['male', 'female', 'other'];
  return Array.from({ length: genders.length }, (v, i) => ({ value: genders[i], label: genders[i] }));
}
function generateArrayOfCourses() {
  let courses = ['java', 'javascript', 'ruby', 'php']
  return Array.from({ length: courses.length }, (v, i) => ({ value: courses[i], label: courses[i] }));
}
function generateArrayOfCity() {
  let city = ['Kaunas', 'Vilnius', 'Klaipeda', 'Panevezys'];
  return Array.from({ length: city.length }, (v, i) => ({ value: city[i], label: city[i] }));
}
function generateArrayOfState() {
  let state = ['Jonava', 'Kedainiai', 'Garliava', 'Prienai', 'Vilkija', 'Raseiniai'];
  return Array.from({ length: state.length }, (v, i) => ({ value: state[i], label: state[i] }));
}

// Data object
const form = {
  month: generateArrayOfMonths(),
  day: generateArrayOfDays(),
  year: generateArrayOfYears(),
  gender: generateArrayOfGenders(),
  courses: generateArrayOfCourses(),
  city: generateArrayOfCity(),
  state: generateArrayOfState()
}

// eventListener functions
function selectMonth() {
  var selectedMonth = document.getElementById("month").value;
  var selectedYearId = document.getElementById("year").value;
  selectedYear = form.year[selectedYearId].label
  form.day = generateArrayOfDays(selectedYear, selectedMonth);
  const options = createOption(form.day);
  document.getElementById('day').innerHTML = options;
}

function selectYear() {
  form.month = generateArrayOfMonths();
  const options = createOption(form.month);
  document.getElementById('month').innerHTML = options;
  selectMonth();
}

// Create option elements
function createOption(dataList) {
  let option = "";
  for (let dataItem of dataList) {
    if (dataItem?.value && dataItem.label) {
      option += "<option value=" + dataItem.value + ">" + dataItem.label + "</option>";
    }
  }
  return option;
}
for (const formKey of Object.keys(form)) {
  const options = createOption(form[formKey]);
  document.getElementById(formKey).innerHTML = options;
}


document.getElementById('phone')