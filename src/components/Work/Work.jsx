import {
  Container,
  List,
  Item,
  Title,
  WorkSection,
  Image,
  Text,
} from './Work.styled';
import work1 from '../../assets/image1.jpg';
import work12x from '../../assets/image1@2x.jpg';
import work2 from '../../assets/image2.jpg';
import work22x from '../../assets/image2@2x.jpg';
import work3 from '../../assets/image3.jpg';
import work32x from '../../assets/image3@2x.jpg';

export default function Work() {
  return (
    <>
      <WorkSection>
        <Container>
          <Title>What are we doing</Title>
          <List>
            <Item>
              <Image src={work1} srcSet={(work1, work12x)} alt="work image" />
              <Text>Desktop applications</Text>
            </Item>
            <Item>
              <Image src={work2} srcSet={(work2, work22x)} alt="work image" />
              <Text>Mobile applications</Text>
            </Item>
            <Item>
              <Image src={work3} srcSet={(work3, work32x)} alt="work image" />
              <Text>Designer</Text>
            </Item>
          </List>
        </Container>
      </WorkSection>
    </>
  );
}
