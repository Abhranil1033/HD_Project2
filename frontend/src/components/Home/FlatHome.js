import React from 'react';
import "./FlatHome.css"
import { useState } from 'react';

const FlatHome = () => {
  const [cards]=useState([
    {
      title:'Flat-1',
      image:"./user&flat/flat.jpg"
    },
    {
      title:'Flat-2',
      image:"./user&flat/flat.jpg"
    },
    {
      title:'Flat-3',
      image:"./user&flat/flat.jpg"
    },
    {
      title:'Flat-4',
      image:"./user&flat/flat.jpg"
    },
    {
      title:'Flat-5',
      image:"./user&flat/flat.jpg"
    },
    {
      title:'Flat-6',
      image:"./user&flat/flat.jpg"
    }
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
                  <img src={cards.image} alt="flat"/>
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

export default FlatHome;