import React from 'react';
import Champion from './Champion';
import { useEffect, useState } from 'react';
import ChampionStat from '../components/ChampionStat';
import "./Champions.css";
import { Filter } from '../constants/filters.js';
import Search from '../components/Search';

const Champions = () => {
  useEffect(() => {
    const fetchData = async () => { 
      const response = await fetch("http://localhost:3000/champions", {
        method: "GET",
      });
      const data = await response.json();
      setFetched(true);
      setData(data);
    };
    fetchData();
    console.log(data);
  }, []);




  const filterByRole = (pos) => {
    const filteredTable = statsData.filter((element) => {
      return element.positions[0] && element.positions[0].name === pos || element.positions[1] && element.positions[1].name === pos;
    });
  
    setChampsByRole(filteredTable);
    setFetched(false)
  };
  
  


  useEffect(() => {
    const fetchStats = async () => {
      const response = await fetch("http://localhost:3000/");
      const data = await response.json();
      setStatsData(data);
    };
    fetchStats();
    console.log(statsData)
  }, []);

  const [data, setData] = useState(null);
  const [fetched, setFetched] = useState(false);
  const [statsData, setStatsData] = useState(null);
  const [championStats, setChampionStats] = useState(null);
  const[stat,setStat] = useState(false)
  const [champsbyRole,setChampsByRole] = useState(null)
  const onSearch = (searchQuery)=>{

  }

  const handleStat = (id) => {
            const championStat = statsData.find((element)=>element.id===id)
            setChampionStats(championStat)
  };

  return (
    
    <div className='champions'>
        <Search />
            <div className='role-filters'>
                  <ul>
                        <li value="All" onClick={()=>{setFetched(true)}}>All</li>
                        <li value="ADC" onClick={(e)=>{filterByRole(e.target.getAttribute("value"))}}>ADC</li>
                        <li value="TOP" onClick={(e)=>{filterByRole(e.target.getAttribute("value"))}}>TOP</li>
                        <li value="JUNGLE" onClick={(e)=>{filterByRole(e.target.getAttribute("value"))}}>JUNGLE</li>
                        <li value="MID" onClick={(e)=>{filterByRole(e.target.getAttribute("value"))}}>MID</li>
                        <li value="SUPPORT" onClick={(e)=>{filterByRole(e.target.getAttribute("value"))}}>SUPPORT</li>
                  
                  </ul>
            </div>


            <div className='champs_container'>
                <div className='champs'>
                        <div className='champion-list'>
                            {fetched && data.map((element) => (
                            <div onClick={() => handleStat(element.id)} key={element.id}>
                                <Champion name={element.name} img={element.image_url} />
                            </div>
                            ))}
                            {champsbyRole && champsbyRole.map((element) => (
                            <div onClick={() => handleStat(element.id)} key={element.id}>
                                <Champion name={element.name} img={element.img} />
                            </div>
                            ))}
                        </div>
                </div>
              
     
                <div className='champ_stats'>
                            {championStats && (
                                                        
                                <ChampionStat state={false} name={championStats.name} img={championStats.img} data={statsData} stats={championStats.stats} counters={championStats} positions={championStats.positions}/> 
                            )}
                </div>
                       
                </div>

    </div>
  );
};

export default Champions;
