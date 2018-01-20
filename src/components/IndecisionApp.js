import React from 'react';
import AddOption from './AddOption';
import Option from './Option.js';
import Options from './Options';
import Action from './Action';
import Header from './Header';
import OptionModal from './OptionModal';

class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.state = {
      options: props.options,
      selectedOption: false
    }
  }

  componentDidMount() {

    try {
      const json = localStorage.getItem('Options');
      const options = JSON.parse(json);
      if (options) {
        this.setState({ options: options });
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
    this.setState({ options: [] })
  }

  handlePick() {
    const option = Math.floor(Math.random() * this.state.options.length);
    this.setState({ selectedOption: this.state.options[option] });
  }

  handleCloseModal() {
    this.setState({ selectedOption: false });
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
        <Header subtitle={subtitle} />
        <div className="container">
          <Action hasOptions={this.state.options.length > 0} handlePick={this.handlePick} />
          <div className="widget">
            <Options options={this.state.options} handleDeleteOptions={this.handleDeleteOptions}
              handleDeleteOption={this.handleDeleteOption} />
            <AddOption handleAddOption={this.handleAddOption} />
            <OptionModal selectedOption={this.state.selectedOption} handleSelectedOption={this.handleCloseModal} />

          </div>

        </div>
      </div>
    );
  }
}

IndecisionApp.defaultProps = {
  options: []
}

export default IndecisionApp;