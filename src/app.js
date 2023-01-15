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
    render() {
        return (
            <div>
                <button>What should I do?</button>
            </div>
        )
    }
}
class Options extends React.Component {
    render() {
        return (
            <div>
                {this.props.options.length}
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
        console.log(this.props);
        return (
            <div>
                {this.props.optionText}
            </div>
        )
    };
}

class AddOption extends React.Component {
    render() {
        return (
            <div>Add Options
            </div>
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