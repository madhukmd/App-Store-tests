import './index.css'

const AppItem = props => {
  const {AppList} = props
  const {appName, imageUrl} = AppList
  return (
    <li className="AppCard">
      <img src={imageUrl} alt={appName} className="image-icon" />
      <p className="AppName">{appName}</p>
    </li>
  )
}
export default AppItem
