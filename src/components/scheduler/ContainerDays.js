import React from 'react';
import { Button } from 'react-bootstrap';
import DayScheduler from './DayScheduler';

const ContainerDays = ({ days, startDate, endDate, onChange }) => {
  return (
    <div>
      { 
        days.map((day) => {
          return <DayScheduler
                    key={day.id}
                    onChange={onChange}
                    startDate={startDate}
                    endDate={endDate}
                    day={day}
                  />
        })
      }
      <Button onClick={() => { onChange({ type: 'add_day' }) }} >Agregar dia</Button>
    </div>
  )
}

export default ContainerDays;
