interface Employee {
    name: {
      first: string;
      last: string;
    };
    email: string;
    picture: {
      medium: string;
    };
}

interface EmployeeCardProps {
  employee: Employee;
}

function EmployeeCard({ employee }: EmployeeCardProps) {
  return (
    <figure className='displayEmployee'>
      <img src={employee.picture.medium} alt={employee.name.first} />
      <figcaption>
        <strong>{employee.name.first} {employee.name.last}</strong>
        {employee.email}
      </figcaption>
    </figure>
  );
}

export default EmployeeCard;
