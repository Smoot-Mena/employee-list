import "../css/SearchBar.css";

const SearchBar = ({handleSearch, input}) => {
    return (
    <section id='search-bar'>
    <input type="text" placeholder='Search Employee' onChange={handleSearch} value={input} />
</section>
)
}

export default SearchBar;