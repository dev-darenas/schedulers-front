import React from 'react';
import { Alert } from "react-bootstrap";
import { connect } from 'react-redux';
import { setShow } from '../../reducers/notifications';

function Notifications({ message, variant, show, setShow }){
  if (show) {
    return (
      <Alert variant={variant} onClose={() => setShow(false)} dismissible>
        <p>{message}</p>
      </Alert>
    )
  }
  return <div></div>
}

const mapStateToProps = state => {
  return {
    message: state.notifications.message,
    variant: state.notifications.variant,
    show: state.notifications.show
  }
}

export default connect(mapStateToProps, { setShow })(Notifications);
