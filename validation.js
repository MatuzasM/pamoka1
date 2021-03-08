// validation 
const inputs = document.querySelectorAll("#email, #number")

const patterns = {
  number: /^\+?(370)[ ]?(\d{3})[ ]?(\d{5})$/g,
  //  + or nothing, international code 370, gap or not, 3 numbers, gap or not, 5 numbers
  email: /^([a-z\d\.-]+)@([a-z\d\-]+)\.([a-z]{2,8})$/g
  // a-z, numbers, dot, hyphen, minumum 1 symbol
  // a-z, numbers, hyphen, minumum 1 symbol
  // a-z, 2 to 8 length
};

// add valid or unvalid class for id's
function validate(field, regex) {
  if (regex.test(field.value)) {
    field.className = 'valid';
  } else {
    field.className = 'invalid';
  }
}

// eventListener cycle
inputs.forEach((input) => {
  input.addEventListener("keyup", (e) => {
    validate(e.target, patterns[e.target.attributes.id.value])
  });
});
