import { ImageObject } from "src/types/CommonProps"

export const topStaff = {
  titleEn: 'Staff',
  titleJa: 'スタッフ',
  text: '一級の技術を持ったBeauty Salonのスタッフです。カットの技術はもちろん、髪質や頭皮のこと、お客様の健康面も考慮したスペシャリストです。どんなカットでもケアでも、ご相談に乗りますのでお気軽にどうぞ。',
  href: '/staff',
  linkText: 'スタッフへ'
}

export const staffFV = {
  title: 'Staff',
  image: {
    src: '/images/hero_staff.jpg',
    width: 1920,
    height: 1080
  }
}

export const staffText = {
  title: '確かな技術力と豊かな個性をもつスタイリストを紹介',
  text: "経験豊富で個性あふれるスタイリストが揃っています。得意な技術を活かした施術でお客様の「なりたい」を実現します。",
}

export const staffs: Staff[] = [
  {
    id: 'staff1',
    title: 'スタッフ1',
    role: '代表',
    experience: 'スタイリスト歴15年',
    text: 'お客様の悩みとしっかり向き合い、あなたに似合う最高の"美"を提案します！安心して、お任せください。素敵なデザインを一緒につくりましょう。',
    image: {
      src: '/images/image_staff1.jpg',
      width: 1080,
      height: 1080,
      objectFit: 'cover'
    },
    infoItems: [
      {
        id: 'info1',
        title: '得意なイメージ',
        text: 'ナチュラル'
      },
      {
        id: 'info2',
        title: '得意な技術',
        text: 'お客様の骨格や髪質に合わせたカットを提案します。グラデーションカラー、ゾーンカラーなどのデザイン性のあるカラーも得意なメニューのひとつです。'
      },
      {
        id: 'info3',
        title: '趣味・マイブーム',
        text: 'ラーメン屋巡り（オススメのラーメン屋がありましたら教えてください！）'
      },
    ]
  },
  {
    id: 'staff2',
    title: 'スタッフ2',
    role: '代表',
    experience: 'スタイリスト歴15年',
    text: 'お客様の悩みとしっかり向き合い、あなたに似合う最高の"美"を提案します！安心して、お任せください。素敵なデザインを一緒につくりましょう。',
    image: {
      src: '/images/image_staff2.jpg',
      width: 1080,
      height: 1080,
      objectFit: 'cover'
    },
    infoItems: [
      {
        id: 'info1',
        title: '得意なイメージ',
        text: 'ナチュラル'
      },
      {
        id: 'info2',
        title: '得意な技術',
        text: 'お客様の骨格や髪質に合わせたカットを提案します。グラデーションカラー、ゾーンカラーなどのデザイン性のあるカラーも得意なメニューのひとつです。'
      },
      {
        id: 'info3',
        title: '趣味・マイブーム',
        text: 'ラーメン屋巡り（オススメのラーメン屋がありましたら教えてください！）'
      },
    ]
  },
  {
    id: 'staff3',
    title: 'スタッフ3',
    role: '代表',
    experience: 'スタイリスト歴15年',
    text: 'お客様の悩みとしっかり向き合い、あなたに似合う最高の"美"を提案します！安心して、お任せください。素敵なデザインを一緒につくりましょう。',
    image: {
      src: '/images/image_staff3.jpg',
      width: 1080,
      height: 1080,
      objectFit: 'cover'
    },
    infoItems: [
      {
        id: 'info1',
        title: '得意なイメージ',
        text: 'ナチュラル'
      },
      {
        id: 'info2',
        title: '得意な技術',
        text: 'お客様の骨格や髪質に合わせたカットを提案します。グラデーションカラー、ゾーンカラーなどのデザイン性のあるカラーも得意なメニューのひとつです。'
      },
      {
        id: 'info3',
        title: '趣味・マイブーム',
        text: 'ラーメン屋巡り（オススメのラーメン屋がありましたら教えてください！）'
      },
    ]
  },
]

export interface Staff {
  id: string
  title: string
  role: string
  experience: string
  text: string
  image: ImageObject
  infoItems: {
    id: string
    title: string
    text: string
  }[]
}