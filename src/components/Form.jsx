import { useState } from "react";
import "../css/Form.css";

export default function Form({addUser}) {
    let [form, setForm] = useState({
        first_name: "",
        title: "",
        phone: "",
        email: ""
    })

    function handleSubmit(event) {
        event.preventDefault();

        let employee = {
            ...form, 
            id: crypto.randomUUID()
        }
        console.log(employee);
        addUser(employee);
    }

    function handleChange(event) {
        setForm({...form, [event.target.id]: event.target.value})
    }

    


    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="first_name">Name: </label>
            <input id="first_name" value={form.name} onChange={handleChange}/>

            <label htmlFor="title">Title: </label>
            <input id="title" value={form.title} onChange={handleChange}/>

            <label htmlFor="phone">Phone: </label>
            <input id="phone" value={form.phone} onChange={handleChange}/>

            <label htmlFor="email">Email: </label>
            <input id="email" value={form.email} onChange={handleChange}/>
            <br />
            <button>Submit</button>
        </form>
    )
}