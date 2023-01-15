class IndecisionApp extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Action />
                <Options />
            </div>
        )
    };
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>Indecision App</h1>
                <h2>Put your life in the hands of a computer</h2>
            </div>
        )
    };
}

class Options extends React.Component {
    render() {
        return (
            <div>
                <Option />
                <Option />
            </div>
        )
    };
}

class Option extends React.Component {
    render() {
        return (
            <div>
                Option
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

class Action extends React.Component {
    render() {
        return (
            <div>
                <button>What should I do?</button>
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