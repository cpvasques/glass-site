import { useState, useEffect } from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import Status from './components/Status';
import GameList from './components/GameList';

function App() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const getGames = async () => {
      const gamesFromServer = await fetchGames();
      setGames(gamesFromServer);
    }

    getGames();
  }, [])

  //Get Tasks
  const fetchGames = async () => {
    const res = await fetch('http://localhost:5000/games');
    const data = await res.json();

    return data;
  }

  return (
    <main className="App">
      <section className="glass">
        <Dashboard />
        <div className="games">
          <Status
            setGames={setGames}
          />
          <GameList
            games={games}
          />
        </div>
      </section>
    </main>
  );
}

export default App;
