import { ImageObject } from "src/types/CommonProps"

export const staffs: Staff[] = [
  {
    id: 'staff1',
    title: 'スタッフ1',
    role: '代表',
    experience: 'スタイリスト歴15年',
    text: 'お客様の悩みとしっかり向き合い、あなたに似合う最高の"美"を提案します！安心して、お任せください。素敵なデザインを一緒につくりましょう。',
    image: {
      src: '/images/hero1.jpg',
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
      src: '/images/hero2.jpg',
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
      src: '/images/hero3.jpg',
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