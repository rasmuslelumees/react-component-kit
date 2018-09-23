import React from "react";
import "./UserCard.css";

const UserCard = ({ content = '' }) => (
    <div className='rui__user-card'>{content}</div>
);

export default UserCard;
