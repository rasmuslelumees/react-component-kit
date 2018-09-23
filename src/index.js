import React from 'react';
import { render } from "react-dom";
import { UserCard } from "./lib";

const App = () => (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '20px', fontFamily: 'sans-serif', color: '#222' }}>
        <h1>UI Kit</h1>
        <p>Default UserCard component:</p>
        <div>
            <UserCard
                name='Rasmus Lelumees'
                avatarUrl='https://avatars0.githubusercontent.com/u/7032517?s=460&v=4'
                statusText='Online | 14h'
                statusColor='#5ad045'
            />
        </div>
        <p>Minified UserCard component:</p>
        <div style={{ maxWidth: 150 }}>
            <UserCard
                name='Rasmus Lelumees'
                avatarUrl='https://avatars0.githubusercontent.com/u/7032517?s=460&v=4'
                statusText='Online | 14h'
                statusColor='#5ad045'
            />
        </div>
        <p>Applied minimum width UserCard component:</p>
        <div style={{ maxWidth: 80 }}>
            <UserCard
                name='Rasmus Lelumees'
                avatarUrl='https://avatars0.githubusercontent.com/u/7032517?s=460&v=4'
                statusText='Online | 14h'
                statusColor='#5ad045'
            />
        </div>
    </div>
);

render(<App />, document.getElementById("root"));
