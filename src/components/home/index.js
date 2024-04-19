import './index.css'
import Logo from '../../atg_images/whole.svg'
import searchIcon from '../../atg_images/baseline-search.svg'
import dropDown from '../../atg_images/baseline-arrow_drop_down-24px.svg'
import grpAdd from '../../atg_images/baseline-group_add.svg'
import location from '../../atg_images/outline-location_on-24px.svg'
import pen from '../../atg_images/baseline-edit-24px.svg'
import ericon from '../../atg_images/baseline-error_outline-24px.svg'
import Modal from '../modal/index'
import PostModal from '../postModal/index'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import MyComponent from '../mycomponent/MyComponent'
import {data} from '../../components/centralData/data'
const Home = () => {
    const [modalAction, setModalAction] = useState(false);
    const [writePost, setWritePost] = useState(false);

    const handleClose = () => {
        setModalAction(false);
        setWritePost(false);
    }

    return(
        <div className="main-container">
            <nav className="nav1">
                <img src={Logo}/>
                <div className='search-box'>
                    <img id='search-icon' src={searchIcon}/>
                    <input id='search-inp' type='text' placeholder='Search for your favorite groups in ATG'/>
                </div>
                <div className='nav-right-box'>
                        <p>Create account.<span style={{color:"blue", cursor:'pointer'}}>It's free!</span></p>
                        <img src={dropDown} style={{cursor:'pointer'}}/>
                </div>
            </nav>
            {modalAction && (<Modal handleClose={handleClose}/>)}
            {writePost && (<PostModal handleClose={handleClose}/>)}
                <div className='web-cover'>
                <div id='cover-text'>
                    <p id='p1'>Computer Engineering</p>
                    <p id='p2'>142,461 Computer Engineers follow this</p>
                </div>
            </div>
            <div className='second-container' style={{width:'70%', margin:'0px auto'}}>
                <div className='nav2' style={{borderBottom:'1px solid rgb(210, 210, 210)'}}>
                    <div className='nav2-left-div'>
                        <ul id='nav2-ul'>
                            <li>
                            <Link to='/allposts'
                                style={{textDecoration: 'none',
                                color:'gray',
                                marginRight:'18px',
                                fontSize:'16px',
                                }}>
                                All Posts
                            </Link>
                            </li>
                            <li>
                            <Link to='articles'
                                style={{textDecoration: 'none',
                                color:'gray',
                                marginRight:'18px',
                                fontSize:'16px'}}>
                                Article
                            </Link>
                            </li>
                            <li>
                            <Link to='/event'
                                style={{textDecoration: 'none',
                                    color:'gray',
                                    marginRight:'18px',
                                    fontSize:'16px'}}>
                                Event
                            </Link>
                            </li>
                            <li>
                            <Link to='/education'
                                style={{textDecoration: 'none',
                                color:'gray',
                                marginRight:'18px',
                                fontSize:'16px'}}>
                                Education
                            </Link>
                            </li>
                            <li>
                            <Link to='job'
                                style={{textDecoration: 'none',
                                color:'gray',
                                marginRight:'18px',
                                fontSize:'16px'}}>
                                Job
                            </Link>
                            </li>
                        </ul>
                    </div>
                    <div className='nav2-right-div'>
                        <div 
                            style={{display:'flex', justifyContent:'center', alignItems:'center', cursor:'pointer'}}
                            onClick={()=>setWritePost(true)}
                            >
                        <p style={{fontWeight:'bold'}}>Write a Post</p><img src={dropDown}/>
                        </div>
                        <div style={{display:'flex',
                            justifyContent:'center',
                            alignItems:'center',
                            backgroundColor:'#2F6CE5',
                            width:'125px',
                            height:'36px',
                            borderRadius:'4px',
                            marginLeft:'30px',
                            cursor:'pointer'
                        }}
                            onClick={()=>setModalAction(true)}
                            >
                            <img src={grpAdd} style={{paddingLeft:'5px'}}/>
                            <p style={{margin:'0px 10px', color:'white'}}>Join Group</p></div>
                    </div>
                </div>
                <div style={{display:'flex', justifyContent:'space-between', width:'100%'}}>
                <div className='card-div'>
                {data.map((item)=>{
                    return(<MyComponent
                    topic={item.topic}
                    title={item.title}
                    image={item.image}
                    para={item.para}
                />)}    
                )}
                </div>
                <div style={{width:'30%', marginTop:'50px'}}>
                <div style={{display:'flex', justifyContent:'space-between'}}>
                    <div><img src={location}/></div>
                    <div><input type='text' value='Noida, India' style={{border:'none', outline:'none'}}/></div>
                    <div><img src={pen}/></div>
                </div>
                <div style={{display:'flex', justifyContent:'flex-start'}}>
                    <img src={ericon}/>
                    <p style={{fontSize:'11px', color:'gray'}}>Your location will help us serve better and extend a personalised experience.</p>
                </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Home