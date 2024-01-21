const Post = ({ title, location, daysAgo, postUser, type, startDay, endDay, payAmount, intersection, tasks }) => {
    return (
        <>
            <div className="singlePost">
                <div className="postHeader">
                    <p>{postUser}</p>
                    <p>★ 4.5/5</p>
                </div>
                <div className="postTitles">
                    <h2>{title}</h2>
                    <p>{location} | {daysAgo} days ago</p>
                </div>
                <div className="postDetails">
                    <p>{startDay} - {endDay}</p>
                    <p>Pay {payAmount}</p>
                    <p>{intersection}</p>
                    <p>{tasks}</p>
                </div>
            </div>

        </>
    )
}

export default Post