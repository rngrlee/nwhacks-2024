import Post from "./Post"
import postService from '../services/posts'

const Timeline = () => {

    const [posts, setPosts] = useState([])

    const getPosts = async () => {
        const postsReturned = await postService.getAll()
        setPosts(postsReturned)
    }

    getPosts()

    return (
        <>
            {posts.map(post => {
                <Post 
                key={post.id} 
                title={post.title} 
                location={post.location} 
                daysAgo={post.daysAgo} 
                postUser={post.postUser} 
                type={post.type} 
                startDay={post.startDay} 
                endDay={post.endDay}
                payAmount={post.payAmount} 
                intersection={post.intersection} 
                tasks={post.tasks} />
            })}
        </>
    )
}

export default Profile