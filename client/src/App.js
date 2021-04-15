import './App.css';
import React, { useState } from 'react';
import image from './twitter-img.png';

function App() {
  const [tweets, setTweets] = useState([
    {
      id: 0,
      tweet:
        "first tweet",
      likes: 56,
    },

    {
      id: 1,
      tweet:
        " totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. ",
      likes: 116,
    },
    {
      id: 2,
      tweet:
        " totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. ",
      likes: 116,
    },
    {
      id: 3,
      tweet:
        " totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. ",
      likes: 116,
    },
    {
      id: 4,
      tweet:
        " totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. ",
      likes: 116,
    },
    
  ])
  const [value, setValue] = useState("");

   const onSubmit = (e, tweets, setTweets, input, setInput) => {
    e.preventDefault();
    const id = tweets.length;

    setTweets([...tweets,{ id: id, tweet: value, likes: Math.floor(Math.random() * 1000) }
    ]);
    setValue("");
  };

   const addLike = (e, id) => {
    e.preventDefault();
    const updateLikes = tweets.map((item) =>
      item.id === id ? { ...item, likes: item.likes + 1} : item
    );
    setTweets(updateLikes);
  };

  const callPrompt = (event) => {

    const newTweet = prompt('Post tweet')
    if(newTweet!==null){
      event.preventDefault();
    const id = tweets.length;

    setTweets([...tweets,{ id: id, tweet: newTweet, likes: Math.floor(Math.random() * 1000) }
    ]);
    }   
  }

  return ( 
    <div className="col-6 main">
     <h1 class="display-4 " >Twitter</h1>
    <form className='m-2' onSubmit={(e) => 
                onSubmit(e, tweets, setTweets, value, setValue) }>
    <div className="form-group">
        
        <div class="form-group">
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="What's happening?" onChange={(e) => setValue(e.target.value)} value={value}></textarea>
        </div>
        
    </div>
    <button type="submit" className="btn  btn-primary mt-3 ">Tweet</button>
    </form>
    <div className='mt-4'>
        {tweets.map(item => 
            <div className="card m-2">
          <div className="card-body">
            <h5 className="card-title"> <i class="fa fa-user-circle-o" aria-hidden="true"></i> Shubham <span className="fs-6"> @spal5776@gmail.com . 5h</span></h5>
            <p className="card-text">{item.tweet}</p>
            <button type="submit" className="btn btn-danger mt-1"  onClick={(e) => addLike(e, item.id)} ><i class="fa fa-thumbs-o-up" aria-hidden="true"></i>
            </button> <b className='mr-3'>{item.likes}</b>
        
          </div>
        </div>)}
            
      </div>
        <img src={image} className="floating" alt="Write something here" onClick={(e)=>callPrompt(e)} />
    </div>
  );
}

export default App;
