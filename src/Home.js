import { useState } from "react";

const Home = () => {
    //making a reative value with usestate
    let [name,setName] = useState("Brandon");
    let [age,setAge] = useState(25);
  
    let handleClick = () => {
      setName("Tanyu");
      setAge(22);
    };
  
    return ( 
        <div className="home">
            <h2>Homepage</h2>
              <p>{name} is {age} years old!</p>
            <button onClick={handleClick}>Click Me</button>
        </div>
     );
}
 
export default Home;