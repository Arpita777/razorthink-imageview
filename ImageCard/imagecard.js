import React from 'react'
import {Link} from 'react-router-dom';
import './imagecard.style.css'

const ImageCard = (props)=> { 
  const origUrl=props.url.full;
  const decodeUrl=origUrl.replace(/\//g, "%2F");
  return(
     <Link
         className='card'
          to={`/home/${decodeUrl}`}
      >
        <img alt='image' src={props.url.regular} key={props.id}/>
    </Link>
  )
  
}
export default ImageCard