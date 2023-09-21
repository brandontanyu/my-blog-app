const BlogList = ({blogs,title, handleDelete}) => {

    return ( 
        <div className="blog-list">
             <h1>{title}</h1>
              {blogs.map((blog) => (
               <div className="preview-blog" key={blog.id}>
                <h1>{blog.title}</h1>
                <p>Writen by {blog.author}</p>
                <button onClick={() => handleDelete(blog.id)}>delete Blog</button>
               </div>
            ))}
        </div>
     );
}
 
export default BlogList;