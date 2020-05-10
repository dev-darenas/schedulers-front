import React from 'react';
import {
  Col
} from 'react-bootstrap';
import Select from 'react-select'

const HoursScheduler = ({ time, onChange, dayId }) => {
  const hours = [...Array(24).keys()].map(n => {
    return {
      value: n,
      label: n
    }
  })

  const minutes = [0, 15, 30, 45].map(n => {
    return {
      value: n,
      label: n
    }
  })

  const onChangeSelectHour = (data) => {
    onChange({
      type: 'update_hour',
      id: dayId,
      timeId: time.id,
      value: data.value
    })
  }

  const onChangeSelectMinutes = (data) => {
    onChange({
      type: 'update_minutes',
      id: dayId,
      timeId: time.id,
      value: data.value
    })
  }

  return (
    <Col>
      <Select 
        options={hours}
        defaultValue={time.hour}
        onChange={onChangeSelectHour}
      />
      <Select
        options={minutes}
        defaultValue={time.minute}
        onChange={onChangeSelectMinutes}
      />
    </Col>
  )
}

export default HoursScheduler;
