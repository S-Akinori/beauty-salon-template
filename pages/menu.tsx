import Button from "src/components/atoms/Button"
import Container from "src/components/parts/Container"
import Fade from "src/components/parts/Fade"
import FV from "src/components/parts/FV"
import ImageBlind from "src/components/parts/ImageBlind"
import TitleText from "src/components/parts/TItleText"
import Layout from "src/components/templates/Layout"
import MenuList from "src/components/templates/MenuList"
import { menuContactLink, menuFV, menus, menuText } from "src/contents/menu"


const MenuPage = () => {
  return (
    <Layout>
      <FV src={menuFV.image.src} title={menuFV.title} />
      <Container breakpoint='xl' className='pt-20'>
        <Fade direction="bottom">
          <TitleText title={menuText.title}>{menuText.text}</TitleText>
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
      <Container className="pb-20">
        <Fade direction="bottom">
          <div className="text-center"><Button href={menuContactLink.href}>{menuContactLink.linkText}</Button></div>
        </Fade>
      </Container>
    </Layout>
  )
}

export default MenuPage