// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const onClickContentCheckbox = () => {
        onToggleShowContent()
      }

      const onClickLeftNavbarCheckbox = () => {
        onToggleShowLeftNavbar()
      }

      const onClickRightNavbarCheckbox = () => {
        onToggleShowRightNavbar()
      }

      return (
        <div className="layout-controller-container">
          <h1 className="layout-heading">Layout</h1>
          <div className="check-box-container">
            <input
              id="content"
              type="checkbox"
              className="check-box"
              onChange={onClickContentCheckbox}
              checked={showContent}
            />
            <label htmlFor="content" className="checkbox-label">
              Content
            </label>
          </div>
          <div className="check-box-container">
            <input
              id="leftNavbar"
              type="checkbox"
              className="check-box"
              onChange={onClickLeftNavbarCheckbox}
              checked={showLeftNavbar}
            />
            <label htmlFor="leftNavbar" className="checkbox-label">
              Left Navbar
            </label>
          </div>
          <div className="check-box-container">
            <input
              id="rightNavbar"
              type="checkbox"
              className="check-box"
              onChange={onClickRightNavbarCheckbox}
              checked={showRightNavbar}
            />
            <label htmlFor="rightNavbar" className="checkbox-label">
              Right Navbar
            </label>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
