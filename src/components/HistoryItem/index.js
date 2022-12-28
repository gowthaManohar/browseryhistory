import './index.css'

const HistoryItem = props => {
  const {data, uniqueno, ondelete} = props
  const {timeAccessed, logoUrl, title, domainUrl} = data

  const itemdelete = () => {
    ondelete(uniqueno)
    console.log(uniqueno)
  }

  return (
    <li className="items-container">
      <div className="listitem-container">
        <p className="time">{timeAccessed}</p>
        <img src={logoUrl} className="logo" alt="domain logo" />
        <p className="title">{title}</p>
        <p className="domainurl">{domainUrl}</p>
      </div>
      <button
        type="button"
        onClick={itemdelete}
        className="button"
        testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          className="deleteimg"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default HistoryItem
