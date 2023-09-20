import {
  FeaturesSection,
  Item,
  List,
  Logo,
  Title,
  Text,
  Container,
} from './Features.styled';

export default function Features() {
  return (
    <>
      <FeaturesSection>
        <Container>
          <List>
            <Item>
              <Logo className="logo1"></Logo>
              <Title>Attention to details</Title>
              <Text>
                Ideological considerations, as well as the beginning of daily
                work on position formation.
              </Text>
            </Item>
            <Item>
              <Logo className="logo2"></Logo>
              <Title>Punctuality</Title>
              <Text>
                The task of the organization, in particular the framework and
                place of learning personnel entails.
              </Text>
            </Item>
            <Item>
              <Logo className="logo3"></Logo>
              <Title>Planning</Title>
              <Text>
                Likewise, consultation with a broad asset to a large extent
                degree determines.
              </Text>
            </Item>
            <Item>
              <Logo className="logo4"></Logo>
              <Title>Modern technologies </Title>
              <Text>
                The significance of these problems is so obvious that the
                implementation planned tasks.
              </Text>
            </Item>
          </List>
        </Container>
      </FeaturesSection>
    </>
  );
}
