import {Component} from 'react'
import HistoryItem from '../HistoryItem'
import './index.css'

class BrowserHistory extends Component {
  state = {searchinput: '', temporarylist: []}

  componentDidMount() {
    const {initialHistoryList} = this.props
    this.setState({temporarylist: initialHistoryList})
  }

  onchangedata = event => {
    this.setState({searchinput: event.target.value})
  }

  ondelete = uniqueid => {
    const {temporarylist} = this.state

    const filterdata = temporarylist.filter(each => each.id !== uniqueid)

    this.setState({temporarylist: filterdata})
  }

  render() {
    const {searchinput, temporarylist} = this.state

    const searchdata = temporarylist.filter(each =>
      each.title.toLowerCase().includes(searchinput.toLowerCase()),
    )

    return (
      <div className="bg-container">
        <div className="top-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            className="historyimg"
            alt="app logo"
          />
          <div className="ipcontainer">
            <img
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              className="searchimg"
              alt="search"
            />
            <input
              onChange={this.onchangedata}
              type="search"
              placeholder="Search history"
              className="inputele"
            />
          </div>
        </div>

        <div className="ulitem-container">
          {searchdata.length === 0 ? (
            <p className="nohistory">There is no history to show</p>
          ) : (
            <ul className="history-items-container">
              {searchdata.map(eachitem => (
                <HistoryItem
                  ondelete={this.ondelete}
                  uniqueno={eachitem.id}
                  key={eachitem.id}
                  data={eachitem}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default BrowserHistory
