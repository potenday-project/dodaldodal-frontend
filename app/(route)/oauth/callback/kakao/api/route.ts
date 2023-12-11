import { KAKAO } from '@/app/_constants/kakao'

interface KakaoRequestBody {
  grant_type: string
  client_id: string
  redirect_uri: string
  code: string
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const code = searchParams.get('code')

  if (code === null) {
    return Response.json({
      error: 'code is required',
    })
  }

  const kakaoRequestBody: KakaoRequestBody = {
    grant_type: 'authorization_code',
    client_id: KAKAO.REST_API_KEY,
    redirect_uri: KAKAO.REDIRECT_URI,
    code,
  }

  const data = await fetch(`https://kauth.kakao.com/oauth/token`, {
    method: 'POST',
    headers: {
      Authorization: `469f80f467f98201541aadbfa83e8456`,
      'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
    },

    body: Object.keys(kakaoRequestBody)
      .map((k) => encodeURIComponent(k) + '=' + encodeURI(kakaoRequestBody[k as keyof KakaoRequestBody]))
      .join('&'),
  }).then(async (res) => await res.json())

  return Response.json(data)
}
