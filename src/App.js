import React from 'react';
import './App.css';
// import { AddTicketForm } from './components/add-ticket-form/AddTicketForm.comp';
import { DefaultLayout } from './layout/DefaultLayout';
// import { TicketLists } from './pages/ticket-list/TicketLists.page';
// import { Dashboard } from './pages/dashboard/Dashboard.page';
import {Ticket} from "./pages/ticket/Ticket.page";


// import { Button } from 'react-bootstrap';//
// import { Entry } from './pages/entry/Entry.page';



function App() {
  return (
    <div className="App">
     {/* <Entry /> */}
     <DefaultLayout>
       {/* <Dashboard/> */}
       {/* <AddTicketForm /> */}
       {/* <TicketLists /> */}
       <Ticket/>
      </DefaultLayout>
    </div>
  );
}

export default App;
