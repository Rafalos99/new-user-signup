//Forming regular expressions scripts 

// Two different ways to make regular expressions shown below. First way is better
//1
//       var reg = /[a-z]/ig;
//2
//       var reg2 = new RegExp(/[a-z]/, 'i')


// making my const inputs here
const inputs = document.querySelectorAll('input');



//pattern regex here

const patterns = {
    telephone: /^\d{11}$/,
    username: /^[a-z\d]{5,12}$/i,
    password: /^[\w@-]{8,20}$/,
    slug: /^[a-z\d-]{8,20}$/,
    email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/

};

//creating validation function. Made up 'validate'
function validate(field, regex) {
    if (regex.test(field.value)) {
        field.className = 'valid';
    } else {
        field.className = 'invalid';
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', (e) => {
        // console.log(e.target.attribute.name.value);
        validate(e.target,patterns[e.target.attributes.name.value])
    })
})

