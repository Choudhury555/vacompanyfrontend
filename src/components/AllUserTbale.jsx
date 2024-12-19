import axios from 'axios';
import React, { useEffect, useState } from 'react';

const AllUserTable = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get('http://localhost:4000/api/v1/user/getalluser');
                setUsers(res.data.alluser);
                setLoading(false);
            } catch (error) {
                console.error(error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    
    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="overflow-x-auto">
            <table className="min-w-full table-auto">
                <thead>
                    <tr>
                        <th className="px-4 py-2 border">Employee ID</th>
                        <th className="px-4 py-2 border">First Name</th>
                        <th className="px-4 py-2 border">Last Name</th>
                        <th className="px-4 py-2 border">Phone</th>
                        <th className="px-4 py-2 border">Email</th>
                        <th className="px-4 py-2 border">Aadhaar</th>
                        <th className="px-4 py-2 border">Pan</th>
                        <th className="px-4 py-2 border">Bank</th>
                        <th className="px-4 py-2 border">IFSC</th>
                        <th className="px-4 py-2 border">Aadhaar Photo</th>
                        <th className="px-4 py-2 border">Pan Photo</th>
                        <th className="px-4 py-2 border">Bank Photo</th>
                        <th className="px-4 py-2 border">Created At</th>
                        <th className="px-4 py-2 border">Updated At</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user._id}>
                            <td className="px-4 py-2 border">{user.employeeId}</td>
                            <td className="px-4 py-2 border">{user.firstname}</td>
                            <td className="px-4 py-2 border">{user.lastname}</td>
                            <td className="px-4 py-2 border">{user.phone}</td>
                            <td className="px-4 py-2 border">{user.email}</td>
                            <td className="px-4 py-2 border">{user.aadhaar}</td>
                            <td className="px-4 py-2 border">{user.pan}</td>
                            <td className="px-4 py-2 border">{user.bank}</td>
                            <td className="px-4 py-2 border">{user.ifsc}</td>
                            <td className="px-4 py-2 border">
                                <a 
                                    href={user.aadhaarphoto} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-blue-500 hover:underline"
                                >
                                    View Aadhaar Photo
                                </a>
                            </td>
                            <td className="px-4 py-2 border">
                                <a 
                                    href={user.panphoto} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-blue-500 hover:underline"
                                >
                                    View Pan Photo
                                </a>
                            </td>
                            <td className="px-4 py-2 border">
                                <a 
                                    href={user.bankphoto} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-blue-500 hover:underline"
                                >
                                    View Bank Photo
                                </a>
                            </td>
                            <td className="px-4 py-2 border">{new Date(user.createdAt).toLocaleString()}</td>
                            <td className="px-4 py-2 border">{new Date(user.updatedAt).toLocaleString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AllUserTable;
