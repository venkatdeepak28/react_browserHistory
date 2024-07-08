import {Component} from 'react'
import ListItem from '../HistoryItem'
import './index.css'

class HistoryPage extends Component {
  state = {searchValue: '', listValue: null}

  changeValue = event => {
    this.setState({searchValue: event.target.value})
  }

  deleteWebsite = id => {
    const {listValue} = this.state
    const updatedList = listValue.filter(eachValue => eachValue.id !== id)
    this.setState({listValue: updatedList})
  }

  render() {
    let authButton
    const {searchValue} = this.state
    const {historyList} = this.props
    let {listValue} = this.state
    listValue = historyList
    const searchResults = historyList.filter(eachUser => {
      const lowerCase = eachUser.title.toLowerCase()
      return lowerCase.includes(searchValue)
    })
    if (searchResults.length === 0) {
      authButton = <p className="main-heading">There is no history to show</p>
    } else {
      authButton = (
        <div className="content-container">
          <ul className="list-prop">
            {searchResults.map(eachValue => (
              <ListItem
                key={eachValue.id}
                eachUser={eachValue}
                deleteValue={this.deleteWebsite}
              />
            ))}
          </ul>
        </div>
      )
    }
    return (
      <div>
        <div className="nav-bar">
          <img
            className="logo"
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
          />
          <div className="row-container">
            <div className="search-container">
              <img
                className="search-img"
                src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                alt="search"
              />
            </div>
            <div className="input-container">
              <input
                type="search"
                value={searchValue}
                className="input-el"
                placeholder="search History"
                onChange={this.changeValue}
              />
            </div>
          </div>
        </div>
        <div className="main-container">{authButton}</div>
      </div>
    )
  }
}

export default HistoryPage
