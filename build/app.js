
console.log('app.js is running');

var arr=['Name', 'Place', 'Animal', 'Thing'];

var narr = arr.map(function (item, index) {
    return (
        React.createElement("div", null, 
            React.createElement("span", null, "Sai from the outer world"), 
            React.createElement("span", null, "Siddharth Lanka ", item, ", ", index+1)
        )
    );
});

ReactDOM.render(narr, document.getElementById('app'));

console.log(narr);
