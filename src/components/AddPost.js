import '../style/addPost.css'

import user from '../img/user.svg';
import uploadIcon from '../img/imagesButton.svg';
import gifIcon from '../img/gifButton.svg';
import emojiIcon from '../img/emojiButton.svg';

const AddPost = () => {
    return (
        <div className="addpost-container">
            <div className="addpost-user-img">
                <img src={user} alt="" />
            </div>
            <div className="addpost-input">
                <input type="text" placeholder='Share your thoughts or a post' />
                <div className="addpost-buttons">
                <button>
                    <img src={uploadIcon} alt="Upload Photo" />
                </button>
                <button>
                    <img src={gifIcon} alt="Upload GIF" />
                </button>
                <button>
                    <img src={emojiIcon} alt="Choose Emoji" />
                </button>
            </div>
            </div>
        </div>
    );
}

export default AddPost;