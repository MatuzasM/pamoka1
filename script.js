const form = {
  month: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  day: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
  year: [2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021],
  gender: ['male', 'female', 'other'],
  course: ['java', 'javascript', 'ruby', 'php'],
  city: ['Kaunas', 'Vilnius', 'Klaipeda', 'Panevezys'],
  state: ['Jonava', 'Kedainiai', 'Garliava', 'Prienai', 'Vilkija', 'Raseiniai', 'Elektrenai', 'Salcininkai', 'Sirvintos', 'Trakai', 'Svencionys', 'Ukmerge', 'Neringa', 'Palanga', 'Kretinga', 'Skuodas', 'Silute', 'Pasvalys', 'Birzai', 'Kupiskis', 'Rokiskis']

}
// FIRST WAY: 
// Month
let months = form.month;
let monthObject = "";
let i;
for (let i = 0; i < months.length; i++) {
  monthObject += "<option>" + months[i] + "</option>";
}
document.getElementById("month").innerHTML = monthObject;

// Day
let days = form.day;
let dayObject = "";
let a;
for (let a = 0; a < days.length; a++) {
  dayObject += "<option>" + days[a] + "</option>";
}
document.getElementById("day").innerHTML = dayObject;

// 2ND WAY: Year, Gender, Courses
let years = form.year;
let yearObject = "";
for (let year of years) {
  yearObject += "<option>" + year + "</option>";
}
document.getElementById("year").innerHTML = yearObject;

// Gender
let genders = form.gender;
let genderObject = "";
for (let gender of genders) {
  genderObject += "<option>" + gender + "</option>";
}
document.getElementById("gender").innerHTML = '<option disabled hidden selected>Please Select</option><br>' + genderObject;

// Courses
let courses = form.course;
let courseObject = "";
for (let course of courses) {
  courseObject += "<option>" + course + "</option>";
}
document.getElementById("courses").innerHTML = '<option disabled hidden selected>Please Select</option><br>' + courseObject;


// Additional task

// City
let cities = form.city;
let cityObject = "";
for (let city of cities) {
  cityObject += "<option>" + city + "</option>";
}
document.getElementById("city").innerHTML = cityObject;

// State
let states = form.state;
let stateObject = "";
for (let state of states) {
  stateObject += "<option>" + state + "</option>";
}
document.getElementById("state").innerHTML = stateObject;


/* ------------DOESNT WORK------------
// states/city data (DB)
const states = ['Vilnius', 'Kaunas'];
const cities = new Map();
cities.set('Kaunas', ['Jonava', 'Garliava']);
cities.set('Vilnius', ['Svencionys', 'Elektrenai']);

// select box DOM objects
stateSelect = document.getElementById('state');
citySelect = document.getElementById('city');

// load states into state select box
let stateOptionHtml = '';
states.forEach((state) => {
  stateOptionHtml += '<option>' + state + '</option>';
});
stateSelect.innerHTML = stateOptionHtml;

stateSelect.onchange = (e) => {
  const lookedUpCities = cities.get(e.target.value); // get cities array with the selected state
  // load cities into city select box
  let cityOptionHtml = '';
  lookedUpCities.forEach((city) => {
    cityOptionHtml += '<option>' + city + '</option>';
  });
  citySelect.innerHTML = cityOptionHtml;
}; */
