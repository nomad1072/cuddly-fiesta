let count = 0;

function addCount() {
    count++;
    renderCounterApp();
}

function subCount() {
    count--;
    renderCounterApp();
}

function reset() {
    count = 0;
    renderCounterApp();
}
const renderCounterApp = () => {

    const templateTwo = (
        <div>
            <h1>Count: {count}</h1>
            <button id="my-id" className="my-button" onClick={addCount}>+1</button>
            <button onClick={subCount}>-1</button>
            <button onClick={reset}>Reset</button>
        </div>
    );

    ReactDOM.render(templateTwo, document.getElementById('app'));
}

renderCounterApp();
