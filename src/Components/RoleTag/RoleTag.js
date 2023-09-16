import React from 'react';
import "./RoleTag.css";

export default function RoleTag({ roleName }) {
    return (
        <div className="role-tag">
            {roleName}
        </div>
    )
}
