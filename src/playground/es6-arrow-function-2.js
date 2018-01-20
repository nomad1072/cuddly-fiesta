const add = (a, b) => {
    return a+b;
};

console.log(add(55, 1));

const user = {
    name: 'Andrew',
    cities: ['Philadelphia', 'New York', 'Dublin'],
    printPlacesLived() {

        const that = this;
        this.cities.forEach((item) => {
            console.log(that.name+ ' has lived in: '+ item);
        })
    }
};

user.printPlacesLived();

const multiplier = {
    numbers: [1,2,4,5],
    mulitplyBy: 2,
    multiply() {
        return this.numbers.map((num) => {
            return num * this.multiplyBy;
        })

        return arr;
    }
};

console.log(multiplier.multiply());
