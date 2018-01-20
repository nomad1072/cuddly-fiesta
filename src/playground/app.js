// const obj = {
//     name: 'Vikram',
//     getName() {
//         return this.name;
//     }
// };
// const getName = obj.getName.bind({name: 'Siddharth Lankavi'});
// console.log(getName());

class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
           options: props.options
        }
    }

    componentDidMount() {

        try {
            const json = localStorage.getItem('Options');
            const options = JSON.parse(json);
            if (options) {
                this.setState({options: options});
            }
        } catch (e) {
            console.log(e);
        }


        console.log('Fetching Data');
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('Options', json);
            console.log('saving data');
        }

    }

    componentWillUnmount() {
        console.log('Component will unmount');
    }

    handleDeleteOptions() {
        this.setState({options: []})
    }

    handlePick() {
        const option = Math.floor(Math.random()*this.state.options.length);
        alert(this.state.options[option]);
    }

    handleAddOption(option) {
        if (!option) {
            return 'Enter valid Value, fuck off';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'Option Already exists';
        }
        this.setState((prevState) => {
            return {
                options: prevState.options.concat([option])
            };
        });
    }

    handleDeleteOption(option) {
        this.setState((prevState) => {
            return {
                options: prevState.options.filter((item) => {
                    return (item !== option);
                })
            }
        });
    }

    render() {
        const title = 'Indecision';
        const subtitle = 'Put your life in the hands of a Computer';
        return (
            <div>
                <Header subtitle={subtitle}/>
                <Action hasOptions={this.state.options.length > 0} handlePick={this.handlePick}/>
                <Options options={this.state.options} handleDeleteOptions={this.handleDeleteOptions}
                handleDeleteOption={this.handleDeleteOption}/>
                <AddOption handleAddOption={this.handleAddOption}/>
            </div>
        );
    }
}

IndecisionApp.defaultProps = {
    options: []
}

const Header = (props) =>  {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    );
};

Header.defaultProps = {
    title: 'Indecision!',
    subtitle: 'Subtitle is on'
};

const Action = (props) => {
    return (
        <div>
            <button onClick={props.handlePick} disabled={!props.hasOptions}>What should I do?</button>
        </div>
    );
};

const Options = (props) => {
    return (
        <div>
            {props.options.length < 1 && <p>Add Some Options</p> }
            <button onClick={props.handleDeleteOptions}>Remove All</button>
            {props.options.map((option, index) => {
                return <Option key={option} optionText={option} handleDeleteOption={props.handleDeleteOption}>{option}</Option>
            } )}
        </div>
    );
};

const Option = (props) => {
    return (
        <div>
            {props.optionText}
            <button onClick={(e) => {
                props.handleDeleteOption(props.optionText);
            }}>Remove</button>
        </div>
    );
};

class AddOption extends React.Component {

    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        }
    }

    handleAddOption(e) {
        e.preventDefault();

        const option = e.target.elements.option.value.trim();
        e.target.elements.option.value = '';
        const error = this.props.handleAddOption(option);
        this.setState(() => {
            return {
                error: error
            };
        });
    }

    render() {
        return (
            <div>
                {this.state.error && <p> {this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"/>
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp /> , document.getElementById('app'));
