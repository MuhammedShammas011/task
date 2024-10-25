import React, { useEffect, useState } from 'react';
import '../App.css';

const Fetch = () => {
    const [data, setData] = useState([]); 
    const [Body, setBody] = useState(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json()) 
            .then(data => setData(data)) 
            .catch(error => console.error("Error fetching posts:", error)); 
    }, []); 

    const handleBody = (id) => {
        setBody(Body === id ? null : id); 
    };

    return (
        <div>
            <h1>Title</h1>
            <div>
                {data.map((val) => (
                    <div key={val.id} className="card" onClick={() => handleBody(val.id)}>
                        <p><b>TITLE:</b> {val.title}</p>
                        {Body === val.id && ( 
                            <div>
                                <p className='displayBody'><b>BODY:</b> {val.body}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Fetch;
