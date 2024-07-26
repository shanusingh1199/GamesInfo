import React from 'react'
import { Navlinks } from '../../util'
import Container from '../UI/Container'
import { NavLink } from 'react-router-dom'

const Header = () => {



  return (
    <div className=' sticky top-0 z-10 bg-[#081221]'>
        <Container>
      <ul className='flex gap-4 text-xl font-medium'>
        {
           Navlinks.map( navlink =>(
            <li key={navlink.id} className=' text-text-headings'> 
                <NavLink to={navlink.link}>
                {navlink.name}
                </NavLink>
                
                </li>
           ) ) 
        }
      </ul>
      </Container>

    </div>
  )
}

export default Header
