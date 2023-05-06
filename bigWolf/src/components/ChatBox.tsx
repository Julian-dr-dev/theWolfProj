import React from 'react';



interface Message {
    text: string;
    isFromUser: boolean;

}
interface Button {
    text: string;
    onClick: () => void;
}
interface ChatBoxProps {
    messages: Message[];
    buttons: Button[];
    onSendMessage: (text: string) => void;
}

const ChatBox: React.FC<ChatBoxProps> = ({ messages, buttons, onSendMessage }) => {
    const [text, setText] = React.useState("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSendMessage(text);
        setText("");
    };

    const handleButtonClick= (onClick: () => void) => {
        onClick();
    }

    return (
        <div className="chat-box">
            <div className="message-container">
                {messages.map((message, index) => (
                    <div
                        key={index}
                        className={`message ${message.isFromUser ? "from-user" : ""}`}
                    >
                        {message.text}
                    </div>
                ))}
            </div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                <button type="submit">Send</button>
            </form>
            <div className="button-container">
                {buttons.map((button, index) => (
                    <button key={index} onClick={() => handleButtonClick(button.onClick)}>
                        {button.text}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default ChatBox;






