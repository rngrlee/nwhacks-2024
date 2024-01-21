const Post = ({ title, location, daysAgo, postUser, type, startDay, endDay, payAmount, intersection, tasks }) => {
    return (
        <>
            <div className="singlePost">
                <div className="postHeader">
                    <div className="userInfo">
                        <img src='https://sharpfocusphoto.com/wp-content/uploads/2020/08/DSC_0067.jpg' alt="Profile" className="small-profile-image" />
                        <p>{postUser}</p>
                    </div>
                    <p>★ 4.5/5</p>
                </div>
                <div className="postTitles">
                    <h2>{title}</h2>
                    <p>{location} | {daysAgo} days ago</p>
                </div>
                <div className="postDetails">
                    <div>          
                        <p><i class="fa-regular fa-calendar"></i> {startDay} - {endDay}</p>
                        <p>Pay {payAmount}</p>
                    </div>
                    <p><i class="fa-solid fa-map-pin"></i> {intersection}</p>
                    <p><i class="fa-regular fa-square-check"></i> {tasks}</p>
                </div><br/>
                <input className="postInquiry" placeholder="Is this still available?"></input>
            </div>
        </>
    )
}

export default Post