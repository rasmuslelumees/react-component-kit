import React from 'react';
import { render } from "react-dom";
import { UserCard } from "./lib";

const App = () => (
    <div style={{ width: 800, margin: '20px auto', fontFamily: 'sans-serif', color: '#222' }}>
        <h1>UI Kit</h1>
        <UserCard label="Email Address" placeholder="name@example.com" />
    </div>
);

render(<App />, document.getElementById("root"));
