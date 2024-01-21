const Post = ({ title, location, daysAgo, postUser, type, startDay, endDay, payAmount, intersection, tasks }) => {
    return (
        <>
            <div>{title}</div>
            <div>{location} | {daysAgo} days ago</div>
             <div><b>{postUser}</b> Posted a {type} listing</div>
            <div>{startDay} to {endDay} Pay {payAmount}</div>
            <div>{intersection}</div>
            <div>{tasks}</div>
        </>
    )
}

export default Post