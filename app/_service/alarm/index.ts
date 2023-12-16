import api from '../core/api'

import { type Alarm } from './alarm.types'

export const getAlarms = () => {
  return api.get<{ alarms: Alarm[] }>('/alarms')
}

export const approveCertificationAlarm = ({ challengeCertificationId }: { challengeCertificationId: number }) => {
  return api.post('/alarms/approve', { challengeCertificationId })
}

export const rejectCertificationAlarm = ({ challengeCertificationId }: { challengeCertificationId: number }) => {
  return api.post('/alarms/reject', { challengeCertificationId })
}
