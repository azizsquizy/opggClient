import React, { useEffect, useState } from 'react';
import './Champion.css';

const ChampionStat = ({ name,state, counters, data, positions, stats, img }) => {
  const [statsByRole, setStatsByRole] = useState([]);
  const [counterdis,setCounter] = useState(false)
  const [activePosition, setActivePosition] = useState(null);
  const [generaleStats, setGeneraleStats] = useState(true);
  const [counter, setCounters] = useState([]);
 useEffect(()=>{
 setCounter(state)
 })
  useEffect(() => {
    if (statsByRole.length > 0) {
      const CountersByRole = statsByRole[0].counters.map((element) => {
        const matchedCounter = data.find((element2) => element2.id=== element.champion_id);
        if (matchedCounter) {
          return {
            ...element,
            name: matchedCounter.name,
            image_url: matchedCounter.img,
            win_rate:Math.round((element.win/element.play)*100)
          };
        }
        return element;
      });
      setCounters(CountersByRole);
      setCounter(true)
    }
   
  }, [statsByRole, data]);
  

  const handleRole = (pos) => {
    setActivePosition(pos);
    const roleStats = positions.filter((element) => element.name === pos);
    setStatsByRole(roleStats);
    setGeneraleStats(false);
  };

  return (
    <div>
      <h3>Positions:</h3>
      <div className='positions'>
        <ul>
          <li className={activePosition === null ? 'active' : ''} onClick={() => setGeneraleStats(true)}>
            All
          </li>
          {positions &&
            positions.map((position, index) => (
              <li value={position.name} onClick={(e) => handleRole(e.target.getAttribute('value'))} key={index}>
                {position.name}
              </li>
            ))}
        </ul>
      </div>

      <div className='champ_info'>
        <h2>{name}</h2>
        <img src={img} alt={name} />
      </div>

      {generaleStats && (
        <div>
          <h3>General Stats:</h3>
          <div className='stats'>
            <p>Ban Rate: {stats.ban_rate * 100}</p>
            <p>KDA: {stats.kda * 100}</p>
            <p>Pick Rate: {stats.pick_rate * 100}</p>
            <p>Win Rate: {stats.win_rate * 100}</p>
          </div>
        </div>
      )}

      {statsByRole && !generaleStats && (
        <>
          <p className='item'>
            ROLE:<span>{statsByRole[0].name}</span>
          </p>
          <p className='item'>
            WINRATE:<span>{Math.round(statsByRole[0].stats.win_rate * 100)} %</span>
          </p>
          <p className='item'>
            KDA:<span>{statsByRole[0].stats.kda} </span>
          </p>
          <p className='item'>
            BAN RATE:<span>{Math.round(statsByRole[0].stats.ban_rate * 100)} %</span>
          </p>
          <p className='item'>
            PICK RATE<span>{statsByRole[0].stats.pick_rate * 100} %</span>
          </p>
        </>
      )}

      {( counterdis===true) && <h3>Counters:</h3>}
      <div className='counters'>
        <h3>Counters:</h3>
      {!generaleStats && counter.map((counter) => (
       <div className='counter'>
         <img src={counter.image_url}/>
       <p>{counter.name}</p>
       <p>Winrate: {counter.win_rate} %</p>
       </div>
     
        
      ))}
      </div>
    </div>
  );
};

export default ChampionStat;
