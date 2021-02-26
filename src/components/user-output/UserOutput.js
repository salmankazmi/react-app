import React from 'react';

const UserOutput = (props) => {
    return (
        <div>
            <p>Lorem Ipsum dolor {props.userName}</p>
        </div>
    );
};

export default UserOutput;