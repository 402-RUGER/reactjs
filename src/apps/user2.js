import { useState } from "react";

export function User2(props) {
    let salaries = props.user.salaries.map((salary, index) => {
        return <tr><td>{index + 1}</td><td>{salary.salary}</td><td>{salary.from_date}</td></tr>
    });
    console.log(props)

    return <>
        <div> User: {props.element.name} {props.element.last_name} </div>
        <div> Age: {props.element.age} </div>
        <div> Cat: {props.element.cat.name}, age: {props.element.cat.age} </div>
        <div> 
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Salary</th>
                        <th>Date</th>
                    </tr>
                </thead>
            </table>
            <tbody>
                {salaries}
            </tbody>
        </div>
        </>;
}


