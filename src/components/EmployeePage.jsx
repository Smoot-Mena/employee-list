import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../css/EmployeePage.css";

function EmployeePage() {

    const data = useLocation();
    let employee = data.state.user;
    let navigate = useNavigate();

    return (
        <section id="employee-page">
            <button id="back-button" onClick={() => navigate("/")}>← Back</button>
            <img src={employee.avatar}/>
            <h1 className="employee-name">{employee.first_name} {employee.last_name}</h1>
            <h2 className="employee-email">{employee.email}</h2>
        </section>
    );
}

export default EmployeePage;