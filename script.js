/* // Get month from select element
function selectMonth() {
  return document.getElementById("month").value;
}
// Get year from select element
function selectYear() {
  return document.getElementById("year").value;
}
 */
var currentTime = new Date()

// static variable function
function numberOfDays(month = 2, year = currentTime.getFullYear()) {
  days = new Date(year, month, 0).getDate();
  return Array.from({ length: days }, (v, i) => ({ value: i + 1, label: i + 1 }));
}
function monthArray(year = currentTime.getFullYear()) {

}



const form = {
  //month: generateArrayOfMonths(),
  //day: generateDayList(),
  //year: generateArrayOfYears(),
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
