import { CommonLink } from "src/types/CommonProps"

export const contactFV = {
  title: 'Contact',
  image: {
    src: '/images/hero_contact.jpg',
    width: 1920,
    height: 1080
  }
}

export const contactText = {
  title: 'ご予約、お問い合わせはこちらから',
  text: "お電話、ホットペッパー、問い合わせフォームよりご予約など受け付けております。お客様のご来店を楽しみにお待ちしてます。",
}

export const contactLinks: (CommonLink & {id: string})[] = [
  {
    id: 'tel',
    href: 'tel:1234-56-789',
    text: '電話でのご予約、お問い合わせ\n1234-56-789'
  },
  {
    id: 'hotpepper',
    href: 'https://beauty.hotpepper.jp/',
    target: '_blank',
    text: 'HOTPEPPER Beautyでのご予約'
  },
]