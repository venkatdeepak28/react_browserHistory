import {Component} from 'react'
import ListItem from '../HistoryItem'
import './index.css'

const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

class HistoryPage extends Component {
  state = {searchValue: '', listValue: initialHistoryList}

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
    const {listValue} = this.state
    const searchResults = listValue.filter(eachUser => {
      const lowerCase = eachUser.title.toLowerCase()
      return lowerCase.includes(searchValue.toLowerCase())
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
