import React from "react";
export default function Signup () {
    const [name, setName] = React.useState(0);
    const [Email, setEmail] = React.useState(0);
    

    function updateName(elem) {
        setName(elem.target.value);
    }
    function updateEmail(elem) {
        setEmail(elem.target.value);
    }

    return (
     <form>
           <div className="control">
              <label> Name: </label> <input type="text" onChange={updateName} />
           </div>           
           <div className="control">
              <label> Email: </label> <input type="email" onChange={updateEmail} />
           </div>
           <div className="control">
              <input type="submit"  />
           </div>

     </form>
    );
}