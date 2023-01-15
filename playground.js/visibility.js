class IndecisionApp extends React.Component {

    visibility() {
        this.setState((prevState) => {
            return { visibility: !prevState.visibility };

        })
    }
    constructor(props) {
        super(props);
        this.visibilityHandler = this.visibility.bind(this);
        this.state = {
            visibility: false
        };
    }

    render() {
        const title = 'Indecision App';

        return (
            <div>
                <h1>Visibility</h1>
                <button onClick={this.visibilityHandler}>{this.state.visibility ? 'Hide' : 'Show'}</button>
                {this.state.visibility && <p>Gotcha!</p>}
            </div>
        )
    };
}


ReactDOM.render(<IndecisionApp />, document.getElementById('app'));