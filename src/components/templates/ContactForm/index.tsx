import { useForm, SubmitHandler } from "react-hook-form"
import Button from "src/components/atoms/Button"
import Error from "src/components/atoms/Error"
import { contacFormInputs, ContactInputs } from "src/contents/contactFormInputs"
import { useState } from "react"
import Spinner from "src/components/atoms/Icons/Spinner"

const ContactForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<ContactInputs>();
  const [sending, setSending] = useState(false)
  const [message, setMessage] = useState('')
  const onSubmit: SubmitHandler<ContactInputs> = async (data) => {
    console.log(data)
    setSending(true)
    try {
      const res = await fetch('/api/contactMail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      setSending(false)
      setMessage('お問い合わせを受け付けました。確認メールを送信します。メールが届かない場合、お手数ですが再度お問い合わせください。')
    } catch(e) {
      setSending(false)
      setMessage('エラーが発生しました。お手数ですが、お時間を空けて改めてご注文してください')
    }
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {contacFormInputs.map((input) => (
      <div key={input.id}>
        <div className="md:flex items-center mb-8">
          <div className="md:w-80">
            <label htmlFor={input.id} className="whitespace-pre-wrap">{input.label}</label>
          </div>
          <div className="w-full">
            {input.type === 'textarea' && (
              <textarea
                id={input.id}
                className="w-full"
                {...register(input.name, input.validation)}
                rows={5}
              ></textarea>
            )}
            {input.type !== 'textarea' && (
              <input 
                id={input.id}
                className="w-full"
                type={input.type}
                {...register(input.name, input.validation)}
              />
            )}
          {errors[input.name] && <Error>{errors[input.name]?.message}</Error>}
          </div>
        </div>
      </div>
      ))}
      <div className="text-center"><Button>{sending ? <Spinner /> : '送信'}</Button></div>
      {message && (<div className="mt-8 p-4 border border-accent">{message}</div>)}
    </form>
  )
}
export default ContactForm