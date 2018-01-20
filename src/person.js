console.log('Person.js is running');

export const isAdult = (age) => {
    if (age >= 18) {
        return 'true';
    } else {
        return 'false';
    }
};

export const canDrink = (age) => {
    if (age >= 21) {
        return 'true';
    } else {
        return 'false';
    }
};

const subtract = (a, b) => {
    return a-b;
};

export default subtract;

//export {subtract as default}
