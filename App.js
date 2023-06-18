import React from 'react';
import ReactDOM from 'react-dom/client';

const header = React.createElement("div", { id: "parent" }, [
    React.createElement("div", { id: "child 1" }, [
        React.createElement("h1", {}, "hello 1"),
        React.createElement("h1", {}, "hello 2")
    ]),
    React.createElement("div", { id: "child 2" }, [
        React.createElement("h1", {}, "hello 1"),
        React.createElement("h1", {}, "hello 2")
    ]),
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(header);