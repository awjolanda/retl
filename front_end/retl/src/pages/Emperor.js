// YourReactComponent.js

import React, { useEffect, useState } from 'react';
import { getRequestById, getAllRequests } from '../lib/api';

function YourReactComponent() {
    const [data, setData] = useState([]);
    const [selectedRequest, setSelectedRequest] = useState(null);

    useEffect(() => {
        // Fetch all requests when the component mounts
        fetchAllRequests();
    }, []);

    const fetchRequestById = async (id) => {
        try {
            const request = await getRequestById(id);
            setSelectedRequest(request);
        } catch (error) {
            console.error('Error fetching request by ID', error);
        }
    };

    const fetchAllRequests = async () => {
        try {
            const requests = await getAllRequests();
            setData(requests);
        } catch (error) {
            console.error('Error fetching all requests', error);
        }
    };

    return (
        <div>
            <h1>Data from MongoDB</h1>
            <button onClick={() => fetchAllRequests()}>Refresh</button>
            <ul>
                {data.map((item) => (
                    <li key={item._id} onClick={() => fetchRequestById(item._id)}>
                        {item.name}
                    </li>
                ))}
            </ul>
            {selectedRequest && (
                <div>
                    <h2>Selected Request</h2>
                    <p>ID: {selectedRequest._id}</p>
                    <p>Name: {selectedRequest.name}</p>
                    {/* Display other properties of the request as needed */}
                </div>
            )}
        </div>
    );
}

export default YourReactComponent;
