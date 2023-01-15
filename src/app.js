class IndecisionApp extends React.Component {
    render() {
        const title = 'Indecision App';
        const subtitle = 'Put your life in the hands of a computer';
        const options = ['One', "two", 'three'];

        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action />
                <Options options={options} />
                <AddOption />
            </div>
        )
    };
}

class Header extends React.Component {
    render() {

        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        )
    };
}


class Action extends React.Component {
    handlePick() {
        alert('handle');
    }
    render() {
        return (
            <div>
                <button onClick={this.handlePick}>What should I do?</button>
            </div>
        )
    }
}
class Options extends React.Component {
    handleRemoveAll() {
        alert('cleared')
    }
    render() {
        return (
            <div>
                <button onClick={this.handleRemoveAll}>Remove All</button>
                {
                    this.props.options.map((option) =>

                        <Option key={option} optionText={option} />

                    )
                }
            </div>
        )
    };
}

class Option extends React.Component {
    render() {
        return (
            <div>
                {this.props.optionText}
            </div>
        )
    };
}

class AddOption extends React.Component {
    handleAddOption(e) {
        e.preventDefault();

        const option = e.target.elements.option.value.trim();

        if (option) {
            // app.options.push(option);
            // e.target.elements.option.value = [];
        }
        alert(option);
    }
    render() {
        return (
            <div>Add Option
                <form onSubmit={this.handleAddOption} >
                    <input type='text' name='option' />
                    <button>Add Option</button>
                </form>
            </div >
        )
    }
}


const jsx = (
    <div>
        <Header />
        <Action />
    </div>
)


ReactDOM.render(<IndecisionApp />, document.getElementById('app'));