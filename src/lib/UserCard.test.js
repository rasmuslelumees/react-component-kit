import React from 'react';
import ReactDOM from 'react-dom';
import UserCard from './UserCard';

describe('UserCard component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<UserCard />, div);
    });
});
