// const greeter = (name = 'Anon', age) => {
//     console.log(`Hello ${name}`);
// }

// greeter('Alex');

// greeter();

const transaction = (type, {label, stock = 0} = {}) => {
    console.log(type, label, stock);
}

transaction("order", );