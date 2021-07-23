import './index.css'

const SuggestionItem = props => {
  const {item, updateInput} = props

  const updateSearch = () => {
    updateInput(item)
  }

  return (
    <li className="list-item">
      <p className="desc">{item}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        className="arrow"
        alt="arrow"
        onClick={updateSearch}
      />
    </li>
  )
}

export default SuggestionItem
