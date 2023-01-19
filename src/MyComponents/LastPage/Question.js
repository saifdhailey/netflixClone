import React, { useState } from 'react';
import { Searchbar } from '../FirstPage/Searchbar';
import './Question.css';

const list = [
  {
    id:1,
    title:'What is Netflix?',
    subtext:'Netflix is a streaming service that offers a widely variety of award-winning TV shows, movies, anime, documentaries and more - on thousands of interest-connected devices.'
  },
  {
    id:2,
    title:'How much does Netflix cost?',
    subtext:'Watch Netflix on your smartphone, tablet, Smart TV, Laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 149 to ₹ 649 a month. No extra costs,no contracts.'
  },
  {
    id:3,
    title:'Where can I watch?',
    subtext:'Watch anywhere, anytime. sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offer the Netflix app, including smart TVs, smartphone, tablets, streaming media players and game consoles.'
  },
  {
    id:4,
    title:'How do I cancel?',
    subtext:'Netflix is flexible. There are no annoying contracted and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.'
  },
  {
    id:5,
    title:'What can I watch on Netflix?',
    subtext:'Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.'
  },
  {
    id:6,
    title:'Is Netflix good for kids?',
    subtext:"The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space. Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see."
  },
];

export const Question = () => {
  const [selected, setSelected] = useState(null)
  
  const toggle =(i)=>{
    if (selected === i) {
      return setSelected(null)
    } 

    setSelected(i)
  };
 
  return (
    <>
      <hr style={{height:'10px',margin:'0',backgroundColor:'grey'}}/>
        <div  className='wrapper'>
            <h1 className='questionsHeading'>Frequently Asked Questions</h1>
          <div className="accordion">
            {list.map((item,i)=>(
          <div  key={item.id} className='item'>
            <div className='title' onClick={()=>toggle(i)}>{item.title}
              <span>{selected === i ? '-' : '+'}</span>
            </div>
            <div className={selected === i ? 'subcontent show' : 'subcontent'}>{item.subtext}</div>
          </div>
))}
          </div>
          <h5>Ready to watch? Enter your email to create or restart your membership.</h5>
          <Searchbar style={{paddingBottom:'50px'}}/>
        </div>
    </>
  )
}