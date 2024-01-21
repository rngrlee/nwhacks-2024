import Post from "./Post"
import Navbar from "../Navbar"
import postService from '../services/posts'
import { useState, useEffect } from "react"

const Home = () => {

    const [posts, setPosts] = useState([])

    const getPosts = async () => {
        const postsReturned = await postService.getAll()
        setPosts(postsReturned)
        console.log(postsReturned, 'returned')
    }

    useEffect(() => {
        getPosts()
    }, [])

    return (
        <>
            {posts.map(post => 
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
            )}
            <Navbar />
        </>
    )
}

export default Home