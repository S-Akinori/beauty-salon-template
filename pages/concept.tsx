import Container from "src/components/parts/Container"
import Fade from "src/components/parts/Fade"
import FV from "src/components/parts/FV"
import ImageBlind from "src/components/parts/ImageBlind"
import TitleText from "src/components/parts/TItleText"
import Layout from "src/components/templates/Layout"

const ConceptPage = () => {
  return (
    <Layout>
      <FV src="/images/hero1.jpg" title="CONCEPT" />
      <Container breakpoint='xl' className='py-20'>
        <Fade direction="bottom">
          <div className='py-4 md:p-4'>
            <TitleText title={`女の子のステキと、\n女性の素敵をデザインする。`}>美容は、人を笑顔にし、人の心を豊かにする。美容は、人を幸せにし、人が美しく生きる、女性が生きる。美容は、人としての在り方、生き方につながる。そんな「美容のチカラ」を全てのお客様に、ご提案致します。</TitleText>
          </div>
        </Fade>
      </Container>
      <Container className="mb-20">
        <div className="md:flex items-center justify-between">
          <div className="md:w-1/3 p-4">
            <Fade direction="bottom">
              丁寧なカウンセリングで、ご自宅でも再現しやすいスタイリングや、長くキレイを保てるホームケアなど、その場のみでのか可愛さや美しさとならないご提案をさせていただけたと思っております
            </Fade>
          </div>
          <div className="md:w-2/3 p-4">
            <Fade direction="top">
              <ImageBlind
                src='/images/image_concept.jpg'
                width={1280}
                height={835}
              />
            </Fade>
          </div>
        </div>
      </Container>
      <Container>
        <div className="md:flex flex-row-reverse items-center justify-between">
          <div className="md:w-1/3 p-4">
            <Fade direction="bottom">
              鏡に映る自分の姿が昨日と少しでも違ったら、きっといつもよりちょっといいことがあるはず。皆さまの毎日に、いくつものデザインを。
            </Fade>
          </div>
          <div className="md:w-2/3 p-4">
            <Fade direction="top">
              <ImageBlind
                src='/images/image_concept.jpg'
                width={1280}
                height={835}
              />
            </Fade>
          </div>
        </div>
      </Container>
    </Layout>
  )
}

export default ConceptPage