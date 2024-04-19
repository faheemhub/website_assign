import './index.css'
import { IoMdCloseCircle } from "react-icons/io";

const PostModal = ({handleClose}) => {
    const handleSubmit = () => {
    }
    return(
        <div className='modal-outer-div'>
            <div className='modal-first-div'>
                <div id = "close-btn"
                    onClick={handleClose}
                    style={{cursor:'pointer', }}>
                <IoMdCloseCircle size={24}/>
                </div>
                <div className="modal">
                    <div className='modal-header'>
                        <h2>
                        Post
                        </h2>
                    </div>
                    <div className='modal-content'>
                        <form onSubmit={handleSubmit}>
                            <h2>Write Post here</h2>
                            <textarea id="postbox" rows="15" cols="80"/>
                            <button style={{width:'150px', height:'40px', fontSize:'14px',
                                border:'none', color:'white', marginTop:'20px',
                                borderRadius:'10px', backgroundColor:'#2F6CE5'}}>Post</button>
                        </form>
                    
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
export default PostModal