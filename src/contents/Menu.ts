export const cutMenu = {
  id: 'cut',
  title: 'CUT',
  image: {
    src: '/images/image_concept.jpg',
    width: 1280,
    height: 835
  },
  menuItems: [
    {
      id: 'cut1',
      title: 'Directorカット',
      text: 'シャンプー・ブロー込み',
      price: '￥5,000'
    },
    {
      id: 'cut2',
      title: 'Stylistカット',
      text: 'シャンプー・ブロー込み',
      price: '￥4,200'
    },
    {
      id: 'cut3',
      title: '前髪カット',
      price: '￥1,200'
    },
  ]
}

export const permMenu = {
  id: 'perm',
  title: 'PERM',
  image: {
    src: '/images/image_concept.jpg',
    width: 1280,
    height: 835
  },
  menuItems: [
    {
      id: 'perm1',
      title: 'ニュアンスパーマ',
      text: 'シャンプー・ブロー込み',
      price: '￥4,200'
    },
    {
      id: 'cut2',
      title: 'ニュアンスコスメパーマ',
      text: '化粧品登録された薬剤',
      price: '￥5,200'
    },
    {
      id: 'cut3',
      title: 'デジタルパーマ',
      text: '形状記憶で長持ち',
      price: '￥7,200'
    },
    {
      id: 'cut4',
      title: '特殊パーマ',
      text: 'スパイラル、ツイストなど',
      price: '￥10,200'
    },
  ]
}

export const menus = [
  cutMenu,
  permMenu
]