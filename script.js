
const name = "Fedor"
const age = 33

const litle = {
 name,
 age,
 title: {
  tip: 'integer',
  solo: 'liga'
 }
}

console.log(litle.title.tip)

const user ={
  name: 'Fedor',
  age: function() {         // это метод 
    console.log('Privet')
  }
}
user.age()


const user = {
  name: 'Fedor',
  age () {                  //Опустили слово function и :
    console.log('Privet')
  }
}
user.age()

function myFn(a, b) {
  let c;
  a = a + 1;
  c = a + b;
  return c;
}

console.log(myFn(5, 10));

const a = 10;


  function innerFn() {
    console.log(a);
  }
  innerFn();

  const result = confirm('Are you here');
  console.log(result);

