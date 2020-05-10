import React, { useState } from 'react';
import { Form, Col, Button } from 'react-bootstrap';
import { useForm, Controller } from 'react-hook-form';
import DatePicker from 'react-datepicker';
import ContainerDays from './ContainerDays';
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';

const FormScheduler = ({ addScheduler }) => {
  const { handleSubmit, control } = useForm()
  const [days, setDays] = useState([]);

  const tomorrow = () => {
    var tomorrow_date = new Date();
    tomorrow_date.setDate(tomorrow_date.getDate() + 1);
    return tomorrow_date;
  }

  const [startDate, setStartDate] = useState(tomorrow());
  const [endDate, setEndDate] = useState(tomorrow());

  const setDaysScheduler = ({ type, value, id, timeId }) => {
    switch (type) {
      case 'add_day':
        days.push({
          id: days.length,
          date: moment(startDate).format('YYYY-MM-DD'),
          times: []
        })
      break;
      case 'update_day':
        days[id].date = value
      break;
      case 'add_hours':
        days[id].times.push(
          {
            id: days[id].times.length,
            hour: '00',
            minute: '00'
          }
        )
      break;
      case 'update_hour':
        days[id].times[timeId].hour = value
      break;
      case 'update_minutes':
        days[id].times[timeId].minute = value
      break;
      default:
    }

    setDays([...days])
  }

  return(
    <Form onSubmit={handleSubmit(addScheduler)} >
      <Form.Row>
        <Form.Group as={Col} controlId="starts_date">
          <Form.Label>Fecha de Inicio</Form.Label>

          <Controller
            as={
              <DatePicker
                selected={startDate}
                selectsStart
                startDate={startDate}
                endDate={endDate}
                minDate={new Date()}
              />
            }
            name="starts_at"
            control={control}
            onChange={([date]) => {
              setStartDate(date)
              return date;
            }}
            defaultValue={startDate}
          />

        </Form.Group>

        <Form.Group as={Col} controlId="end_date">
          <Form.Label>Fecha Fin</Form.Label>

          <Controller
            as={
              <DatePicker
                selected={endDate}
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                minDate={startDate}
              />
            }
            name="ends_at"
            control={control}
            onChange={([date]) => {
              setEndDate(date)
              return date;
            }}
            defaultValue={endDate}
          />

        </Form.Group>
      </Form.Row>

      <Form.Group controlId="formGridAddress1">
        <hr />
        <Controller
            as={
              <ContainerDays
                days={days}
                startDate={startDate}
                endDate={endDate}
              />
            }
            name="days"
            control={control}
            onChange={([date]) => {
              setDaysScheduler(date)
              return days;
            }}
            defaultValue={[]}
          />
      </Form.Group>

      <Form.Group as={Col} >
        <Button variant="warning" type="submit" >REGISTRAR HORARIO</Button>
      </Form.Group>
    </Form>
  )
}

export default FormScheduler;
