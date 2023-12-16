import api from '../core/api'

import { type Alarm } from './alarm.types'

export const getAlarms = () => {
  return api.get<{ alarms: Alarm[] }>('/alarms')
}

export const approveCertificationAlarm = ({
  alarmId,
  challengeCertificationId,
}: {
  alarmId: number
  challengeCertificationId: number
}) => {
  return api.post('/alarms/approve', { alarmId, challengeCertificationId })
}

export const rejectCertificationAlarm = ({
  alarmId,
  challengeCertificationId,
}: {
  alarmId: number
  challengeCertificationId: number
}) => {
  return api.post('/alarms/reject', { alarmId, challengeCertificationId })
}
