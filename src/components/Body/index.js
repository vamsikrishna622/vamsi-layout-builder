// Write your code here
import './index.css'
import ConfigurationContext from '../../context/ConfigurationContext'

const Body = () => {
  const getLeftNavbarMenu = () => (
    <div className="left-navbar-container">
      <h1 className="left-navbar-heading">Left Navbar Menu</h1>
      <ul className="left-navbar-list-items-container">
        <li className="left-navbar-item">Item 1</li>
        <li className="left-navbar-item">Item 2</li>
        <li className="left-navbar-item">Item 3</li>
        <li className="left-navbar-item">Item 4</li>
      </ul>
    </div>
  )

  const getContent = () => (
    <div className="content-container">
      <h1 className="content-heading">Content</h1>
      <p className="content-description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiumod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam.
      </p>
    </div>
  )

  const getRightNavbarMenu = () => (
    <div className="right-navbar-container">
      <h1 className="right-navbar-heading">Right Navbar Menu</h1>
      <div className="right-navbar-items-container">
        <div className="right-navbar-item">
          <p>Ad 1</p>
        </div>
        <div className="right-navbar-item">
          <p>Ad 2</p>
        </div>
      </div>
    </div>
  )
  return (
    <ConfigurationContext.Consumer>
      {value => {
        const {showContent, showLeftNavbar, showRightNavbar} = value
        return (
          <div className="body-container">
            {showLeftNavbar ? getLeftNavbarMenu() : null}
            {showContent ? getContent() : null}
            {showRightNavbar ? getRightNavbarMenu() : null}
          </div>
        )
      }}
    </ConfigurationContext.Consumer>
  )
}

export default Body
