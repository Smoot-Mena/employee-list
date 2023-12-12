import { useState } from "react";
import Form from "./Form";
import { useNavigate, Link, useParams } from "react-router-dom";
import "../css/EmployeeList.css";
import SearchBar from "./SearchBar";
import EmployeeListItem from "./EmployeeListItem";



function EmployeeList({ users, setUsers }) {

    const [input, setInput] = useState("");
    const [showForm, setShowForm] = useState(false);

    let { employee } = useParams();
    let filteredEmployees = users.filter((emp) => emp.first_name.toLowerCase().includes(input.toLowerCase()) || emp.last_name.toLowerCase().includes(input.toLowerCase()));
    let navigate = useNavigate();

    function handleSearch(event) {
        let input2 = event.target.value;
        setInput(input2);
    }

    function showUsers(user) {
        return (
            <EmployeeListItem key={user.id} user={user}/>
        )
    }

    function handleForm() {
        setShowForm(!showForm);

    }

    function addUser(user) {
        setUsers([...users, user])
    }


    return (
		<>
			<SearchBar input={input} handleSearch={handleSearch} />
			<section id="employee-list">{filteredEmployees.map(showUsers)}
            </section>
			<button id="showform-button" onClick={handleForm}>{showForm ? "Hide" : "Add"} Employee
			</button>{showForm && (
				<section id="form">
					<Form addUser={addUser} />
				</section>
				)}
			
		</>
	);
}

export default EmployeeList;