class VisibilityToggle extends React.Component {

    constructor(props) {
        super(props);
        this.handleVisibility = this.handleVisibility.bind(this);
        this.state = {
            visibility: false
        }
    }

    handleVisibility() {
        if (this.state.visibility === false) {
            this.setState({visibility: true});
            return (
                <p>Here are your options</p>
            );
        } else {
            this.setState({visibility: false});
        }
    }

    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleVisibility}> {this.state.visibility? "Hide Details": "Show Details"}</button>
                {this.state.visibility ? <p>Here are your options</p>: ""}
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));
