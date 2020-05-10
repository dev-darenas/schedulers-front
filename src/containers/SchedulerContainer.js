import React from 'react';
import { connect } from 'react-redux'
import FormScheduler from '../components/scheduler/FormScheduler'
import {
  createSchedulersAction
} from '../reducers/scheduler'
import Notifications from '../components/shared/Notifications'
import moment from 'moment';
import {
  Link
} from "react-router-dom";

function SchedulerContainer({ addScheduler, fetching }) {
  if(fetching) return (
    <div className="spinner-border" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  )

  return (
    <div className="container">
      <h4> Programar Horarios </h4>
      <Link to="/list">Horarios</Link>
      <hr />
      <Notifications />
      <FormScheduler addScheduler={addScheduler} />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    fetching: state.scheduler.fetching
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addScheduler: (scheduler) => {
      scheduler.days_attributes = []

      scheduler.days.map(day => {
        day.times.map(time => {
          scheduler.days_attributes.push({
            reservation_date: moment(`${day.date} ${time.hour}:${time.minute}`).format()
          })
        })
      })

      scheduler.days = null
      createSchedulersAction(scheduler)(dispatch, null)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SchedulerContainer);
