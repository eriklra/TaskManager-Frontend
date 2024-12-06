import React from 'react';

import '../styles/StatusMessage.css';

interface StatusMessageProps {
    message: string;
}



export const StatusMessage: React.FC<StatusMessageProps> = ({ message }) => {
    const isError = message.includes('Error');

    return (
        <div className={`status-message ${isError ? 'status-message-error' : 'status-message-success'}`}>
            {message}
        </div>
    );
};