import React from 'react';

import Header from './Header';
import Action from './Action';
import Options from './Options';
import AddOption from './AddOption';
import OptionModal from './OptionsModal';

export default class IndecisionApp extends React.Component {
  handleOption = (this.state = {
    options: [],
    selectedOption: undefined,
  });

  handleDeleteOptions = () => {
    this.setState(() => ({ options: [] }));
  };

  handleDeleteOption = (optionToRemove) => {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => optionToRemove !== option),
    }));
  };

  handlePick = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    console.log(option);
    alert(option);
  };

  handleAddOption = (option) => {
    if (!option) {
      return 'Enter valid value';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'option already exists';
    }

    this.setState((prevState) => ({
      options: prevState.options.concat(option),
    }));
  };

  componentDidMount() {
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);

      if (options) {
        this.setState(() => ({ options }));
      }
    } catch (error) {
      // Do nothing
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      {
        const json = JSON.stringify(this.state.options);
        localStorage.setItem('options', json);
      }
    }
  }

  render() {
    const title = 'Indecision App';
    const subtitle = 'Put your life in the hands of a computer';
    const options = ['One', 'two', 'three'];

    return (
      <div>
        <Header subtitle={subtitle} />
        <Action
          handlePick={this.handlePick}
          hasOptions={this.state.options.length > 0}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption handleAddOption={this.handleAddOption} />
        <OptionModal selectedOption={this.state.selectedOption} />
      </div>
    );
  }
}
