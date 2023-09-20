import {
  Container,
  TeamSection,
  Title,
  Item,
  Info,
  Position,
  NetworkList,
  NetworkItem,
  List,
  Image,
  Name,
  NetWorkLink,
} from './Team.styled';

import { BsInstagram, BsTwitter } from 'react-icons/bs';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';

import Ihor from '../../assets/ihor.jpg';
import Ihor2x from '../../assets/ihor@2x.jpg';
import Olha from '../../assets/olha.jpg';
import Olha2x from '../../assets/olha@2x.jpg';
import Nik from '../../assets/nickolay.jpg';
import Nik2x from '../../assets/nickolay@2x.jpg';
import Mike from '../../assets/mikhail.jpg';
import Mike2x from '../../assets/mikhail@2x.jpg';

export default function Team() {
  return (
    <>
      <TeamSection>
        <Container>
          <Title>Our team</Title>
          <List>
            <Item>
              <Image src={Ihor} srcSet={(Ihor, Ihor2x)} />
              <Info>
                <Name>Ihor Demyanenko</Name>
                <Position>Product Designer</Position>
                <NetworkList>
                  <NetworkItem>
                    <NetWorkLink href="https://www.instagram.com">
                      <BsInstagram size={25} />
                    </NetWorkLink>
                  </NetworkItem>
                  <NetworkItem>
                    <NetWorkLink href="https://twitter.com">
                      <BsTwitter size={25} />
                    </NetWorkLink>
                  </NetworkItem>
                  <NetworkItem>
                    <NetWorkLink href="https://www.facebook.com">
                      <FaFacebookF size={25} />
                    </NetWorkLink>
                  </NetworkItem>
                  <NetworkItem>
                    <NetWorkLink href="https://www.linkedin.com">
                      <FaLinkedinIn size={25} />
                    </NetWorkLink>
                  </NetworkItem>
                </NetworkList>
              </Info>
            </Item>
            <Item>
              <Image src={Olha} srcSet={(Olha, Olha2x)} />
              <Info>
                <Name>Olha Repina</Name>
                <Position>Frontend Developer</Position>
                <NetworkList>
                  <NetworkItem>
                    <NetWorkLink href="https://www.instagram.com">
                      <BsInstagram size={25} />
                    </NetWorkLink>
                  </NetworkItem>
                  <NetworkItem>
                    <NetWorkLink href="https://twitter.com">
                      <BsTwitter size={25} />
                    </NetWorkLink>
                  </NetworkItem>
                  <NetworkItem>
                    <NetWorkLink href="https://www.facebook.com">
                      <FaFacebookF size={25} />
                    </NetWorkLink>
                  </NetworkItem>
                  <NetworkItem>
                    <NetWorkLink href="https://www.linkedin.com">
                      <FaLinkedinIn size={25} />
                    </NetWorkLink>
                  </NetworkItem>
                </NetworkList>
              </Info>
            </Item>
            <Item>
              <Image src={Nik} srcSet={(Nik, Nik2x)} />
              <Info>
                <Name>Nikolai Tarasov</Name>
                <Position>Marketing</Position>
                <NetworkList>
                  <NetworkItem>
                    <NetWorkLink href="https://www.instagram.com">
                      <BsInstagram size={25} />
                    </NetWorkLink>
                  </NetworkItem>
                  <NetworkItem>
                    <NetWorkLink href="https://twitter.com">
                      <BsTwitter size={25} />
                    </NetWorkLink>
                  </NetworkItem>
                  <NetworkItem>
                    <NetWorkLink href="https://www.facebook.com">
                      <FaFacebookF size={25} />
                    </NetWorkLink>
                  </NetworkItem>
                  <NetworkItem>
                    <NetWorkLink href="https://www.linkedin.com">
                      <FaLinkedinIn size={25} />
                    </NetWorkLink>
                  </NetworkItem>
                </NetworkList>
              </Info>
            </Item>
            <Item>
              <Image src={Mike} srcSet={(Mike, Mike2x)} />
              <Info>
                <Name>Mikhail Ermakov</Name>
                <Position>UI Designer</Position>
                <NetworkList>
                  <NetworkItem>
                    <NetWorkLink href="https://www.instagram.com">
                      <BsInstagram size={25} />
                    </NetWorkLink>
                  </NetworkItem>
                  <NetworkItem>
                    <NetWorkLink href="https://twitter.com">
                      <BsTwitter size={25} />
                    </NetWorkLink>
                  </NetworkItem>
                  <NetworkItem>
                    <NetWorkLink href="https://www.facebook.com">
                      <FaFacebookF size={25} />
                    </NetWorkLink>
                  </NetworkItem>
                  <NetworkItem>
                    <NetWorkLink href="https://www.linkedin.com">
                      <FaLinkedinIn size={25} />
                    </NetWorkLink>
                  </NetworkItem>
                </NetworkList>
              </Info>
            </Item>
          </List>
        </Container>
      </TeamSection>
    </>
  );
}
