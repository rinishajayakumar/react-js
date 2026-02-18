import React from 'react'
import {Link} from "react-router-dom"

function home() {
  return (
    <div>
        <h3>hi,click here to go to the page:Post.jsx <Link to="/post">Go</Link></h3>
    </div>
  )
}

export default home