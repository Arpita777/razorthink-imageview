import React from 'react'
import './imageview.style'

class ImageView extends React.Component{
  render(){
    console.log('Inside image view')
    console.log(this.props.match.params.id)
    return(
        <div className='container'>
    <div className='outer'>
    <div className='middle'>
      <img src={decodeURIComponent(this.props.match.params.id)} alt='image' className='inner'/>

     <a href={this.props.match.params.id} download className="button">Download</a>
    </div>
    </div>
    </div>
    )
  }
}
export default ImageView