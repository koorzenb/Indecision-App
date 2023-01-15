console.log('app running');

const app = {
    title: 'Indecision App',
    subtitle: 'Put your hands in the life of a numbercruncher',
    options: []
}

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;
    console.log(e.target.elements);
    if (option) {
        app.options.push(option);
        e.target.elements.option.value = [];
        renderApp();
    }
};

const onRemoveAll = () => {
    app.options = [];
    renderApp()
};

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    console.log(randomNum);
    const option = app.options[randomNum];
    alert(option)
}

const numbers = [34, 65, 756];

const renderApp = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options:' : 'No options'} </p>
            <p>{app.options.length}</p>
            <button disabled={app.options.length == 0} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={onRemoveAll}>Remove All</button>

            <ol>
                {
                    app.options.map(option => {
                        return <li key={option}>Option: {option}</li>
                    })
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type='text' name='option' />
                <button>Add Option</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot);
};

var appRoot = document.getElementById('app');


renderApp();