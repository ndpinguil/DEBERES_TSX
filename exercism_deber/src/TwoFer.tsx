import React from 'react';

interface Props {
    name?: string;
}

const TwoFer: React.FC<Props> = ({ name = 'you' }) => {
    return (
    <div>
        <p>One for {name}, one for me.</p>
    </div>
    );
}

export default TwoFer;
