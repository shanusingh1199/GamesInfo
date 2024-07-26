import React, { useContext } from 'react'
import GameListContext from '../../context/GameListContext'

const Pagination = () => {

  const {page,setPage} = useContext(GameListContext)

  return (
    <div className='space-x-8'>
        <button onClick={()=>setPage(prev => prev-1)} disabled={page === 1} className={`${page === 1 ? "bg-button-accent/60":"bg-button-accent"} text-text-headings font-medium px-2 py-1 rounded-lg text-lg`}>Prev</button>
        <button onClick={()=>setPage(prev => prev+1)} className=' bg-button-accent text-text-headings font-medium px-2 py-1 rounded-lg text-lg'>Next</button>
    </div>
  )
}

export default Pagination
