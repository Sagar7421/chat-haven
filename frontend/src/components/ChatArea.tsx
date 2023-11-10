import React from 'react';

interface ChatAreaProps {
  user: any; // Define your User type
}

const ChatArea: React.FC<ChatAreaProps> = ({ user }) => {
  return (
    <div className="container">

          <div className="card">
            <h2> This is chat area </h2>
            {/* Your chat area content for the selected user */}
      </div>
    </div>
  );
};

export default ChatArea;



