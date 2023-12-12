import { useEffect, useState } from 'react'
import EmployeeList from './components/EmployeeList.jsx';
import EmployeePage from './components/EmployeePage';
import Header from './components/Header.jsx';
import { Link, useNavigate } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import "./App.css"

import Form from './components/Form';

function App() {

  
  const [users, setUsers] = useState([]);
  

  useEffect(() => {
    async function getData() {
      try {
        let userList = await fetch("https://reqres.in/api/users?page=1")
        userList = await userList.json();
        setUsers(userList.data); // All employees
      }
      catch (error) {
        console.log(error);
      }
    }

    getData();

  }, [])

  function removeFunction() {
    setShowRemove(!showRemove);
  }


  return (
		<>
			<Header />
				<Routes>
					<Route path="/" element={<EmployeeList users={users} setUsers={setUsers} />} />
					<Route path="/employeepage/:employee" element={<EmployeePage />}/>
				</Routes>
		</>
  ); 
}

export default App;