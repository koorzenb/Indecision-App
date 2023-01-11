console.log('app running');

const app = {
    title: 'Indecision App',
    subtitle: 'Put your hands in the life of a numbercruncher'
}

var template = <div>
<h1>{app.title}</h1>
<p>{app.subtitle}</p>
</div>;

const user = {
    userName: "Barend",
    userAge: '34',
    userLocation: 'Bellville'
}
const templateTwo = (
    <div>
        <h1>{user.userName}</h1>
        <p>Age: {user.userAge}</p>
        <p>Location: {user.userLocation}</p>
    </div>
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
