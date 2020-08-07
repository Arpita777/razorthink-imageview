import React from 'react'
import axios from 'axios'

class SearchBar extends React.Component{
  handleChange = (e) =>{
     const { value } = e.target;
    this.setState({
      query: value
    });

    this.search(value);
  }
  search = query => {
    let newImageList=[]
    if(query!=''){
       const url = `https://api.unsplash.com/search/photos?query=${query}&client_id=UINkUp2tHWMDhmdNjUCJelw1Xp4-_yT6lGfMmsbItvY`
      

        axios.get(url).then(response=>{
          const list = response.data
          newImageList =  list.results
          this.props.handleState(list.results)
         })
    .catch((error)=>{
      console.log('error')
      console.log(error.message)
    })
    }
    else{
      this.props.handleState(this.props.imageList)
    }
    
   
  };
  render(){
    return (
       <input type="text"
              className="input"
              onChange={this.handleChange} placeholder="Search..." />
    )
  }
}
export default SearchBar