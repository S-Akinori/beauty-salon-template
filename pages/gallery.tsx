import Image from "next/image"
import Container from "src/components/parts/Container"
import Fade from "src/components/parts/Fade"
import FV from "src/components/parts/FV"
import TitleText from "src/components/parts/TItleText"
import Layout from "src/components/templates/Layout"
import { galleryItems } from "src/contents/gallery"

const GalleryPage = () => {
  return (
    <Layout>
      <FV src="/images/hero1.jpg" title="Gallery" />
      <Container className="py-20">
        <Fade direction="bottom">
          <TitleText title="なりたい自分を見つける">
            経験豊富で個性あふれるスタイリストが揃っています。得意な技術を活かした施術でお客様の「なりたい」を実現します。
          </TitleText>
        </Fade>
      </Container>
      <Container>
        <div className="flex flex-wrap">
          {galleryItems.map(item => (
            <div key={item.id} className="relative p-2 w-1/2 aspect-square md:w-1/5">
              <Image
                src={item.image.src}
                width={1080}
                height={1080}
                objectFit="cover"
              />
            </div>
          ))}
        </div>
      </Container>
    </Layout>
  )
}

export default GalleryPage