import React, { useEffect, useState } from 'react';
import axios from 'axios';
import GameListContext from './GameListContext';

const GameListProvider = ({ children }) => {
  const [gameData, setGameData] = useState([]);
  const [page, setPage] = useState(1); 
  const [pageSize, setPageSize] = useState(10); 
  const [nameFilter, setNameFilter] = useState(''); 
  const [sortField, setSortField] = useState('firstReleaseDate'); 
  const [sortOrder, setSortOrder] = useState('asc');

  const fetchGameData = async () => {
    try {
      const response = await axios.get(import.meta.env.VITE_API_URL, {
        params: {
          'pagination[page]': page,
          'pagination[pageSize]': pageSize,
          [`filters[name][$containsi]`]: nameFilter,
          [`sort[${sortField}]`]: sortOrder,
        },
      });
      setGameData(response.data.data); 
    } catch (error) {
      console.error('Error fetching game data:', error);
    }
  };
 const setDefault=()=>{
  setNameFilter("");
  setSortField('firstReleaseDate');
  setPage(1);
  setSortOrder('asc')
 }
  useEffect(() => {
    fetchGameData();
  }, [page, pageSize, nameFilter, sortField, sortOrder]);

  return (
    <GameListContext.Provider
      value={{
        gameData,
        page,
        setPage,
        pageSize,
        setPageSize,
        nameFilter,
        setNameFilter,
        sortField,
        setSortField,
        sortOrder,
        setSortOrder,
        setDefault,
      }}
    >
      {children}
    </GameListContext.Provider>
  );
};

export default GameListProvider;
