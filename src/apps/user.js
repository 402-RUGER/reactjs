export function User(props) {

    console.log(props)

    return (
        <>
        
    
        <div>User:  {props.element.name} {props.element.last_name} {props.element.age} {props.element.cat.name} {props.element.cat.age} 
            {/* <ul> 
           {props.element.map(el => <li key={el}>{el}</li>)}
                </ul> */}
        
       
        <ul> 
           {props.element.salaries.map(el => (
           <p key={el.salary}>
             {el.salary} {el.from_date}</p>
            ))}
        </ul>
       

        </div>
        </>
    )
}


