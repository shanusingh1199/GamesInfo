import React, { useContext } from 'react'
import Container from '../UI/Container'
import FilterBox from '../UI/FilterBox'
import Card from '../UI/Card'
import GameListContext from '../../context/GameListContext'
import Pagination from '../UI/Pagination'

const VideoGames = () => {

    const {gameData} = useContext(GameListContext)


  return (
    <div className='mt-8 '>
        <Container className="flex gap-8 md:flex-row flex-col text-white justify-center">
            <div className='flex-[0.3]'>
                    <FilterBox/>
            </div>
            <div className=' flex flex-col flex-1 gap-3'>
                    

                    {
                        gameData && (
                            gameData.length > 0 ? (

                            gameData?.map(game=>(
                                <Card key={game.id} 
                                firstReleaseDate ={game.attributes.firstReleaseDate}
                                 name={game.attributes.name}
                                 summary={game.attributes.summary}
                                 rating = {game.attributes.rating}
                                />
                            )
                        ))
                        :(<div>Loading...</div>)
                        )
                    }
                    
                    <div className='py-8 flex justify-center items-center'>
                        <Pagination/>
                    </div>
            </div>
        </Container>
    </div>
  )
}

export default VideoGames
