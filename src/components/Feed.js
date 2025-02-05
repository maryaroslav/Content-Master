import AddPost from './AddPost';

import '../style/feed.css';

const Feed = () => {
    return (
        <div className='feed-container'>
            <AddPost />
            <div className='feed-posts-container'>
            </div>
        </div>
    );
}

export default Feed;