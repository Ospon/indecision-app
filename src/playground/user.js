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

const appRoot = document.getElementById('app');
RreactDOM.render(templateTwo, app);