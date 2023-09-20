import Filter from '../Filter/Filter';
import PortfolioList from '../PortfolioList/PortfolioList';
import { Container } from './PortfolioSection.styled';
import projectsinit from './projects.json';

export default function PortfolioSection() {
  return (
    <>
      <Container>
        <Filter />
        <PortfolioList projects={projectsinit} />
      </Container>
    </>
  );
}
