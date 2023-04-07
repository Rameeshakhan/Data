import React, { useEffect, useState } from 'react'
import axios from "axios"

const Data = () => {

    const [data, setData] = useState([]);
    const [searchInput, setSearchInput] = useState('');
    // const [ isSearching , setIsSearching] = useState(false)
    const url = 'https://jsonplaceholder.typicode.com/posts'

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(url)
            setData(result.data);
        };
        fetchData();
    }, [url]);

    const filteredData = data.filter(item =>
        item.title.toLowerCase().includes(searchInput.toLowerCase())
    );


    return (
        <div className='container'>
            <div className="left-section">
                <h1> Left Section</h1>
                <div>

                    <label>Search</label><br/>
                    <input
                        type="text"
                        placeholder="Search..."
                        value={searchInput}
                        onChange={e => setSearchInput(e.target.value)}
                    /><br />
                    <label>Sort the Data</label> <br />
                    <button>Ascending Order</button><br />
                    <button>Descending Order</button><br />
                </div>
            </div>
            <div className='right-section'>
                <h1>Right Section</h1>
              
                {filteredData.map(item => (
                    <div className='info-card' key={item.id}>
                        <h2>{item.title}</h2>
                        <p>{item.body}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Data