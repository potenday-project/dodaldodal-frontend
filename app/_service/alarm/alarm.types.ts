export interface Alarm {
  id: number
  member_id: number
  challenge_certification_id: number
  alarm_type: 'REQUEST' | 'RE-REQUEST' | 'SUCCESS'
  authenticateImageUrl: 'https://dodals3.s3.ap-northeast-2.amazonaws.com/1702758664871'
  name: string
}
