import React, {useState} from 'react'
import './Feed.css'
import Post from './Post';
import TweetBox from './TweetBox';

function Feed() {
    const [posts, setPost] = useState ([]);
    return (
        <div className='feed'>
            {/*Header*/}
            <div className='feed__header'>
            <h2>Home</h2>
            </div>
            {/* TweetBox */}
            <TweetBox />
           
            <Post displayName="TotalyRealNeil"
            username='neildegrassetyson'
            verified={true}
            text="Erth iz totaly flat bruv"
            avatar="https://static01.nyt.com/images/2018/12/02/arts/02tyson-print/02tyson-print-jumbo.jpg?quality=75&auto=webp"
            image="https://i0.wp.com/twinfinite.net/wp-content/uploads/2021/05/a3f09a56-1d0d-4c91-a214-2f55d3d56360.jpg?resize=600%2C338&ssl=1"
            />
        </div>
    )
}

export default Feed
