'use strict';

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
        return React.createElement(
            'p',
            null,
            subtitle
        );
    }
};

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    getSubtitle(app.subtitle),
    app.options ? app.options.length >= 0 && React.createElement(
        'p',
        null,
        'Here are your options ',
        app.options
    ) : 'No options',
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item one'
        ),
        React.createElement(
            'li',
            null,
            'Item two'
        )
    )
);

var user = {
    name: 'Konstantin',
    age: 28,
    location: 'Brno'
};

function getLocation(location) {
    if (location) {
        return React.createElement(
            'p',
            null,
            'Location: ',
            location
        );
    }
};

// var userName = 'Konstantin';
// var userAge = 28;
// var userLocation = 'Brno';

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name ? user.name : 'No name'
    ),
    user.age && user.age >= 18 && React.createElement(
        'p',
        null,
        'Age: ',
        user.age
    ),
    getLocation(user.location)
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
// ReactDOM.render(templateTwo, appRoot);
