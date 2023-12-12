import Header from "./Header";
import EmployeeList from "./EmployeeList";
import "../css/Homepage.css";

const Homepage = () => {
    return (
        <section id="Homepage">
            <Header />
            <EmployeeList />
        </section>
    );
}

export default Homepage;