import './MyComponent.css'
import more from '../../atg_images/baseline-more_vert-24px.svg'
import visibleIcon from '../../atg_images/visibility_24px_outlined.svg'
import shareIcon from '../../atg_images/baseline-share-24px.svg'

function MyComponent({topic, title, coverImage, para, userName, userPic}){
    
    return(
        <div className="outer-div">
            <div>
                <img src={coverImage} width='100%' height='200px' alt='cover image'/>
            </div>
            <p style={{marginBottom:0, marginLeft:'20px'}}>{topic}</p>
            <div style={{marginBottom:'10px', marginLeft:'20px', marginRight:'20px'}}>
                <div style={{display:'flex', justifyContent:'space-between',
                    alignItems:'flex-start', fontWeight:'bold', fontSize:'22px', marginTop:'20px'}}>
                {title}
                <img src={more} alt='more icon'/>
                </div>
                <div style={{marginTop:'20px', color:'rgb(100,100,100)'}}>
                {para}
                </div>
                <div style={{display:'flex', justifyContent:'space-between',
                    alignItems:'center', marginTop:'30px'}}>
                    <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                        <img src={userPic} style={{width:'48px', borderRadius:'24px'}} alt='cover image'/>
                        <div style={{marginLeft:'10px', fontWeight:'bold'}}>{userName}</div>
                    </div>
                    <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                    <img src={visibleIcon} width='18px' alt='visible icon'/>
                    <p style={{fontSize:'14px', marginLeft:'10px'}}>1.3k views</p>
                    <div style={{display:'flex', justifyContent:'center', alignItems:'center',
                            marginLeft:'30px', backgroundColor:'#EDEEF0',
                            borderRadius:'2px', width:'42px', height:'36px'}} >
                    <img src={shareIcon} width='18px' alt='share icon'/>
                    </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default MyComponent