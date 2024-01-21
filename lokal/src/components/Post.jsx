const Post = ({ title, location, daysAgo, postUser, type, startDay, endDay, payAmount, intersection, tasks }) => {
    return (
        <>
            {title}
            {location} | {daysAgo} days ago | 
            <b>{postUser}</b> Posted a {type} listing
            {startDay} to {endDay} Pay {payAmount}
            {intersection}
            {tasks}
        </>
    )
}

export default Post