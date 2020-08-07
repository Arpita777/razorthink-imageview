import React from 'react'
import Pagination from '../common/Pagination'
import paginate from '../common/paginate'
import SearchBar from '../SearchBar/SearchBar'
import ImageCard from '../ImageCard/imagecard'
import axios from 'axios'
class Home extends React.Component{
  state = {
    imageList:[],
    originalList:[],
    currentPage:1,
    pageSize:9,
    query:''
  }
  handleState = (imageList)=>{
    this.setState({
      imageList
    })
  }
  onPageChange =(page)=>{
    this.setState({
      currentPage:page
    })
  }
   componentDidMount(){
    axios.get('https://api.unsplash.com/photos/random?count=20&client_id=UINkUp2tHWMDhmdNjUCJelw1Xp4-_yT6lGfMmsbItvY').then(response=>{
      const list = response.data
      this.setState({
        imageList:list,
        originalList:list
      }) 
    })
    .catch((error)=>{
      console.log(error.message)
    })
  }
  render(){
     const images=paginate(this.state.imageList,this.state.currentPage,this.state.pageSize)
    // console.log(this.state.imageList)
    return(
      <div>
      <SearchBar imageList={this.state.originalList}
      handleState = {this.handleState}/>
       {
          images.map((ele)=>{
            return (
              <div key={ele.id} className='container'>
                <ImageCard url={ele.urls} id={ele.id}/>
              </div>
            )
          })
        }
     <Pagination itemCount={this.state.imageList.length}
                  pageSize={this.state.pageSize}
                  currentPage={this.state.currentPage}
                  onPageChange={this.onPageChange}
              />
    </div>
    )
  }
}
export default Home