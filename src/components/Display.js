import React, { useEffect, useState } from 'react';
import '../App.css'

const Fetch = () => {
    const [data, setData] = useState([]); 
    const [Body, setBody] = useState('');

    useEffect(() => {

        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json()) 
            .then(data => setData(data)) 
            .catch(error => console.error("Error fetching posts:", error)); 
    }, []); 

    const handleBody = (body) => {
        setBody(body); 
    };

    return (
        <div>
            <h1> Title</h1>
            <ul>
                {data.map(val => (
                    <li key={val.id} onClick={() => handleBody(val.body)}>
                        {val.title} 
                    </li>
                
                ))}
                      {Body && (
                        <div>
                            <h2>Body</h2>
                            <p className='displayBody'>{Body}</p>
                        </div>
                    )}
            </ul>
          
        </div>
    );
};

export default Fetch;
