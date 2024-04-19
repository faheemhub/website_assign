import './MyComponent.css'
import more from '../../atg_images/baseline-more_vert-24px.svg'
import visibleIcon from '../../atg_images/visibility_24px_outlined.svg'
import shareIcon from '../../atg_images/baseline-share-24px.svg'

function MyComponent({topic, title, image, para}){
    console.log(image)
    return(
        <div className="outer-div">
            <div>
                <img src={image} width='100%' height='200px'/>
            </div>
            <p style={{marginBottom:0, marginLeft:'10px'}}>{topic}</p>
            <div style={{marginBottom:'20px', marginLeft:'10px'}}>
                <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                <p style={{fontWeight:'bold', fontSize:'20px'}}>{title}</p>
                <img src={more} style={{marginRight:'10px'}}/>
                </div>
                <div style={{display:'flex', justifyContent:'space-between'}}>
                <div style={{width:'500px'}}>
                <p>{para}</p>
                </div>
                <div style={{display:'flex', justifyContent:'flex-end', alignItems:'center', marginRight:'10px'}}>
                    <img src={visibleIcon} width='18px'/>
                    <p style={{fontSize:'14px'}}>1.3k views</p>
                    <img src={shareIcon} width='18px'/>
                </div>
                </div>
            </div>
        </div>
    )
}

export default MyComponent