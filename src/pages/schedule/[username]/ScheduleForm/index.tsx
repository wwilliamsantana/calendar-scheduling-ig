import { useState } from 'react'
import { CalendarStep } from './CalendarStep'
import { ConfirmStep } from './ConfirmStep'
export function ScheduleForm() {
  const [selectedDate, setSelectedDate] = useState<Date | null>()

  function handleClearSelectedDateTime() {
    setSelectedDate(null)
  }

  if (selectedDate) {
    return (
      <ConfirmStep
        onCancelConfirmation={handleClearSelectedDateTime}
        schedulingDate={selectedDate}
      />
    )
  }

  return <CalendarStep onDateSelected={setSelectedDate} />
}
