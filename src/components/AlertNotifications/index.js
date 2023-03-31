// Write your code here
import {Component} from 'react'

import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'

import Notification from '../Notification'

import './index.css'

class AlertNotification extends Component {
  render() {
    return (
      <div className="notification-container">
        <div className="response-container">
          <h1 className="title">Alert Notifications</h1>

          <Notification>
            <AiFillCheckCircle className="success icon" />
            <div className="message-container">
              <h1 className="message-heading success">Success</h1>
              <p className="description">
                You can access all the files in the folder
              </p>
            </div>
          </Notification>
          <Notification>
            <RiErrorWarningFill className="error icon" />
            <div className="message-container">
              <h1 className="message-heading error">Error</h1>
              <p className="description">
                Sorry, you are not authorized to have access to delete the file
              </p>
            </div>
          </Notification>
          <Notification>
            <MdWarning className="warning icon" />
            <div className="message-container">
              <h1 className="message-heading warning">Warning</h1>
              <p className="description">
                Viewers of this file can see comments and suggestions
              </p>
            </div>
          </Notification>
          <Notification>
            <MdInfo className="info icon" />
            <div className="message-container">
              <h1 className="message-heading info">Info</h1>
              <p className="description">
                Anyone on the internet can view these files
              </p>
            </div>
          </Notification>
        </div>
      </div>
    )
  }
}
export default AlertNotification
