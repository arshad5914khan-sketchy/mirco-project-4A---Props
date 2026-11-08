import React from 'react'
import Card from '../prop-components/Card'

const App = () => {
  return (
    <div className = "parent">
      <Card user = "Dude Aravind" img = "https://plus.unsplash.com/premium_photo-1738449261730-2bc6a8ab40b5?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" des = "World is yours"/>
      <Card user = "Mohammed Arshad khan" img = "https://images.unsplash.com/photo-1764730282820-f9cdd430b1c1?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" des = "A polymatic soul with distracted mind"/>
      
    </div>
  )
}

export default App
