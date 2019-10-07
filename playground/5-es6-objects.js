//Object property shorthand

const name = "Alex";
const age = 29;

const userage = {
    name,
    age,
    location: "Toronto"
}

console.log(userage);

//Object Destructuring

const product = {
    label: "Computer",
    price: 200000.00,
    stock: 3,
    salePrice: undefined,
    rating: 4.2   
}

// const label = product.label;
// const price = product.price;

// const {label:productLabel, stock, rating = 5} = product;

// console.log(productLabel);
// console.log(stock);
// console.log(rating);

const transaction = (type, {label, stock, price}) => {
    console.log(type, label, stock);
}

transaction('order', product);