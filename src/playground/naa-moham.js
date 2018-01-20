var app = {
    title: 'Hello 123',
    subtitle: 'abcd',
    options: ['a', 'b']
};

var user = {
    name: 'Siddharth',
    location: 'Bangalore',
    age: 21
};

function getLocation (location) {
    if (location) {
        return <p>Location: {location}</p>;
    }
}

var template1 = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        {app.options.length > 0 && <p>Here are your options {app.options}</p>}
    </div>

);

var template = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {getLocation(user.location)}
        {user.age >= 18 && <p>User is above 18</p>}
    </div>
);
