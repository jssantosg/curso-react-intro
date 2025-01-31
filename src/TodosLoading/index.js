import React from 'react';
import './TodosLoading.css'

function TodosLoading() {
    return (
        <div className="todos-loading-container">
            <div className="todos-loading"></div>
            <p>Cargando tus todos...</p>
        </div>
    );
}

export { TodosLoading };