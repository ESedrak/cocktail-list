const More = () => {
  const handleSearch = (e) => {
    e.preventDefault();
    const urlCocktail = `www.thecocktaildb.com/api/json/v1/1/search.php?s`;
  };

  return (
    <div className="More">
      <h2>More(... in progress)</h2>
      <form onSubmit={handleSearch}>
        <input type="search" placeholder="Search for a drink"></input>
        <button type="button" onClick={handleSearch}>
          🔍
        </button>
      </form>
    </div>
  );
};

export default More;
