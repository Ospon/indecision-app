console.log("App is running");

// Babel
// babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch

// live-server public

// JSX - JavaScript XML

const appRoot = document.getElementById('app');

const app = {
    title: 'Indecision app',
    subtitle: 'This is some info',
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        renderOptionList();
    }
};

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
};

const resetAll = () => {
    app.options = [];
    renderOptionList();
};

const renderOptionList = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are yout options' : 'No options'}</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={resetAll}>Remove All</button>
            <ol>
                {
                    app.options.map((option) => <li key={option}>{option}</li>)          
                }
            </ol> 
            <form onSubmit={onFormSubmit}>
            <input type="text" name="option" />
            <button>Add Option</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot);
};

renderOptionList();



// ReactDOM.render(template, appRoot);
// ReactDOM.render(templateTwo, appRoot);