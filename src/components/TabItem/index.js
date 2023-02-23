import './index.css'

const TabItem = props => {
  const {TabList, clickTabItem, isActive} = props
  const {tabId, displayText} = TabList

  const sendId = () => {
    clickTabItem(tabId)
  }

  const activeBar = isActive ? ['active', 'color'] : ''

  return (
    <li className={`buttonBar ${activeBar[0]}`}>
      <button
        type="button"
        className={`button ${activeBar[1]}`}
        onClick={sendId}
      >
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
