import './signupmodal.css'
import { IoMdCloseCircle } from "react-icons/io";
import atgImg from '../../atg_images/atg_illustration.svg'
import fbIcon from '../../atg_images/f_logo_RGB-Blue_1024.svg'
import googleIcon from '../../atg_images/search.svg'
import { useState } from 'react';

const SignupModal = ({handleClose}) => {
    const [signIn, setSignIn] = useState(false);
    const handleSubmit = () => {
    }
    return(
        <div className='modal-outer-div'>
         { !signIn &&
            <div className='modal-first-div'>
                <div id = "close-btn"
                    onClick={handleClose}
                    style={{cursor:'pointer', }}>
                <IoMdCloseCircle size={24}/>
                </div>
                <div className="modal">
                <div className='modal-header1'>
                <div>
                Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼
                </div>
                </div>
               
                    <div className='modal-content'>
                        <div className='left'>
                            <form onSubmit={handleSubmit}>
                                <h1>Create Account</h1>
                                <div style={{display:'flex', height:'46px', width:'320px', marginTop:'10px'}}>
                                    <div style={{height:'46px', width:'160px'}}>
                                        <input type='text' placeholder='First Name'
                                        style={{width:'156px', height:'46px', fontSize:'15px', fontWeight:'500', margin:'0px',
                                        paddingLeft:'15px', outline:'none', border: '1px solid #D9D9DB',
                                        backgroundColor:'#F7F8FA'}}/>
                                    </div>
                                    <div style={{height:'46px', width:'160px'}}>
                                        <input type='text' placeholder='Last Name'
                                        style={{width:'156px', height:'46px', fontSize:'15px', margin:'0px',
                                        paddingLeft:'15px', outline:'none', border: '1px solid #D9D9DB',
                                        backgroundColor:'#F7F8FA'}}/>
                                    </div>
                                </div>
                                <div style={{height:'46px', width:'320px'}}>
                                <input type='email' placeholder='Email'
                                    style={{width:'316px', height:'46px', fontSize:'15px',
                                    paddingLeft:'15px', outline:'none', border: '1px solid #D9D9DB',
                                    backgroundColor:'#F7F8FA'}}
                                />
                                </div>
                                <div style={{height:'46px', width:'320px'}}>
                                <input type='password' placeholder='Password'
                                    style={{width:'316px', height:'46px', fontSize:'15px',
                                    paddingLeft:'15px', outline:'none', border: '1px solid #D9D9DB',
                                    backgroundColor:'#F7F8FA'}}
                                /></div>                                
                                <div style={{height:'46px', width:'320px'}}>
                                <input type='password' placeholder='Confirm Password'
                                    style={{width:'316px', height:'46px', fontSize:'15px',
                                    paddingLeft:'15px', outline:'none', border: '1px solid #D9D9DB',
                                    backgroundColor:'#F7F8FA'}}
                                /></div>
                                <button style={{width:'320px', height:'40px', fontSize:'14px',
                                    border:'none', color:'white', marginTop:'20px', cursor:'pointer',
                                    borderRadius:'20px', backgroundColor:'#2F6CE5'}}>Create Account</button>
                            </form>
                            <div style={{ display:'flex', justifyContent:'center', alignItems:'center', cursor:'pointer',
                                marginTop:'20px', border:'0.6px solid #D9D9DB', padding:'5px 30px'}}>
                                <img src={fbIcon} width='16px'/>
                                <span style={{fontSize:'14px', marginLeft:'8px'}}>Sign up with Facebook</span>
                            </div>
                            <div style={{ display:'flex', justifyContent:'center', alignItems:'center', cursor:'pointer',
                                marginTop:'10px', border:'0.6px solid #D9D9DB', padding:'5px 30px'}}>
                                <img src={googleIcon} width='16px'/>
                                <span style={{fontSize:'14px', marginLeft:'8px'}}>Sign up with Google</span>
                            </div>
                        </div>
                        <div className='right'>
                            <p id='p1'>
                            Already have an account? 
                            <span style={{color:'blue', cursor:'pointer', fontWeight:'bold'}}
                            onClick={()=>setSignIn(true)}
                            >Sign In</span></p>
                            <img src={atgImg}/>
                            <p id='p2'>By signing up, you agree to our Terms & conditions, Privacy policy</p>
                        </div>
                    </div>
                </div>
            </div>
                }
                { signIn && 
                <div className='modal-first-div1'>
                <div id = "close-btn1"
                    onClick={handleClose}
                    style={{cursor:'pointer', }}>
                <IoMdCloseCircle size={24}/>
                </div>
                <div className="modal1">
                <div className='modal-header1'>
                <div>
                Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼
                </div>
                </div>
               
            <div className='modal-content1'>
                <div className='left'>
                    <form onSubmit={handleSubmit}>
                        <h1>Sign In</h1>
                        <div style={{height:'46px', width:'320px'}}>
                        <input type='email' placeholder='Email'
                            style={{width:'316px', height:'46px', fontSize:'15px',
                            paddingLeft:'15px', outline:'none', border: '1px solid #D9D9DB',
                            backgroundColor:'#F7F8FA'}}
                        />
                        </div>
                        <div style={{height:'46px', width:'320px'}}>
                        <input type='password' placeholder='Password'
                            style={{width:'316px', height:'46px', fontSize:'15px',
                            paddingLeft:'15px', outline:'none', border: '1px solid #D9D9DB',
                            backgroundColor:'#F7F8FA'}}
                        /></div>
                        <button style={{width:'320px', height:'40px', fontSize:'14px',
                            border:'none', color:'white', marginTop:'20px', cursor:'pointer',
                            borderRadius:'20px', backgroundColor:'#2F6CE5',}}>Sign In</button>
                    </form>
                    <div style={{ display:'flex', justifyContent:'center', alignItems:'center', cursor:'pointer',
                        marginTop:'20px', border:'0.6px solid #D9D9DB', padding:'5px 30px'}}>
                        <img src={fbIcon} width='16px'/>
                        <span style={{fontSize:'14px', marginLeft:'8px'}}>Sign up with Facebook</span>
                    </div>
                    <div style={{ display:'flex', justifyContent:'center', alignItems:'center', cursor:'pointer',
                        marginTop:'10px', border:'0.6px solid #D9D9DB', padding:'5px 30px'}}>
                        <img src={googleIcon} width='16px'/>
                        <span style={{fontSize:'14px', marginLeft:'8px'}}>Sign up with Google</span>
                    </div>
                    <div style={{textAlign:'center', fontSize:'12px', marginTop:'20px', fontWeight:'bold'}}>
                        Forgot Password?
                    </div>
                </div>
                <div className='right'>
                    <p id='p1'>
                    Don't have an account yet? 
                    <span style={{color:'blue', cursor:'pointer', fontWeight:'bold'}}
                    onClick={()=>setSignIn(false)}
                    >Create new user for free!</span></p>
                    <img src={atgImg}/>
                </div>
            </div>
                </div>
            </div>
            }
        </div>
    )
}
export default SignupModal