import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { updateUserRole } from '../utils/updateUserRole';

const AdminPanel = () => {
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const usersFromStorage = JSON.parse(localStorage.getItem('users')) || [];
        setUsers(usersFromStorage);
    }, []);

    const handleClick = () => {
        navigate('/explore');
    }

    const handleRoleChange = (email, newRole) => {
        updateUserRole(email, newRole);
        const updatedUsers = users.map((user) =>
            user.email === email ? { ...user, role: newRole } : user
        );
        setUsers(updatedUsers);
    };

    return (
        <div>
            <h1>Admin Panel</h1>
            <table>
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.email}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.role}</td>
                            <td>
                                <select
                                    value={user.role}
                                    onChange={(e) =>
                                        handleRoleChange(user.email, e.target.value)
                                    }
                                >
                                    <option value="user">User</option>
                                    <option value="admin">Admin</option>
                                    <option value="moderator">Moderator</option>
                                </select>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div>
                <a onClick={handleClick}>Explore</a>
            </div>
        </div>
    );
};

export default AdminPanel;
