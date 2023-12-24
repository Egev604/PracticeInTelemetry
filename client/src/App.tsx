import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import React from "react";
import {fetchPlanets} from "./service/ServiceRequest";
import {Pagination} from "./Page/TableFooter";
import TableComponent from "./Page/TableComponent";
function  App() {
  return (
      <Router>
          <TableComponent fetchData={fetchPlanets}></TableComponent>
      </Router>
  );
}

export default App;
