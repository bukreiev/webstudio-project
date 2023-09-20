import PropTypes from 'prop-types';
import { Item, List } from './PortfolioList.styled';
import PortfolioItem from './PortfolioItem';

export default function PortfolioList({ projects }) {
  return (
    <List>
      {projects.map(({ id, src, src2x, alt, description, title, type }) => {
        return (
          <Item key={id}>
            <PortfolioItem
              id={id}
              source={src}
              source2x={src2x}
              alt={alt}
              description={description}
              title={title}
              type={type}
            />
          </Item>
        );
      })}
    </List>
  );
}

PortfolioList.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      src2x: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};
