class Header extends React.Component {
    render() {
        return (
             <h1>Indecision App</h1>
             <h2>Put your life in the hands of a computer</h2>
        )
    }
}

class Options extends React.Component {
    render() {
        return (
            <div>
                Options
            </div>
        )
    }
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
        <h1>Title</h1>
        <Header />
        <Action />
    </div>
)


ReactDOM.render(jsx, document.getElementById('app'));