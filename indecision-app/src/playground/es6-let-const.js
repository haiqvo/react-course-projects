var nameVar = 'Andrew';
nameVar = 'Mike';
console.log('nameVar', nameVar);

let nameLet = 'Jen';
nameLet = 'Julie'
console.log('nameLet', nameLet)

const nameConst = 'Frank';
console.log('nameConst', nameConst)

function getPetName() {
    var petName = 'Hal'
    return petName
}

const petName = getPetName()
console.log(petName)

var fullName = 'Jen Mead'
if (fullName) {
    var firstName = fullName.split(' ')[0];
    console.log(firstName);
}