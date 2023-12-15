import api from '../core/api'

export const getChallenges = () => {
  return api.get('/challenges')
}
