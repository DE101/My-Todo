import React from "react";
export default function Signup () {
    const [name, setName] = React.useState(0);
    const [email, setEmail] = React.useState(0);
    

    function updateName(elem) {
        setName(elem.target.value);
    }
    function updateEmail(elem) {
        setEmail(elem.target.value);
    }

    function submitForm(event) {
        event.preventDefault();
        const payLoad = {name, email};
        console.log(payLoad);
    }

    return (
     <form>
           <div className="control" onSubmit={submitForm} >
              <label> Name: </label> <input require type="text" onChange={updateName} />
           </div>           
           <div className="control">
              <label> Email: </label> <input require type="email" onChange={updateEmail} />
           </div>
           <div className="control">
              <input type="submit" />
           </div>

     </form>
    );
}