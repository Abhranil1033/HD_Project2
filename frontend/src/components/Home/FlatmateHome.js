import React from 'react';
import "./FlatmateHome.css"
import { useState,useEffect } from 'react';
const FlatmateHome = () => {
  const [cards]=useState([
    {
      title:'Person-1',
      image:"./user&flat/user.png",
      age:20,
      gender:"Female",
      occupation:"Software Engineer"
    },
    {
      title:'Person-2',
      image:"./user&flat/user.png",
      age:20,
      gender:"Female",
      occupation:"Software Engineer"
    },
    {
      title:'Person-3',
      image:"./user&flat/user.png",
      age:20,
      gender:"Female",
      occupation:"Software Engineer"
    },
    {
      title:'Person-4',
      image:"./user&flat/user.png",
      age:20,
      gender:"Female",
      occupation:"Software Engineer"
    },
    {
      title:'Person-5',
      image:"./user&flat/user.png",
      age:20,
      gender:"Female",
      occupation:"Software Engineer"
    },
    {
      title:'Person-6',
      image:"./user&flat/user.png",
      age:20,
      gender:"Female",
      occupation:"Software Engineer"
    },
  ])
  useEffect(() => {
    const cardContainer = document.querySelector('.cards');
    if (cards.length === 1) {
      cardContainer.classList.add('centered');
    } else {
      cardContainer.classList.remove('centered');
    }
  }, [cards.length]);

  return (
    <div className='flatmatePage'>
      <section>
        <div className="flatmate-container">
          <div className="cards">
            {
              cards.map((cards,i)=>(
                  <div key={i} className="card">
                    <img src={cards.image} alt="images"/>
                    <h3>{cards.title}</h3>
                    <div className="special">
                    <h6>{cards.occupation}</h6>|
                    <h6 className="h63">{cards.gender}</h6>|
                    <h6 className="h62 ">{cards.age}</h6>
                    </div>
                    <button className="flatmate-button">Find out more</button>
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