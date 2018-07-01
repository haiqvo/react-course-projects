'use strict';

console.log('App.js is running');

var app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: ['One', 'Two']
};

// JSX - JavaScipt XML
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
        app.options.length > 0 ? 'Here are your options' : 'No options'
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item one '
        ),
        React.createElement(
            'li',
            null,
            'Item two '
        )
    )
);

var count = 0;
var addOne = function addOne() {
    return count++;
};
var minusOne = function minusOne() {
    return console.log("minusOne");
};
var reset = function reset() {
    return console.log("reset");
};
var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        ' Count: ',
        count,
        ' '
    ),
    React.createElement(
        'button',
        { onClick: addOne },
        ' +1 '
    ),
    React.createElement(
        'button',
        { onClick: minusOne },
        ' -1 '
    ),
    React.createElement(
        'button',
        { onClick: reset },
        ' reset '
    )
);
console.log(templateTwo);
var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
