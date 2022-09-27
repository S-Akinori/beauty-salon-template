import Container from "src/components/parts/Container"
import Fade from "src/components/parts/Fade"
import FV from "src/components/parts/FV"
import ImageBlind from "src/components/parts/ImageBlind"
import TitleText from "src/components/parts/TItleText"
import Layout from "src/components/templates/Layout"
import MenuList from "src/components/templates/MenuList"
import { menus } from "src/contents/Menu"

const MenuPage = () => {
  return (
    <Layout>
      <FV src="/images/hero1.jpg" title="MENU" />
      <Container breakpoint='xl' className='py-20'>
        <Fade direction="bottom">
          <TitleText title="様々なメニューをご提供">カットはもちろん、シャンプーやカラー、パーマ全てに気を配っています。髪のこと、頭皮のことを考慮し、厳選したオーガニックな薬剤を揃えています。髪や頭皮でお悩みのお客様に合わせた最適な施術を行います。</TitleText>
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
    </Layout>
  )
}

export default MenuPage