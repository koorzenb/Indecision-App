console.log('app running');

const app = {
    title: 'Indecision App',
    subtitle: 'Put your hands in the life of a numbercruncher',
    options: ['One','Two']
}

const template = <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    {app.options.length > 0 && <p>Here are your options: </p>}
</div>;

let count = 0;
const addOne = () => {
    count++;
    renderCounterApp();
}
const minusOne = () => {
    count--;
    renderCounterApp();
    
}
const reset = () => {
    count = 0;
    renderCounterApp();
    console.log('reset');
}

var appRoot = document.getElementById('app');

const renderCounterApp = () => {
    const templateTwo = (
        <div>
           <h1> Count: {count}
     <button onClick={addOne}>+1</button>
     <button onClick={minusOne}>-1</button>
     <button onClick={reset}>reset</button>
           </h1>
        </div>
    );
    
    ReactDOM.render(templateTwo, appRoot);
}

renderCounterApp();
