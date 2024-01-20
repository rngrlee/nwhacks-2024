const Post = ({ type, stayLength, area, pay, tasks, description }) => {
    return (
        <>
            {type}
            {stayLength}
            {area}
            {pay}
            {tasks}
            {description}
        </>
    )
}

export default Post