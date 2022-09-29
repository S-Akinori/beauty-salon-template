export interface ContactInputs {
  name: string
  kana: string
  email: string
  date: string
  content: string
}
export interface ContactFormInputs {
  id: string
  name: keyof ContactInputs
  type: string
  label: string
  validation?: {
    [key: string]: string
  }
}
export const contacFormInputs: ContactFormInputs[] = [
  {
    id: 'name',
    name: 'name',
    type: 'text',
    label: 'お名前*',
    validation: {
      required: '入力してください'
    }
  },
  {
    id: 'kana',
    name: 'kana',
    type: 'text',
    label: 'フリガナ*',
    validation: {
      required: '入力してください'
    }
  },
  {
    id: 'email',
    name: 'email',
    type: 'email',
    label: 'メールアドレス*',
    validation: {
      required: '入力してください'
    }
  },
  {
    id: 'date',
    name: 'date',
    type: 'date',
    label: '予約日時',
  },
  {
    id: 'content',
    name: 'content',
    type: 'textarea',
    label: 'ご質問・ご要望',
  },
]