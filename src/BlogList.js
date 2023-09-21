const BlogList = ({blogs}) => {

    return ( 
        <div className="blog-list">
              {blogs.map((blog) => (
               <div className="preview-blog" key={blog.id}>
                <h1>{blog.title}</h1>
                <p>Writen by {blog.author}</p>
               </div>
            ))}
        </div>
     );
}
 
export default BlogList;