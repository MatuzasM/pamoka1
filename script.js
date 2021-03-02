// Get month from select element
function selectMonth() {
  return document.getElementById("month").value;
}
// Get year from select element
function selectYear() {
  return document.getElementById("year").value;
}

var currentTime = new Date().getFullYear()

function generateArrayOfYears(length = 0) {
  var max = new Date().getFullYear()
  var min = max - 30
  var years = []
  for (var i = max; i >= min; i--) {
    years.push(i)
  }
  return Array.from({ length: years.length - 1 }, (v, i) => ({ value: i, label: years[i] }));
}

// Get month from select element
function selectMonth() {
  return document.getElementById("month").value;
}
// Get year from select element
function selectYear() {
  return document.getElementById("year").value;
}

function generateArrayOfDays(month = 2, year = currentTime) {
  days = new Date(year, month, 0).getDate();
  return Array.from({ length: days }, (v, i) => ({ value: i, label: i + 1 }));
}

function generateArrayOfMonths() {
  let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  return Array.from({ length: months.length }, (v, i) => ({ value: i, label: months[i] }));
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

const form = {
  month: generateArrayOfMonths(),
  day: generateArrayOfDays(),
  year: generateArrayOfYears(),
  gender: generateArrayOfGenders(),
  courses: generateArrayOfCourses(),
  city: generateArrayOfCity(),
  state: generateArrayOfState()
}

// Create option elements
function createOption(dataList) {
  let option = "";
  console.log(dataList)
  for (let dataItem of Object.keys(dataList)) {
    option += "<option>" + dataItem + "</option>";
  }
  return option;
}
for (const formKey of Object.keys(form)) {
  const options = createOption(form[formKey]);
  document.getElementById(formKey).innerHTML = options;
}

