import { useState,useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    //making a reative value with usestate
    let [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
      ]);

      let [name,setName] = useState("Brandon");

  
      let handleDelete = (id) => {
        let newBlogs = blogs.filter((blog) => blog.id !== id);
        setBlogs(newBlogs);
      }
      
      //useEffect rerenders the ReactDom when each rerun
      useEffect(() => {
        console.log("Use effect Ran");
        console.log(name);
      });

  
    return ( 
        <div className="home">
            <BlogList blogs = {blogs} handleDelete = {handleDelete} title = "All blogs"/>
            <button onClick={()=> setName("Sosah")}>Change Name</button>
        </div>
     );
}
export default Home;