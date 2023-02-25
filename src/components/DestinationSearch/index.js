import {Component} from 'react'
import DestinationItem from '../DestinationItem'
import './index.css'

class DestinationSearch extends Component {
  gettingSearchResults = event => {
    console.log(event.target.value)
  }

  render() {
    const {destinationsList} = this.props

    const DestinationResults = destinationsList.map(perItem => (
      <DestinationItem cardItems={perItem} key={perItem.id} />
    ))

    return (
      <div className="destination-search-container">
        <h1 className="destination-search-main-heading">Destination Search</h1>
        <div className="destination-search-container">
          <input
            onChange={this.gettingSearchResults}
            className="destination-search-box"
            type="search"
            placeholder="Search"
          />
        </div>
        <div className="destination-search-search-results">
          {DestinationResults}
        </div>
      </div>
    )
  }
}

export default DestinationSearch
