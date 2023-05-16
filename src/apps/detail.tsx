import React from "react";


interface DetailProps {
    user: IUser
}

interface IUser {
  emp_no: string,
  first_name: string,
  last_name: string,
  birth_date: string,
  gender: string,
  hire_date: string
}

class Detail extends React.Component<DetailProps> {
    render() {
        const {user} = this.props;

        return <>
            <ul>
                <li>Номер: {user.emp_no}</li>
                <li>ФИО: {user.last_name} {user.first_name} </li>
                <li>Дата рождения: {user.birth_date}</li>
                <li>Трудоустроен: {user.hire_date}</li>
            </ul>
        </>;
    }
}

export default Detail;


/*import React from "react";
import Salaries from "./salaries";

interface ISalary {
    emp_no: string,
    salary: string,
    from_date: string,
    to_date: string
}

interface IUser {
        emp_no: string,
        first_name: string,
        last_name: string,
        birth_date: string,
        gender: string,
        hire_date: string,
        salaries: [ISalary]
}

interface DetaliProps {
    user: IUser
}

  class Detali extends React.Component<DetaliProps> {
    render() {
        const {user} = this.props; 

        //const {employees} = this.props;

        const employees_rows = employees.map((emp_no, index) => {
          return <tr key={index}><td>{index + 1}</td><td>{emp_no.emp_no}</td><td>{emp_no.first_name}</td><td>{emp_no.last_name}</td></tr>
        });


        return <table>
        <thead>
          <tr>
            <th>#</th>
            <th>emp_no</th>
            <th>first_name</th>
            <th>last_name</th>
            <th>gender</th>
            <th>hire_date</th>
            <th>salaries</th>
          </tr>
        </thead>
        <tbody>
          {employees_rows}
        </tbody>
      </table>; 

    }
}

export default Detali;


//создать новый компонент <Detali user={user}/> будет выводить емпно ферст берздей и т.д как будет выводить? (сделать список, или тег )*/


