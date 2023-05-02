export function User(props) {

    console.log(props)

    return (
        <>
        <div>
        <div> User: {props.element.name} {props.element.last_name} </div>
        <div> Age: {props.element.age} </div>  
        <div> Cat: {props.element.cat.name}, age:{props.element.cat.age} </div> 
        
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












/*import { useState } from "react";

export function User(props) {
    /*let user = {
        name: 'John',
        last_name: 'Barlowe',
        age: 30,
        cat: {
            name: 'Happy',
            age: 1,
        },
        salaries: [
           {
               salary: '5670',
               from_date: '2019'
           },
           {
               salary: '1670',
               from_date: '2018'
           },
           {
               salary: '15670',
               from_date: '2012'
           },
           ],
        };*/

        /*console.log(props);

        const [objArr, setvalue] = useState(User);

        const result = objArr.map((obj) => {
            return <p key={obj.salaries}>
                {obj.salary} {obj.from_date}
            </p>
        });

        return <div>
           {result}
        </div>;
    
 

}*/







//import { useState } from "react";  

//exsport 


//export function Calculator(props) {
    /*const [text, setText] = useState('');

    //let text = '';

    //console.log(text);
    console.log(props);

    return <> 
    <p>{text}</p>
    <input type= 'text' placeholder="Text" onChange={(event) => {
       // console.log(event.target.value);
       // text = event.target.value;
       // test
       setText(event.target.value);
    }}/>
    </>;*/
//}
    //export function User(props) {
        
       // let User = [];

       // console.log(props);
        
    //}
    
/*class user extends Component {
    render() {
        console.log('items', this.props.items);
        return (
            <div>
                {this.props.item.map((item, index) => 
                <a href={item.})}
                </div>
             );

        }
    }*/





