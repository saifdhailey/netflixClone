import './Bottomfooter.css';
import React from 'react'

const bottomfooter = [
    {
      id: 1,
      link: "FAQ"
    },
    {
      id: 2,
      link: "Investor Relations"
    },
    {
      id: 3,
      link: "Privacy"
    },
    {
      id: 4,
      link: "Speed Test"
    },
    {
      id: 5,
      link: "Help Center"
    },
    {
      id: 6,
      link: "Jobs"
    },
    {
      id: 7,
      link: "Cookie Preferences"
    },
    {
      id: 8,
      link: "Legal Notices"
    },
    {
      id: 9,
      link: "Account"
    },
    {
      id: 10,
      link: "Ways to Watch"
    },
    {
      id: 11,
      link: "Coorporate Information"
    },
    {
      id: 12,
      link: "Only on Netflix"
    },
    {
      id: 13,
      link: "Media Center"
    },
    {
      id: 14,
      link: "Terms of use"
    },
    {
      id: 15,
      link: "Contact US"
    }
  ]

const footerList = bottomfooter.map(data =>( <li key={data.id} className='footer-link-item'>{data.link}</li>))

export const Bottomfooter = () => {
  return (
    <div className="footer-links">
      <div className='footer-details'>
        <div className='call-contact'>
        <p>Questions? Call 000-800-919-1694</p>
        </div>
        
        <ul className='unorderedlist'>
          {footerList}
        </ul> 

        <div className='branding-netflix'>
          <p>Netflix India</p>
        </div>
      </div>
    </div>
  )
}



