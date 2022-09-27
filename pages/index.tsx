import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Button from 'src/components/atoms/Button'
import Carousel, { CarouselItem } from 'src/components/parts/Carousel'
import Container from 'src/components/parts/Container'
import Fade from 'src/components/parts/Fade'
import FV from 'src/components/parts/FV'
import GMap from 'src/components/parts/GMap'
import ImageBlind from 'src/components/parts/ImageBlind'
import ImageBox, { ImageBoxBody, ImageBoxTitle } from 'src/components/parts/ImageBox'
import Table, { TableCell, TableRow } from 'src/components/parts/Table'
import Title from 'src/components/parts/Title'
import TopTitleText from 'src/components/templates/TopTItleText'
import Layout from 'src/components/templates/Layout'
import MenuList from 'src/components/templates/MenuList'
import TopFV from 'src/components/templates/TopFV'
import { accessItems } from 'src/contents/access'
import { menus } from 'src/contents/Menu'
import { staffs } from 'src/contents/staff'

const Home: NextPage = () => {
  return (
    <Layout>
      <TopFV />
      <Container breakpoint='xl' className='py-20'>
        <Fade direction="bottom">
          <div className='md:flex items-center'>
            <div className='py-4 md:p-4 md:w-1/2'>
              <TopTitleText en='Concept' title={`女の子のステキと、\n女性の素敵をデザインする。`}>美容は、人を笑顔にし、人の心を豊かにする。美容は、人を幸せにし、人が美しく生きる、女性が生きる。美容は、人としての在り方、生き方につながる。そんな「美容のチカラ」を全てのお客様に、ご提案致します。</TopTitleText>
            </div>
            <div className='py-4 md:p-4 md:w-1/2'>
              <ImageBlind
                src='/images/image_concept.jpg'
                width={1280}
                height={835}
              />
            </div>
          </div>
        </Fade>
      </Container>
      <Container breakpoint='xl' className='py-20'>
        <Fade direction="bottom">
          <div className='md:flex flex-row-reverse items-center'>
            <div className='py-4 md:p-4 md:w-1/2'>
              <TopTitleText title={`人の数だけ、個性の数だけ、“髪質”がある。`}>人それぞれの個性があるように、その人特有の髪質もあります。ROSEでは、すべてのお客様の個性を生かすべく、オージュアソムリエの資格を持ったスペシャリストが、お客様一人一人の髪質に合わせたヘアケアを親身になってご対応させていただきます。カットやカラー、パーマだけでなく、髪そのものに対し妥協することなく向き合います。</TopTitleText>
            </div>
            <div className='py-4 md:p-4 md:w-1/2'>
              <ImageBlind
                src='/images/image_concept.jpg'
                width={1280}
                height={835}
              />
            </div>
          </div>
        </Fade>
      </Container>
      <div className='py-12 bg-accent text-accent-cont md:py-0'>
        <Container breakpoint='xl' className='md:!px-0'>
          <Fade direction="bottom">
            <div className='md:flex flex-row-reverse items-center'>
              <div className='p-4 px-0 md:px-4 md:w-1/3'>
                <TopTitleText beforeColor='base' en='Gallery' title={`365日、ステキな自分と、素敵な私。`}>
                  いつもの自分を、いつも以上に華やかに、愛らしく。自分をもっと好きになる、気づかなかった新しい“私”の発見をお手伝い。
                  <div className='mt-4'><Button href='/gallery'>Gallery</Button></div>
                </TopTitleText>
              </div>
              <div className='py-4 md:py-0 md:w-2/3'>
                <ImageBlind
                  src='/images/image_concept.jpg'
                  width={1280}
                  height={835}
                />
              </div>
            </div>
          </Fade>
        </Container>
      </div>
      <Container breakpoint='xl' className='py-20'>
        <Fade direction="bottom">
          <TopTitleText en='Menu' title={`メニュー`} row>カットはもちろん、シャンプーやカラー、パーマ全てに気を配っています。髪のこと、頭皮のことを考慮し、厳選したオーガニックな薬剤を揃えています。髪や頭皮でお悩みのお客様に合わせた最適な施術を行います。</TopTitleText>
          <div className='md:flex flex-wrap justify-between'>
            {menus.map(menu => (
              <div key={menu.id} className="md:col-2 md:p-4 my-20">
                <Fade direction="bottom">
                    <div className='mb-4 font-bold'>{menu.title}</div>
                    <div className='mb-4'>
                      <ImageBlind
                        src={menu.image.src}
                        width={menu.image.width}
                        height={menu.image.height}
                      />
                    </div>
                    <MenuList menuItems={menu.menuItems} />
                </Fade>
              </div>
            ))}
          </div>
        </Fade>
      </Container>
      <Container breakpoint='xl' className='py-20'>
        <Fade direction="bottom">
          <div className='mb-6'><TopTitleText en='Staff' title={`スタッフ`} row>一級の技術を持ったROSEのスタッフです。カットの技術はもちろん、髪質や頭皮のこと、お客様の健康面も考慮したスペシャリストです。どんなカットでもケアでも、ご相談に乗りますのでお気軽にどうぞ。</TopTitleText></div>
          <div className='md:ml-auto md:w-4/5'>
            <Carousel slidesPerView={{md: 2.5}}>
              {staffs.map(staff => (
                <CarouselItem key={staff.id}>
                  <ImageBox image={staff.image}>
                    <ImageBoxTitle className='text-base-color relative'>{staff.role}<br />{staff.title}</ImageBoxTitle>
                    <ImageBoxBody className='text-base-color relative'>{staff.text}</ImageBoxBody>
                  </ImageBox>
                </CarouselItem>
              ))}
            </Carousel>
          </div>
        </Fade>
      </Container>
      <Container breakpoint='xl' className='py-20'>
        <Fade direction="bottom">
          <div className='md:flex justify-between'>
            <div className='mb-6 md:mb-0 md:col-2'>
              <TopTitleText en='Access' title="アクセス">
                <Table>
                  {accessItems.map(item => (
                    <TableRow key={item.id}>
                      <TableCell tag='th'>{item.title}</TableCell>
                      <TableCell>{item.text}</TableCell>
                    </TableRow>
                  ))}
                </Table>
              </TopTitleText>
            </div>
            <div className='md:col-2'>
              <GMap src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.4880141904164!2d139.69838261575532!3d35.68960668019242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188cd0d6b1ba1f%3A0x1c32a1f1ecacfdd5!2sShinjuku%20Station!5e0!3m2!1sen!2sjp!4v1664078700802!5m2!1sen!2sjp'/>
            </div>
          </div>
        </Fade>
      </Container>
    </Layout>
  )
}

export default Home
