import { useState } from "react";

const Home = () => {
    //making a reative value with usestate
    let [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
      ])
  
    return ( 
        <div className="home">
            {blogs.map((blog) => (
               <div className="preview-blog" key={blog.id}>
                <h1>{blog.title}</h1>
                <p>Writen by {blog.author}</p>
               </div>
            ))}
        </div>
     );
}
 
export default Home;