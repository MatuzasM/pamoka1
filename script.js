const log = console.log
var currentTime = new Date().getFullYear()

// functions used to create a Form object
function generateArrayOfYears() {
  var max = currentTime
  var min = max - 30
  var years = []
  for (var i = max; i >= min; i--) {
    years.push(i)
  } return Array.from({ length: years.length }, (v, i) => ({ value: i, label: years[i] }));
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

// Data object for state/city
const stateByCity = {
  Texas: ['El Paso', 'Dallas'],
  Florida: ['Miami', 'Orlando'],
  Indiana: ['Indianapolis', 'Madison'],
  Nevada: ['Las Vegas', 'Virginia City']
}

function generateArrayOfCity() { //Object.values(stateByCity).flat();
  let city = ['El Paso', 'Dallas', 'Miami', 'Orlando', 'Indianapolis', 'Madison', 'Las Vegas', 'Virginia City'];
  return Array.from({ length: city.length }, (v, i) => ({ value: i, label: city[i] }));
}

function generateArrayOfState() { //Object.keys(stateByCity)
  let state = ['Texas', 'Florida', 'Indiana', 'Nevada'];
  return Array.from({ length: state.length }, (v, i) => ({ value: i, label: state[i] }));
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

function selectState() {

}

// eventListener functions
function selectMonth() {
  let selectedMonth = document.getElementById("month").value;
  selectedYearId = document.getElementById("year").value;
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
    //if (dataItem.value && dataItem.label) if statement removes first dataItem?
    option += "<option value=" + dataItem.value + ">" + dataItem.label + "</option>";
  }
  return option;
}
for (const formKey of Object.keys(form)) {
  const options = createOption(form[formKey]);
  document.getElementById(formKey).innerHTML = options;
}
