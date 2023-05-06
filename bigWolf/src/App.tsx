
//import ListGroup from "./components/ListGroup";
//import Alert from "./components/Alert";

import React from 'react';
import ButtonList from './components/ButtonList';
import ChatBox from "./components/ChatBox";
import './App.css'


const App: React.FC = () => {
    const buttonLabels = ['Button 1', 'Button 2', 'Button 3', 'Button 4'];


    const handleButtonClick = (label: string) => {
        console.log(`Button "${label}" was clicked`);
    };
    return (


        <div>
            <h1>Topics</h1>
            <ButtonList buttonLabels={buttonLabels} onButtonClick={handleButtonClick}/>
        </div>


    )

}






export default App;


