import React from 'react';
import "./FlatHome.css"
import { useState } from 'react';

const FlatHome = () => {
  const [cards]=useState([
    {
      title:'Flat-1',
      text:'Lorem ipsum dolor, sit amet consectetur adipisicing elit.Excepturi, quod dolorum vel non tempore nulla nisi rem, aperiam inipsam atque molestiae nam maiores ullam unde facilis, cumque optiodeleniti?'
    },
    {
      title:'Flat-2',
      text:'Lorem ipsum dolor, sit amet consectetur adipisicing elit.Excepturi, quod dolorum vel non tempore nulla nisi rem, aperiam inipsam atque molestiae nam maiores ullam unde facilis, cumque optiodeleniti?'
    },
    {
      title:'Flat-3',
      text:'Lorem ipsum dolor, sit amet consectetur adipisicing elit.Excepturi, quod dolorum vel non tempore nulla nisi rem, aperiam inipsam atque molestiae nam maiores ullam unde facilis, cumque optiodeleniti?'
    },
    {
      title:'Flat-4',
      text:'Lorem ipsum dolor, sit amet consectetur adipisicing elit.Excepturi, quod dolorum vel non tempore nulla nisi rem, aperiam inipsam atque molestiae nam maiores ullam unde facilis, cumque optiodeleniti?'
    },
    {
      title:'Flat-5',
      text:'Lorem ipsum dolor, sit amet consectetur adipisicing elit.Excepturi, quod dolorum vel non tempore nulla nisi rem, aperiam inipsam atque molestiae nam maiores ullam unde facilis, cumque optiodeleniti?'
    },
    {
      title:'Flat-6',
      text:'Lorem ipsum dolor, sit amet consectetur adipisicing elit.Excepturi, quod dolorum vel non tempore nulla nisi rem, aperiam inipsam atque molestiae nam maiores ullam unde facilis, cumque optiodeleniti?'
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
                  <p>{cards.text}</p>
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