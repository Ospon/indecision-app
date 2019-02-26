console.log("App is running");

// Babel
// babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch

// live-server public

// JSX - JavaScript XML

const app = {
    title: 'Indecision app',
    subtitle: 'This is some info',
    options: ['One', ' Two']
};

const template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? 'Here are yout options' : 'No options'}</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
);

const user = {
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

const templateTwo = (
    <div>
        <h1>{user.name ? user.name : 'No name'}</h1>
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
);

// Creating counter

let count = 0;

const addOne = () => {
    count++; 
    renderCounterApp();
};
const minusOne = () => {
    count--;
    renderCounterApp();
}
const reset = () => {
    count = 0;
    renderCounterApp();
}




const appRoot = document.getElementById('app');

// ReactDOM.render(template, appRoot);
// ReactDOM.render(templateTwo, appRoot);

const renderCounterApp = () => {
    const templateThree = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>Reset</button>
        </div>
    );

    ReactDOM.render(templateThree, appRoot);
};

renderCounterApp();
