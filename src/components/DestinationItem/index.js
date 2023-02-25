import './index.css'

const DestinationItem = props => {
  const {cardItems} = props
  const {name, imgUrl} = cardItems
  return (
    <div className="card-container">
      <div className="card-inner-container">
        <img className="item-image-control" src={imgUrl} alt={name} />
        <p className="item-heading">{name}</p>
      </div>
    </div>
  )
}

export default DestinationItem
