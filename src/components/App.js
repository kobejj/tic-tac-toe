import './App.css';
import LowerCenter from './LowerCenter';
import LowerLeft from './LowerLeft';
import LowerRight from './LowerRight';
import MiddleCenter from './MiddleCenter';
import MiddleLeft from './MiddleLeft';
import MiddleRight from './MiddleRight';
import UpperCenter from './UpperCenter';
import UpperLeft from './UpperLeft';
import UpperRight from './UppperRight';
import React, { useState } from 'react';

const App = () => {
    const [valueUL, setValueUL] = useState(null);
    const [valueUC, setValueUC] = useState(null);
    const [valueUR, setValueUR] = useState(null);
    const [valueML, setValueML] = useState(null);
    const [valueMC, setValueMC] = useState(null);
    const [valueMR, setValueMR] = useState(null);
    const [valueLL, setValueLL] = useState(null);
    const [valueLC, setValueLC] = useState(null);
    const [valueLR, setValueLR] = useState(null);


    const handleClickUL = () => {
        return setValueUL(['X'])
    }

    const handleClickUC = () => {
        return setValueUC(['X'])
    }

    const handleClickUR = () => {
        return setValueUR(['X'])
    }

    const handleClickML = () => {
        return setValueML(['X'])
    }

    const handleClickMC = () => {
        return setValueMC(['X'])
    }

    const handleClickMR = () => {
        return setValueMR(['X'])
    }

    const handleClickLL = () => {
        return setValueLL(['X'])
    }

    const handleClickLC = () => {
        return setValueLC(['X'])
    }

    const handleClickLR = () => {
        return setValueLR(['X'])
    }


    return (
        <div>
            <h4>App</h4>
            <table className="ui inverted table">
                <tbody>
                    <tr>                       
                        <td onClick={handleClickUL}>
                            <UpperLeft 
                                value={valueUL}
                            />
                        </td>
                        <td onClick={handleClickUC}>
                            <UpperCenter
                                value={valueUC}
                            />
                        </td>
                        <td onClick={handleClickUR}>
                            <UpperRight 
                                value={valueUR}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td onClick={handleClickML}>
                            <MiddleLeft 
                                value={valueML}
                            />
                        </td>
                        <td onClick={handleClickMC}>
                            <MiddleCenter 
                                value={valueMC}
                            />
                        </td>
                        <td onClick={handleClickMR}>
                            <MiddleRight 
                                value={valueMR}
                            />
                        </td>
                    </tr>
                                        <tr>
                        <td onClick={handleClickLL}>
                            <LowerLeft 
                                value={valueLL}
                            />
                        </td>
                        <td onClick={handleClickLC}>
                            <LowerCenter
                                value={valueLC}
                            />
                        </td>
                        <td onClick={handleClickLR}>
                            <LowerRight 
                                value={valueLR}
                            />
                        </td>
                    </tr>
                </tbody>
            </table>

        </div>
    )
}

export default App;