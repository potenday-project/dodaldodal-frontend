import api from '../core/api'

import { type Alarm } from './alarm.types'

export const getAlarms = () => {
  return api.get<{ alarms: Alarm[] }>('/alarms')
}

export const approveCertificationAlarm = ({
  memberId,
  challengeCertificationId,
}: {
  memberId: number
  challengeCertificationId: number
}) => {
  return api.post('/alarms/approve', { memberId, challengeCertificationId })
}

export const rejectCertificationAlarm = ({
  memberId,
  challengeCertificationId,
}: {
  memberId: number
  challengeCertificationId: number
}) => {
  return api.post('/alarms/reject', { challengeCertificationId })
}
