import { Fragment, useState } from "react";
function ListGroup() {
    let items=[
        'Nu este bine sa scrii HTML in Notepad',
        'Nu este bine sa invatam de pe un material din 2002',
        'Tagul "font" nu este folosit de nimeni',
        'Tagul "p" nu este self-closing',
        'Se pronunta "badi", nu "bodi" '
    ];
    //hook function
    const [selectedIndex, setSelectedIndex]=useState(-1);

   const getMessage = () => {
        return items.length===0 ? <p>Lista este goala</p> : null;
   }


    return (
    <Fragment>
        <h1>De ce sa nu invatam asa HTML?</h1>
        {getMessage()}
        <ul className="list-group">
            {items.map((item, index) => (
                <li 
                className={selectedIndex===index ?  'list-group-item active' : 'list-group-item'}
                key={item} 
                onClick={() => {setSelectedIndex(index); }}
                >
                {item}
                </li>
                ))}
         </ul>
    </Fragment>
    );
}

export default ListGroup;