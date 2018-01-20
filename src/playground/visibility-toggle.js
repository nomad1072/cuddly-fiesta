let visibility = false;
const toggleVisibility = () => {
    console.log("Visibility", visibility);
    visibility = !visibility;
    render();
}


const render = () => {
    const template = (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={toggleVisibility}>{visibility? "Hide Details":"Show Details"}</button>
                {visibility ? <p>"Here are your options"</p>: ""}
            </div>
    );


    ReactDOM.render(template, document.getElementById('app'));
}

render();
