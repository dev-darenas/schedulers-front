import React from 'react';
import Select from 'react-select'
import {
  Row,
  Col,
  Button
} from 'react-bootstrap';
import moment from 'moment';
import HoursScheduler from './HoursScheduler';

const DayScheduler = ({ day, startDate, endDate, onChange }) => {
  const s = moment(startDate);
  const e = moment(endDate);

  const dayOptions = [...Array(1 + e.diff(s, 'days')).keys()].map(n => {
    return {
      value: moment(s).add(n, 'days').format('YYYY-MM-DD'),
      label: moment(s).add(n, 'days').format('dddd')
    }
  })

  const onChangeSelect = (data) => {
    onChange({
      type: 'update_day',
      value: data.value,
      id: day.id
    })
  }

  return (
    <Row>
      <Col>
        <Select 
          options={dayOptions}
          onChange={onChangeSelect}
          defaultValue={day.date}
        />
      </Col>
      <Col>
        <Row>
          <Col>
            <label>Hour:</label><br />
            <label>Minutes:</label>
          </Col>
            {
              day.times.map(time => {
                return (
                  <HoursScheduler
                    dayId={day.id}
                    key={time.id}
                    time={time}
                    onChange={onChange}
                  />
                )
              })
            }
          <Col>
            <Button onClick={() => { onChange({ type: 'add_hours', id: day.id }) }} >+</Button>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default DayScheduler;
