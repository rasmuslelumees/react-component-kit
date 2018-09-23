import React, { Component } from 'react';
import './UserCard.css';

const AVATAR_WIDTH_BREAKPOINT = 160;
const MAX_WIDTH = 180;
const MIN_WIDTH = 100;

class UserCard extends Component {

    constructor(props){
        super(props);
        this.mainRef = React.createRef();

        this.state = {
            containerWidth: undefined
        }

        this.updateDimensions = this.updateDimensions.bind(this);
        this.renderAvatar = this.renderAvatar.bind(this);
    }

    updateDimensions() {
        this.setState({ containerWidth: this.mainRef.current.parentNode.clientWidth });
    }

    componentDidMount() {
        window.addEventListener("resize", this.updateDimensions);
        this.updateDimensions();
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions);
    }

    renderAvatar() {
        const { avatarUrl, statusColor } = this.props;
        const { containerWidth } = this.state;

        const avatarStyle = {
            backgroundImage: `url(${avatarUrl})`
        };

        const statusStyle = {
            backgroundColor: `${statusColor}`
        };

        if (containerWidth < AVATAR_WIDTH_BREAKPOINT) {
            avatarStyle.backgroundImage = 'none';
            avatarStyle.backgroundColor = '#fff';
            avatarStyle.flex = '0 0 12px';
            statusStyle.position = 'relative';
            statusStyle.margin = '10px auto';
        }

        return (
            <div className='rui__user-card__avatar' style={avatarStyle}>
                <div className='rui__user-card__avatar-status' style={statusStyle}></div>
            </div>
        );
    }

    render() {
        const { name, statusText } = this.props;
        const { containerWidth } = this.state;

        const cardStyle = {
            width: containerWidth
        };

        if (containerWidth < MIN_WIDTH) cardStyle.width = MIN_WIDTH;
        if (containerWidth > MAX_WIDTH) cardStyle.width = MAX_WIDTH;

        return (
            <div className='rui__user-card' style={cardStyle} ref={this.mainRef}>
                { this.renderAvatar() }
                <div className='rui__user-card__info'>
                    <div className='rui__user-card__name'>{name}</div>
                    <div className='rui__user-card__status-text'>{statusText}</div>
                </div>
            </div>
        );
    }
}

export default UserCard;
