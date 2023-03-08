import React from 'react';

//COMPONENTS
import Login from './components/Login/Login';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Boolean from './components/Boolean';


//ROUTING
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default class Router extends React.Component {
    
    render() {
        return (
            <div className="router">

                <Login />
                {/* <BrowserRouter>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Login />} />
                    </Routes>
                    <Footer />
                </BrowserRouter> */}
            </div>
        )
}
}


/* ********ROUTER COMPONENT FROM REAL PROJECT******** */

// //routing
// import { BrowserRouter, Route, Routes } from 'react-router-dom';

// //useEffect
// import { useEffect } from 'react';

// //useLocation
// import { useLocation } from 'react-router-dom';

// //local components
// import InvoicesListPage from './Components/Invoices/InvoicesList/InvoicesListPage/InvoicesListPage';
// import AccountsListPage from './Components/Accounts/AccountsList/AccountsListPage';
// import Account from './Components/Accounts/AccountView/Account';
// import TrackersListPage from './Components/Trackers/TrackersList/TrackersListPage';
// import Login from './Components/Login/Login';
// // import Tools from './Tools/Services';
// import Services from './Tools/Services';
// import { Navigate } from 'react-router-dom';
// import Navbar from './Components/Navigation/Navbar/Navbar';
// import Sidenav from './Components/Navigation/Sidenav/Sidenav';
// import Backoffice from './Components/BackOffice';

// //useState
// import { useState } from 'react';


// const Router = () => {
//  // const [redirect, setRedirect] = useState(false);


//   //Test with useLocation to avoid rendering navbar and sidebar when showing login route:
//   // const {pathname} = useLocation();

//   // const isLoginPath = pathname === "/";
//   // working on renderization of the login page without any other components, no nav or footer, etc

//   // useEffect(() => {
//   //   // setTimeout(() => {
//   //    getToken();
//   //   // },2000);
//   // },);

//   // const getToken = () => {
//   //   // Check if there is a token 
//   //   let token = Services.getToken();
//   //   if (token !== null)
//   //       return;

//   //   // If there is no token, Logout
//   //   logOut();
//   // }

//   // const logOut = (e) => {
// 	// 	// Remove every token that could be there
//   //       Services.clearToken();

// 	// 	// Redirect to Login
//   //       setRedirect(true);
// 	// }

//     return ( 
//     <div className="router">
//         {/* {redirect && <Navigate to='/' />} */}

//         <BrowserRouter>
//           <Routes>
//             <Route path="/" element={<Login />} />
//             <Route path="/backOffice/*" element={<Backoffice />} />
//           </Routes>
          
//         </BrowserRouter>
//     </div>
//      );
// }
 
// export default Router;






/* ********BACKOFFICE component from real project in order to show login separated from home ********** */

// import React, { Component } from 'react';
// //routing
// import { Route, Routes } from 'react-router-dom';

// //local components
// import InvoicesListPage from './Invoices/InvoicesList/InvoicesListPage/InvoicesListPage';
// import AccountsListPage from './Accounts/AccountsList/AccountsListPage';
// import Account from './Accounts/AccountView/Account';
// import TrackersListPage from './Trackers/TrackersList/TrackersListPage';

// import NavbarNew from './Navigation/Navbar/NavbarNew';
// import Navbar from './Navigation/Navbar/Navbar';
// import Sidenav from './Navigation/Sidenav/Sidenav';
// import Footer from '../Components/Navigation/Footer/Footer';

// class Backoffice extends Component {
//     render() {
//         return (
//             <div className="BackOfficeContainer">
//                 {/* <Sidenav /> */}
//                 <NavbarNew />
//                 {/* <Navbar /> */}

//                 <Routes>
//                     <Route path="/invoices" element={<InvoicesListPage />} />
//                     <Route path="/accounts" element={ <AccountsListPage />} />
//                     <Route path="/trackers" element={<TrackersListPage />} />
//                     <Route path="/accounts/:accountid" element={
//                     <Account 
//                         // account={account} 
//                         // invoices={filterCompanyInvoices()}
//                         // trackers={filterCompanyTrackers()} 
//                         // onSaveEditedAddress={handleSaveEditedAddress}
//                         // onSaveEditedBank={handleSaveEditedBank}
//                         // onSaveEditedAdmin={handleSaveEditedAdmin}
//                     />
//                     } />
//                 </Routes>
                
//                 <Footer />
//             </div>
//         );
//     }
// }

// export default Backoffice;
