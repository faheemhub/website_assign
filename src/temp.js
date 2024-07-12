{ signIn && 
    <div className='modal-content'>
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
                    borderRadius:'20px', backgroundColor:'#2F6CE5'}}>Sign In</button>
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
            onClick={()=>setSignIn(true)}
            >Create new user for free!</span></p>
            <img src={atgImg}/>
        </div>
    </div>
}