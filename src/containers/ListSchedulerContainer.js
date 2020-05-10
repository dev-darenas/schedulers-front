import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import moment from 'moment'
import {
  Link
} from "react-router-dom";
import { getSchedulersAction } from '../reducers/scheduler'

function ListSchedulerContainer({ fetching, dates, getSchedulersAction }) {

  useEffect(() => {
    getSchedulersAction()
  }, []);

  if(fetching) return (
    <div className="spinner-border" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  )

  const format_date = (date) => {
    return moment(date).format("LLL")
  }

  return (
    <div className="container">
      <h4> Horarios Programados </h4>
      <Link to="/">Nuevo Horario</Link>
      <hr/>
      <ul>
        {
          dates.map(date => {
            return (
              <li key={date.id}> {format_date(date.reservation_date)} </li>
            )
          })
        }
      </ul>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    fetching: state.scheduler.fetching,
    dates: state.scheduler.dates
  }
}

export default connect(mapStateToProps, { getSchedulersAction })(ListSchedulerContainer);
