import '../css/EmployeeListItem.css';
import { Link } from 'react-router-dom';

function EmployeeListItem({user}) {
    return (
		<Link
			to={`/employeepage/${user.first_name}`}
			state={{ user: user }}
			key={user.id}>
			<section className="employee">
				<img src={user.avatar} alt="face" />
				<h3 className='employee-name'>
					{user.first_name} {user.last_name}
				</h3>
				<h4 className='employee-email'>{user.email}</h4>
			</section>
		</Link>
	);
}

export default EmployeeListItem;