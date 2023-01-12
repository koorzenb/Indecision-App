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

const user = {
    name: "Barend",
    age: '3',
    location: 'Bellville'
}

function getLocation(location) {
    if(location) {
        return <p>Location: {location}</p>;
    } 
}

const templateTwo = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
