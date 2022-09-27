import Button from "src/components/atoms/Button"
import Container from "src/components/parts/Container"
import FV from "src/components/parts/FV"
import Title from "src/components/parts/Title"
import ContactForm from "src/components/templates/ContactForm"
import Layout from "src/components/templates/Layout"
import { commonContact } from "src/contents/common"

const ContactPage = () => {
  return (
    <Layout>
      <FV src="/images/hero1.jpg" title="Contact" />
      <Container className="pt-20">
        <h2 className="text-center">ご予約、お問い合わせはこちら</h2>
      </Container>
      <Container className="">
        <div className="p-6">
          <div className="mb-4 text-center"><Button href={'tel:' + commonContact.tel}>電話で予約、お問い合わせはこちら<br />{commonContact.tel}</Button></div>
          <div className="text-center"><Button href={commonContact.hotpepperURL} target="_blank">HOTPEPPER Beautyでのご予約はこちら</Button></div>
        </div>
      </Container>
      <Container className="py-8">
        <ContactForm />
      </Container>
    </Layout>
  )
}

export default ContactPage