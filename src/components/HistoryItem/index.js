const ListItem = props => {
  const {eachUser, deleteValue} = props
  const {id, title, timeAccessed, logoUrl, domainUrl} = eachUser
  const deleteUser = () => {
    deleteValue(id)
  }
  return (
    <li className="list-el">
      <div className="inner-container">
        <div className="inner-container">
          <p className="para">{timeAccessed}</p>
          <div className="url-container">
            <img
              className="img"
              src={logoUrl}
              id="Instagram"
              alt="domain logo"
            />
            <p className="label-el">{title}</p>
            <p className="light-label">{domainUrl}</p>
          </div>
        </div>
        <button
          className="custom-btn"
          type="submit"
          onClick={deleteUser}
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default ListItem
