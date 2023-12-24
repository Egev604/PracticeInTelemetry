import React from 'react';
import {Route, Routes, Navigate} from 'react-router-dom';
import CenteredTabs from "../Tabs/Tabs";
import TableComponent from "../Page/TableComponent";
import {fetchPost, fetchTodos} from "../service/ServiceRequest";

function ClientRouts() {
    return (
        <>
            <CenteredTabs></CenteredTabs>
            <Routes>
                <Route path="/Post*" Component={() => <TableComponent fetchData={fetchPost}/>}/>
                <Route path="/Todos*" Component={() => <TableComponent fetchData={fetchTodos}/>}/>
            </Routes>
        </>
    );
}

export default ClientRouts;