"Create React Component": {
    "prefix": "comp",
        "body": [
            "class $1 extends React.Component {",
            " render() {",
            "  return (",
            "   <div>",
            "    $2",
            "   </div>",
            "  )",
            " };",
            "}"
        ],
            "description": "Create React Component"
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
        <Header />
        <Action />
    </div>
)


ReactDOM.render(jsx, document.getElementById('app'));