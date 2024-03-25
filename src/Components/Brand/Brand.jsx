import React from 'react'
import './brand.css'
import { google, atlasian, dropbox, shopify, slack } from './import'

const Brand = () => {
  return (
    <div className='gpt3__brand section__padding'>
      
      <div>
        <img src={google} alt="google" />
      </div>
      <div>
        <img src={atlasian} alt="atlasian" />
      </div>
      <div>
        <img src={dropbox} alt="dropbox" />
      </div>
      <div>
        <img src={shopify} alt="shopify" />
      </div>
      <div>
        <img src={slack} alt="slack" />
      </div>
    </div>
  )
}

export default Brand