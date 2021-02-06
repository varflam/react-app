import React from 'react';

const PostAddForm = () => {
    return (
        <form className="d-flex bottom-panel">
            <input 
            type="text"
            placeholder="О чём вы сейчас думаете?"
            className="form-control new-post-label"
            />
            <button 
            className="btn btn-outline-secondary"
            type="submit">
                Добавить
            </button>
        </form>
    )
}

export default PostAddForm;