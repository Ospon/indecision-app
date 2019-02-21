console.log("App is running");

// Babel
// babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch

// live-server public

// JSX - JavaScript XML

var app = {
    title: 'Indecision app',
    subtitle: 'This is some info',
    options: ['One', ' Two']
};

function getSubtitle(subtitle) {
    if (subtitle) {
        return <p>{subtitle}</p>
    }
};

var template = (
    <div>
        <h1>{app.title}</h1>
        {getSubtitle(app.subtitle)}
        {app.options ? (app.options.length >= 0 && <p>Here are your options {app.options}</p>) : 'No options'}
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
);

var user = {
    name: 'Konstantin',
    age: 28,
    location: 'Brno'
};

function getLocation(location) {
    if (location) {
        return <p>Location: {location}</p>;
    } 
};

// var userName = 'Konstantin';
// var userAge = 28;
// var userLocation = 'Brno';

var templateTwo = (
    <div>
        <h1>{user.name ? user.name : 'No name'}</h1>
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
);


var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
// ReactDOM.render(templateTwo, appRoot);