import React from 'react'
import { Logo } from '../../assets'
import { C2AButton } from '../../components'
import { FaCaretDown } from 'react-icons/fa'
import { GoArrowDownRight } from 'react-icons/go'
import './index.css'

const CARD_CONTENTS = [
  {
    key: 1,
    title: 'Free Edit'
  },
  {
    key: 2,
    title: 'Interactive'
  },
  {
    key: 3,
    title: 'Easy Interface'
  },
  {
    key: 4,
    title: 'Compare to other'
  },
]

const index = () => {
  return (
    <div className='main'>
      {/* Header */}
      <div className='header'>
        <div className='header-logo'>
          <Logo />
        </div>
        {/* Header Actions */}
        <div className='header-navigations'>
          {/* Anchor Tags */}
          <ul className='header-navigations-anchors'>
            <div>
              <li><a href='/'>Home page</a></li>
              <li><a href='/'>Generator</a></li>
              <li><a href='/'>Pricing-plan</a></li>
              <li><a href='/'>Blog-News</a></li>
            </div>
            <div>
              <li><a href='/'>About-us</a></li>
              <li><a href='/'>Features</a></li>
              <li><a href='/'>Collection-2023</a></li>
              <li><a href='/'>Career</a></li>
            </div>
          </ul>

          {/* Menu Button */}
          <div className='header-navigations-buttons'>
            <C2AButton
              title='Menu'
              icon={FaCaretDown}
              style={{
                backgroundColor: 'transparent'
              }}
            />
          </div>
        </div>
      </div>



      {/* Middle */}
      <div className='middle'>
        <div className='middle-text'>
          <h3>Revolutionize Your</h3>
          <h3>Creative Projects with<br />the Ultimate AI-Powered<br />Pattern</h3>
          <div className='middle-actions'>
            <C2AButton
              title="START GENERATING"
              style={{
                backgroundColor: '#212121',
                color: '#eeeeee'
              }}
            />
            <h5>The Next generation<br /><span>Production</span> for Designers</h5>
          </div>
        </div>
      </div>


      {/* Bottom */}
      <div className='bottom'>
        <div className='bottom-div-1'>
          <div className='bottom-div-1-contents'>
            <div className='bottom-div-1-images'>
              <img
                src='https://png.pngtree.com/png-vector/20220817/ourmid/pngtree-women-cartoon-avatar-in-flat-style-png-image_6110776.png'
              />
              <img
                src='https://w7.pngwing.com/pngs/4/736/png-transparent-female-avatar-girl-face-woman-user-flat-classy-users-icon-thumbnail.png'
              />
              <img
                src='https://www.shareicon.net/data/512x512/2016/09/15/829471_user_512x512.png'
              />
            </div>
            <h2 className='bottom-div-1-title'>Learn from best mentors</h2>
            <C2AButton
              style={{
                backgroundColor: 'transparent',
                border: '.5px solid white',
                color: 'white',
                fontSize: '1.5rem',
                width: '70%',
                padding: '1rem 1rem'
              }}
              title='START LEARNING'
              icon={GoArrowDownRight}
            />
          </div>
        </div>
        <div className='bottom-div-2'>
          <div>
            {CARD_CONTENTS.map((val) => {
              const { title, key } = val
              return (
                <div style={{
                  display: 'flex',
                  alignItems: 'end',
                  gap: '1rem'
                }}
                  key={key}
                >
                  <h2>{title}</h2>
                  <span style={{ fontSize: '2rem' }}><GoArrowDownRight /></span>
                </div>
              )
            })}
          </div>
        </div>
        <div className='bottom-div-3'>
          <h2><span>+20K</span> Glass Plattern generated this <br />week in the first release.</h2>
        </div>
      </div>
    </div>
  )
}

export default index