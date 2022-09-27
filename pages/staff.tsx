import Image from "next/image"
import Container from "src/components/parts/Container"
import Fade from "src/components/parts/Fade"
import FV from "src/components/parts/FV"
import Table, { TableCell, TableRow } from "src/components/parts/Table"
import TitleText from "src/components/parts/TItleText"
import Layout from "src/components/templates/Layout"
import { staffs } from "src/contents/staff"

const StaffPage = () => {
  return (
    <Layout>
      <FV src="/images/hero1.jpg" title="STAFF" />
      <Container className="py-20">
        <Fade direction="bottom">
          <TitleText title="スタイリスト紹介">
            経験豊富で個性あふれるスタイリストが揃っています。得意な技術を活かした施術でお客様の「なりたい」を実現します。
          </TitleText>
        </Fade>
      </Container>
      <div className="bg-main py-20">
        <Container>
          {staffs.map(staff => (
            <div key={staff.id} className="md:flex items-stretch mb-20">
              <div className="md:w-1/2">
                <Fade className="h-full" direction="top">
                  <div className="h-full" style={{fontSize: 0}}>
                    <Image 
                      src={staff.image.src}
                      width={staff.image.width}
                      height={staff.image.height}
                      objectFit="cover"
                    />
                  </div>
                </Fade>
              </div>
              <div className="md:w-1/2">
                <Fade className="bg-white h-full p-4" key={staff.id} direction="bottom">
                  <div className="mb-6 bg-main p-4">
                    <div>{staff.role}</div>
                    <div  className="text-xl">{staff.title}</div>
                    <div>{staff.experience}</div>
                  </div>
                  <div className="mb-6">{staff.text}</div>
                  <div className="text-sm">
                    <Table>
                      {staff.infoItems.map(info => (
                        <TableRow key={info.id} border="bottom">
                          <TableCell nowrap>{info.title}</TableCell>
                          <TableCell>{info.text}</TableCell>
                        </TableRow>
                      ))}
                    </Table>
                  </div>
                </Fade>
              </div>
            </div>
          ))}
        </Container>
      </div>
    </Layout>
  )
}

export default StaffPage