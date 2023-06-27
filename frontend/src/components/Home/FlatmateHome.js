import React from 'react';
import "./FlatmateHome.css"
import { useState } from 'react';
const FlatmateHome = () => {
  const [cards]=useState([
    {
      title:'Person-1',
      image:"./user&flat/user.png"
    },
    {
      title:'Person-2',
      image:"./user&flat/user.png"
    },
    {
      title:'Person-3',
      image:"./user&flat/user.png"
    },
    {
      title:'Person-4',
      image:"./user&flat/user.png"
    },
    {
      title:'Person-5',
      image:"./user&flat/user.png"
    },
    {
      title:'Person-6',
      image:"./user&flat/user.png"
    },
  ])
  return (
    <div>
      <section>
        <div className="container">
          <div className="cards">
            {
              cards.map((cards,i)=>(
                  <div key={i} className="card">
                    <h3>{cards.title}</h3>
                    <img src={cards.image} alt="images"/>
                    <button className="but">View</button>
                  </div> 
              ))
            }
          </div>
        </div>
      </section>
    </div>
  )
}

export default FlatmateHome