import React from "react";
import { useUser } from "../context/UserContext";

export default function Profile() {
    const { user } = useUser();

    if (!user) {
        return <div className="container">Please log in to view your profile.</div>;
    }

    return (
        <div className="container">
            <h2>Profile</h2>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Name:</strong> {user.name}</p>
        </div>
    );
}
