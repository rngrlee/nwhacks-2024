const Post = ({ title, location, daysAgo, postUser, type, startDay, endDay, payAmount, intersection, tasks }) => {
    return (
        <>
            <div>
                <div>
                    <p>{postUser}</p>
                    ★ 4.5/5
                </div>
                <div>
                    <h2>{title}</h2>
                    <p>{location} | {daysAgo} days ago</p>
                </div>
                
                <p>{startDay} to {endDay} Pay {payAmount}</p>
                <p>{intersection}</p>
                <p>{tasks}</p>
            </div>

        </>
    )
}

export default Post