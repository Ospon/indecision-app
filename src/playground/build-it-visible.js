const appRoot = document.getElementById('app');

const app = {
    title: 'Visibility Toggle',
    information: 'Some information to show up',
    status: false
}

const detailsToggle = (e) => {
    e.preventDefault();
    app.status = !app.status;

    appRender();
};

const appRender = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            <button onClick={detailsToggle}>{app.status ? 'Hide details' : 'Show details'}</button>
            {app.status && (
                <div>
                    <p>{app.information}</p>
                </div>
            )}
        </div>
    );  
    ReactDOM.render(template, appRoot);
};

appRender();
