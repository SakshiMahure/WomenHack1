import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./usefetch";
import './Admin.css'

const BlogDetails = () => {
    const { id } = useParams();
    const { data: blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + id);
    const navigate = useNavigate();

    const handleClick = () => {
        fetch('http://localhost:8000/blogs/' + id, {
            method: 'DELETE'
        }).then(() => {
            navigate('/announcements');
        })
    }

    return (
        <div className="blog-details">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2>Platform{blog.venue}</h2>
                    <p>Is this course paid or free?<br/>{blog.organiser}</p>
                    <p>About:<br/>{blog.description}</p>
                    <p>Event date:<br/>{blog.date}</p>
                    <p>What's the duration of the event?<br/>{blog.start_time} </p>
                    <button onClick={handleClick}>delete</button>
                </article>
            )}
        </div>
    );
}

export default BlogDetails;