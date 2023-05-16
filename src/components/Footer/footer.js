import React from 'react'
import './style.css'

const Footer = () => {
  return (
    <div className='footer main'>
        <div className='footer-top'>
            <h3>Office Hours: T•W•F 10-2 PM; 4-6PM EST</h3>
            <a href='mailto:hello@signatureweddingsaways.com'>hello@signatureweddingsaways.com</a>
            <a href='tel:+609-746-0163'>
                <img src={Phone} />
                609-746-0163
            </a>
        </div>
        <div className='footer-bottom'>

        </div>
        
    </div>
  )
}

export default Footer