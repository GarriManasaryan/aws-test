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
        axiosConf.post("/api/products", {"name":name})
    };

    const onClickGetAll = () => {
        try {
            axiosConf.get('/api/products')
            .then((response) => {
                setAllName(response.data)
                console.log(response.data)
            })
        } catch (error) {
            console.log(error)
        }
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
            <button className='icon'>color-test</button>
        </div>
    )
}

export default MyButton