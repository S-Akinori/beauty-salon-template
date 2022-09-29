export const topMenu = {
  titleEn: 'Menu',
  titleJa: 'メニュー',
  text: 'カットはもちろん、シャンプーやカラー、パーマ全てに気を配っています。髪のこと、頭皮のことを考慮し、厳選したオーガニックな薬剤を揃えています。髪や頭皮でお悩みのお客様に合わせた最適な施術を行います。',
  href: '/menu',
  linkText: 'メニューへ'
}

export const menuFV = {
  title: 'Menu',
  image: {
    src: '/images/hero_menu.jpg',
    width: 1920,
    height: 1080
  }
}

export const menuText = {
  title: '様々なメニューをご提供',
  text: "カットはもちろん、シャンプーやカラー、パーマ全てに気を配っています。髪のこと、頭皮のことを考慮し、厳選したオーガニックな薬剤を揃えています。髪や頭皮でお悩みのお客様に合わせた最適な施術を行います。",
}

export const menuContactLink = {
  href: '/contact',
  linkText: 'ご予約はこちら'
}

export const cutMenu = {
  id: 'cut',
  title: 'CUT',
  image: {
    src: '/images/image_menu_cut.jpg',
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
    src: '/images/image_menu_perm.jpg',
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