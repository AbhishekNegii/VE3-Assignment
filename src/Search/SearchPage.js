import React, { useState,useEffect } from "react";
import HomeButton from "../HomeButton";
import "./SearchPage.css";
import "../MainPage.css";
import axios from "axios";

const SearchPage = () => {
  const [posts, setPosts] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");


  useEffect(() => {
    let arr=[]
    const loadPosts = async () => {
       const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      for(let i=0;i<20;i++){
        arr.push(response.data[i])
      }
      setPosts(arr)
      
      console.log(response.data.length)
      
    };

    loadPosts();
  }, []);

  return (
    <div className="containerSearch">
      <div className="home">
      <HomeButton/>
      </div>
      <h4>Type here to search....</h4>
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => setSearchTitle(e.target.value)}
      />
      {posts
          .filter((value) => {
            if (searchTitle === "") {
              return null;
            } else if (
              value.title.toLowerCase().includes(searchTitle.toLowerCase())
            ) {
              return value;
            }
          })
          .map((item) => <h5 key={item.id}><>{item.title}</></h5>)
      }
      {posts && <h5>No result found</h5>}
    </div>
  );
}
export default SearchPage;

