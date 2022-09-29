import Button from "src/components/atoms/Button"
import Container from "src/components/parts/Container"
import Fade from "src/components/parts/Fade"
import FV from "src/components/parts/FV"
import Title from "src/components/parts/Title"
import TitleText from "src/components/parts/TItleText"
import ContactForm from "src/components/templates/ContactForm"
import Layout from "src/components/templates/Layout"
import { commonContact } from "src/contents/common"
import { contactFV, contactLinks, contactText } from "src/contents/contact"

const ContactPage = () => {
  return (
    <Layout>
      <FV src={contactFV.image.src} title={contactFV.title} />
      <Container className="pt-20">
        <Fade direction="bottom">
          <TitleText title={contactText.title}>
            {contactText.text}
          </TitleText>
        </Fade>
      </Container>
      <Container className="py-8">
        <div className="p-6">
          {contactLinks.map(contactLink => (
            <div key={contactLink.id} className="mb-4 text-center">
              <Button href={contactLink.href} target={contactLink.target}>{contactLink.text}</Button>
            </div>
          ))}
        </div>
      </Container>
      <Container className="py-8">
        <ContactForm />
      </Container>
    </Layout>
  )
}

export default ContactPage