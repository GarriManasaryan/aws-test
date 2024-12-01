import React, { useState } from 'react'
import axiosConf from '../axiosConf';
import './style.css';

interface IProduct {
    name: string;
}

function MyButton() {

    const [name, setName] = useState('');
    const [allNames, setAllName] = useState<IProduct[]>([]);

    const onNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };

    const onClickSave = () => {
        axiosConf.post("/products", {"name":name})
    };

    const onClickGetAll = () => {
        console.log(process.env.REACT_APP_BASE_URL)
        axiosConf.get('/products')
        .then((response) => {
            setAllName(response.data)
            console.log(response.data)
        })
    };

    return (
        <div>
            <div style={{paddingTop: "15rem"}}></div>
            <input id="myText" type="text" onChange={(e) => onNameChange(e)}></input>
            <button onClick={() => onClickSave()}>send save from input</button>
            <div style={{paddingTop: "5rem"}}></div>
            <button onClick={() => onClickGetAll()}>get all</button>
            <div>
                <ul>
                    {allNames.map((i) => (
                        <li key={i.name}>{i.name}</li>
                    ))}
                </ul>
            </div>
            <div style={{paddingTop: "5rem"}}></div>
        </div>
    )
}

export default MyButton