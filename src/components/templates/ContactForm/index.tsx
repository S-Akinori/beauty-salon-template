import { useForm, SubmitHandler } from "react-hook-form"
import Button from "src/components/atoms/Button"
import Error from "src/components/atoms/Error"
import { contacFormInputs, ContactInputs } from "src/contents/contactFormInputs"
import { useState } from "react"

const ContactForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<ContactInputs>();
  const onSubmit: SubmitHandler<ContactInputs> = (data) => {
    console.log(data)
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {contacFormInputs.map((input) => (
      <div key={input.id}>
        <div className="md:flex items-center mb-8">
          <div className="md:w-60">
            <label htmlFor={input.id}>{input.label}</label>
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
      <div className="text-center"><Button>送信</Button></div>
    </form>
  )
}
export default ContactForm