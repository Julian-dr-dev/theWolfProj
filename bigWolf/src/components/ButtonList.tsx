import React from 'react';


type ButtonListProps = {
    buttonLabels: string[];
    onButtonClick: (label: string) => void;
};

const ButtonList: React.FC<ButtonListProps> = ({ buttonLabels, onButtonClick }) => {
    return (
        <div className="buttonList-container">
            {buttonLabels.map((label, index) => (
                <button key={index} onClick={() => onButtonClick(label)}>
                    {label}
                </button>
            ))}
        </div>
    );
};

export default ButtonList;