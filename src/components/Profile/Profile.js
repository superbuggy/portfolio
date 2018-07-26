import React from 'react'
import './Profile.css'
import { Moon } from '../Moon/Moon'
import NameHeader from '../NameHeader/NameHeader'

export const Profile = props => {
  return (
    <div className='profile'>
      <header>
        <Moon size={window.innerHeight / 4} />
        {/* <h1>
          James
        </h1>
        <h1>Reichard</h1> */}
        <NameHeader text={'James'} order={1} />
        <NameHeader text={'Reichard'} order={2} />
      </header>

      <div className='description'>
        <p className='passion'> <span className='heart'>❤</span> code </p>
        <p className='passion'> <span className='heart'>❤</span> music </p>
        <p className='passion'> <span className='heart'>❤</span> education </p>
      </div>
    </div>
  )
}
