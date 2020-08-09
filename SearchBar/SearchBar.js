import React from 'react'
import React, { useState, useCallback } from "react";
import axios from 'axios'
import _ from "lodash";

const SearchBar = (props) => {
  const sendQuery = query => {
    let newList=[]
    if(query!==''){
      
       const url = `https://api.unsplash.com/search/photos?query=${query}&client_id=yc1BDCwSLt7rd1GK4AwxLshmLYbpEzNyR66Tbrw2nx8`
      

        axios.get(url).then(response=>{
          const list = response.data
          newList=list.results
          props.handleState(newList)
         })
    .catch((error)=>{
      console.log('error')
      console.log(error.message)
    })
    }
    else{
      this.props.handleState(props.imageList)
    }
  };

  const [userQuery, setUserQuery] = useState("");
  const delayedQuery = useCallback(_.debounce(q => sendQuery(q), 2000), []);
  const onChange = e => {
    setUserQuery(e.target.value);
    delayedQuery(e.target.value);
  };
  return(
     <div>
      <label>Search Fixed:</label>
      <input onChange={onChange} value={userQuery} />
    </div>
  )
}
export default SearchBar