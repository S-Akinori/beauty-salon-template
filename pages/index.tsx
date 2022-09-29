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
import { accessItems, topAccess } from 'src/contents/access'
import { menus, topMenu } from 'src/contents/menu'
import { staffs, topStaff } from 'src/contents/staff'
import { topConcepts } from 'src/contents/concept'
import clsx from 'clsx'
import { galleryItems, topGallery } from 'src/contents/gallery'

const Home: NextPage = () => {
  return (
    <Layout>
      <TopFV />
      {topConcepts.map((topConcept, index) => (
        <Container breakpoint='xl' className='py-20' key={topConcept.id}>
          <Fade direction="bottom">
            <div className={clsx(['md:flex items-center', index % 2 === 1 ? 'flex-row-reverse	' : ''])}>
              <div className='py-4 md:p-4 md:w-1/2'>
                <TopTitleText en={topConcept.titleEn} title={topConcept.titleJa}>
                  <div>{topConcept.text}</div>
                  {topConcept.href && <div className='mt-4'><Button href={topConcept.href}>{topConcept.linkText}</Button></div>}
                </TopTitleText>
              </div>
              <div className='py-4 md:p-4 md:w-1/2'>
                <ImageBlind
                  src={topConcept.image.src}
                  width={topConcept.image.width}
                  height={topConcept.image.height}
                />
              </div>
            </div>
          </Fade>
        </Container>
      ))}
      <div className='py-12 bg-accent text-accent-cont md:py-0'>
        <Container breakpoint='xl' className='md:!px-0'>
          <Fade direction="bottom">
            <div className='md:flex flex-row-reverse items-center'>
              <div className='p-4 px-0 md:px-4 md:w-1/2 lg:w-2/5'>
                <TopTitleText beforeColor='base' en={topGallery.titleEn} title={topGallery.titleJa}>
                  {topGallery.text}
                  <div className='mt-4'><Button href={topGallery.href}>{topGallery.linkText}</Button></div>
                </TopTitleText>
              </div>
              <div className='py-4 md:py-0 md:w-1/2 lg:w-3/5'>
                <Carousel autoPlay navigation={false}>
                  {topGallery.items.map(item => (
                    <CarouselItem key={item.id}>
                      <div className='pointer-events-none' style={{fontSize: 0}}>
                        <Image
                          src={item.image.src}
                          width={1080}
                          height={1080}
                          objectFit="cover"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </Carousel>
              </div>
            </div>
          </Fade>
        </Container>
      </div>
      <Container breakpoint='xl' className='py-20'>
        <Fade direction="bottom">
          <TopTitleText en={topMenu.titleEn} title={topMenu.titleJa} row>{topMenu.text}</TopTitleText>
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
          <div className='text-center'><Button href={topMenu.href}>{topMenu.linkText}</Button></div>
        </Fade>
      </Container>
      <Container breakpoint='xl' className='py-20'>
        <Fade direction="bottom">
          <div className='mb-6'><TopTitleText en={topStaff.titleEn} title={topStaff.titleJa} row>{topStaff.text}</TopTitleText></div>
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
            <div className='mt-16'><Button href={topStaff.href}>{topStaff.linkText}</Button></div>
          </div>
        </Fade>
      </Container>
      <Container breakpoint='xl' className='py-20'>
        <Fade direction="bottom">
          <div className='md:flex justify-between'>
            <div className='mb-6 md:mb-0 md:col-2'>
              <TopTitleText en={topAccess.titleEn} title={topAccess.titleJa}>
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
              <GMap src={topAccess.gmap}/>
            </div>
          </div>
        </Fade>
      </Container>
    </Layout>
  )
}

export default Home
