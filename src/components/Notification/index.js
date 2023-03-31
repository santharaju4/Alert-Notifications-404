// Write your code here

import {GrFormClose} from 'react-icons/gr'
import './index.css'

const Notification = props => {
  console.log(props)
  const {children} = props
  return (
    <div className="notification">
      <div className="notification-content">{children}</div>
      <GrFormClose className="close-icon" />
    </div>
  )
}

export default Notification
