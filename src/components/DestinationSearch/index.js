import {Component} from 'react'
import DestinationItem from '../DestinationItem'
import './index.css'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  typingSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  render() {
    const {searchInput} = this.state
    const {destinationsList} = this.props
    const DestinationResults = destinationsList.filter(eachDestination =>
      eachDestination.name.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="main-search-container">
        <h1 className="destination-search-main-heading">Destination Search</h1>
        <div className="search-container">
          <input
            onChange={this.typingSearchInput}
            className="destination-search-box"
            type="search"
            placeholder="Search"
          />
          <img
            className="search-icon-display-css"
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search icon"
          />
        </div>
        <ul className="destination-search-search-results">
          {DestinationResults.map(eachDestination => (
            <DestinationItem
              cardItems={eachDestination}
              key={eachDestination.id}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
