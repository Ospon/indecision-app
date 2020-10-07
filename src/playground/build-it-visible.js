class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            title: 'Visibility Toggle',
            information: 'Some details',
            status: false
        }
    }

    handleToggleVisibility() {
        this.setState((prevState) =>{
            return {
                status: !prevState.status
            }
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.title}</h1>
                <button onClick={this.handleToggleVisibility}>{this.state.status ? 'Hide details' : 'Show details'}</button>
                {this.state.status && (
                    <p>{this.state.information}</p>
                )}
            </div>
        )
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));

/* const appRoot = document.getElementById('app');

const app = {
    title: 'Visibility Toggle',
    information: 'Some information to show up or nope?',
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
 */