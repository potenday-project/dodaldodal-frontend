export const share = {
  kakao: ({
    title,
    description,
    imageUrl,
    sendUrl,
  }: {
    title: string
    description: string
    imageUrl: string
    sendUrl: string
  }) => {
    const { Kakao } = window
    if (!Kakao.isInitialized()) {
      Kakao.init('f0146584008c5fad855abb3cfad073d7')
    }

    Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title,
        description,
        imageUrl,
        link: {
          mobileWebUrl: sendUrl,
          webUrl: sendUrl,
        },
      },
      buttons: [
        {
          title: '웹으로 보기',
          link: {
            mobileWebUrl: sendUrl,
            webUrl: sendUrl,
          },
        },
      ],
    })
  },
}
