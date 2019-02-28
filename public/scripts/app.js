'use strict';

console.log("App is running");

// Babel
// babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch

// live-server public

// JSX - JavaScript XML

var appRoot = document.getElementById('app');

var app = {
    title: 'Indecision app',
    subtitle: 'This is some info',
    options: []
};

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();

    var option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        renderOptionList();
    }
};

var resetAll = function resetAll() {
    app.options = [];
    renderOptionList();
};

var renderOptionList = function renderOptionList() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            app.title
        ),
        app.subtitle && React.createElement(
            'p',
            null,
            app.subtitle
        ),
        React.createElement(
            'p',
            null,
            app.options.length > 0 ? 'Here are yout options' : 'No options'
        ),
        React.createElement(
            'p',
            null,
            app.options.length
        ),
        React.createElement(
            'button',
            { onClick: resetAll },
            'Remove All'
        ),
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
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                null,
                'Add Option'
            )
        )
    );
    ReactDOM.render(template, appRoot);
};

renderOptionList();

// ReactDOM.render(template, appRoot);
// ReactDOM.render(templateTwo, appRoot);
