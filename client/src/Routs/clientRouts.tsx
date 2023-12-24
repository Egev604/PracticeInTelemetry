import React from 'react';
import {Route, Routes} from 'react-router-dom';
function ClientRouts() {
    return (
        <Routes>
            <Route path="/planets"/>
            <Route path="/starships"/>
        </Routes>
    );
}

export default ClientRouts;