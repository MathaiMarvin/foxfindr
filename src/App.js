import React, {useState} from "react";

function App() {

  const [image, setImage] = useState("https://randomfox.ca/images/41.jpg")
  const [likes, setLikes] = useState(0)

  function handleNewFoxClick (){
    
    fetch ("https://randomfox.ca/floof/")
      .then((res)=>res.json())
      .then(({image})=>{
        setImage(image);
        setLikes(0)
      })
  }

  function handleLikes ( ) {
      setLikes ((likes)=>{
        return (likes) +1
      })
  }
  return (
    <div className="App">
      <h1>Fox Findr</h1>
      <div className="buttons">
          <button onClick={handleNewFoxClick}>New Please</button>
          <button onClick={handleLikes}>Likes: {likes}</button>
      </div>
      <img src={image} alt="Random Fox" />
    </div>
  );
}

export default App;
