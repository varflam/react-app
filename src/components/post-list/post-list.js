import React from 'react';

import PostListItem from '../post-list-item/post-list-item'

const PostList = ({posts, onDelete, onToggleImportant, onToggleLiked}) => {

    const elements = posts.map((item) => {

        if (typeof item === 'object' && isEmpty(item)) { 
            const {id, ...itemProps} = item;
            return (
                <li key = {id} className='list-group-item'>
                    <PostListItem 
                    {...itemProps}
                    onDelete = {() => onDelete(id)}
                    onToggleLiked = {() => onToggleLiked(id)}
                    onToggleImportant = {() => onToggleImportant(id)}/>
                </li>
            )
        }
    });

    function isEmpty(obj) {
        for (let keys in obj) {
            return true;
        } 
        return false;
    }

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default PostList;