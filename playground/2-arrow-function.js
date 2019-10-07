// const square = function(x){
//     return x * x;
// }

// const square = (x) => {
//     return x * x;
// }

// const square = (x) => x * x;

// console.log(square(3));

const event = {
    name: "Bob",
    guestList: ['Alex', 'Jesus', 'Satan', 'Peepee'],
    printGuestList() {
        console.log(`Guestlist for ${this.name}`);
        this.guestList.forEach((guest) => {
            console.log(`${guest} is Attending Birthay Party for ${this.name}`);
        })
    }
}

event.printGuestList();

