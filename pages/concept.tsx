import clsx from "clsx"
import Container from "src/components/parts/Container"
import Fade from "src/components/parts/Fade"
import FV from "src/components/parts/FV"
import ImageBlind from "src/components/parts/ImageBlind"
import TitleText from "src/components/parts/TItleText"
import Layout from "src/components/templates/Layout"
import { conceptContents, conceptFV, conceptText } from "src/contents/concept"

const ConceptPage = () => {
  return (
    <Layout>
      <FV src={conceptFV.image.src} title={conceptFV.title} />
      <Container breakpoint='xl' className='py-20'>
        <Fade direction="bottom">
          <div className='py-4 md:p-4'>
            <TitleText title={conceptText.title}>{conceptText.text}</TitleText>
          </div>
        </Fade>
      </Container>
      <Container>
        {conceptContents.map((content, index) => (
          <div key={content.id} className="mb-20">
            <div className={clsx(['md:flex items-center justify-between', index % 2 === 1 ? 'flex-row-reverse' : ''])}>
              <div className="md:w-1/3 py-4 md:px-4">
                <Fade direction="bottom">
                  {content.text}
                </Fade>
              </div>
              <div className="md:w-2/3 py-4 md:px-4">
                <Fade direction="top">
                  <ImageBlind
                    src={content.image.src}
                    width={content.image.width}
                    height={content.image.height}
                  />
                </Fade>
              </div>
            </div>
          </div>
        ))}
      </Container>
    </Layout>
  )
}

export default ConceptPage