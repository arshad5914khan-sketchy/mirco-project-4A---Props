import React from 'react'
import Follow from '../components/Follow'

const App = () => {
  const profiles = [
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTTlH6fc_TCrm0O5zfZiAcjQIJlPymW_NUzFcNLbNR9Q&s" ,
    name: "Sabrina Carpenter",
    followers: "20 million",
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYZM_3sbKA5jxiOYwM-y-pJgB8YZt7DPpFmz9jv4amIEDzKi8RdhGb2Gc&s=10",
    name: "Cristiano Ronaldo",
    followers: "100 million",
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAngHUf6ktIet89Rff50Kk175kFo-HLBWYG8us0wsFDXS85TDUS1eqM6c&s=10",
    name: "Shah rukh khan",
    followers: "12 million",
  },
  {
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ec/Khaby_Lame%2C_Nov_2025_%28cropped1%29.jpg/250px-Khaby_Lame%2C_Nov_2025_%28cropped1%29.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail",
    name: "Khaby Lame",
    followers: "200 million",
  },
  {
    image:  "https://static.wikia.nocookie.net/timburton/images/4/48/Emma_Myers.jpg/revision/latest?cb=20230304164118",
    name: "Emma Myers",
    followers: "2.5 million",
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhzd0y8gMaofVfLn5lKUTVy_6IQdrzGI5OG-yh5sJ0Tv1zvJdqBpG--7oP&s=10",
    name: "Inde Navarrette",
    followers: "10 million",
  },
];
  return (
    // <div className='parent'>
    //   <Follow user_link = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTTlH6fc_TCrm0O5zfZiAcjQIJlPymW_NUzFcNLbNR9Q&s" name = "Sabrina Carpenter" followers = "20 million"/>
    //   <Follow user_link = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYZM_3sbKA5jxiOYwM-y-pJgB8YZt7DPpFmz9jv4amIEDzKi8RdhGb2Gc&s=10" name = "Cristiano Ronaldo" followers = "100 million"/>
    //   <Follow user_link = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAngHUf6ktIet89Rff50Kk175kFo-HLBWYG8us0wsFDXS85TDUS1eqM6c&s=10" name = "Shah rukh khan" followers = "12 million"/>
    //   <Follow user_link = "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ec/Khaby_Lame%2C_Nov_2025_%28cropped1%29.jpg/250px-Khaby_Lame%2C_Nov_2025_%28cropped1%29.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail" name = "Khaby Lame" followers = "200 million"/>
    //   <Follow user_link = "https://static.wikia.nocookie.net/timburton/images/4/48/Emma_Myers.jpg/revision/latest?cb=20230304164118" name = "Emma Myers" followers = "2.5 million"/>
    //   <Follow user_link = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhzd0y8gMaofVfLn5lKUTVy_6IQdrzGI5OG-yh5sJ0Tv1zvJdqBpG--7oP&s=10" name = "Inde Navarrette" followers = "10 million"/>
    // </div>
    <div className='parent'>
      {profiles.map((n,idx)=>{
        return <div key = {idx}>
         <Follow image = {n.image} name = {n.name} followers = {n.followers}/>
        </div>
      })}
    </div>
    
  )
}

export default App
