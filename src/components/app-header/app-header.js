import React from 'react';

const AppHeader = ({liked, allPosts}) => {
    return (
        <div className="d-flex app-header">
            <h1>Maria Regnard</h1>
            <h2>{allPosts} записей, из них понравилось {liked}</h2>
        </div>
    )
}

export default AppHeader;