import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { DatePicker } from "@mui/x-date-pickers/DatePicker"
import React, { useState } from "react"
import dayjs, { Dayjs } from "dayjs"
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import 'dayjs/locale/uk';

const DatePick: React.FC = () => {

  const [date, setDate] = useState<Dayjs | null>(dayjs())

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale='uk'>
      <DatePicker sx={{'& .MuiOutlinedInput-notchedOutline': { borderColor: '#00889A', borderWidth: '2px' },
      '& .MuiFormLabel-root': { color: '#00889A', 
      // fontFamily: 'Montserrat',
      // fontStyle: 'normal', fontWeight: 400, fontSize: '12px', lineHeight: '15px', 
    }}}
      label="ДД/ММ/РРРР" format="DD/MM/YYYY" value={date} onChange={(newValue) => setDate(newValue)}/>
    </LocalizationProvider>
  )
}

export default DatePick