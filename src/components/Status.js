const Status = ({ setGames }) => {
    //Get Tasks
    const getGames = async () => {
        const res = await fetch('http://localhost:5000/games');
        const data = await res.json();

        return data;
    }

    const filterGames = async (e) => {
        const data = await getGames();
        const filter = data.filter(game => {
            return game.title.toLowerCase().includes(e.target.value.toLowerCase());
        });
        setGames(filter);
    };

    return (
        <div className="status">
            <h1>Active Games</h1>
            <input
                onKeyUp={filterGames}
                type="text"
                placeholder="Search"
            />
        </div>
    )
}

export default Status
