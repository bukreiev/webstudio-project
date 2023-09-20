import PropTypes from 'prop-types';
import {
  Descript,
  Project,
  Image,
  Title,
  Type,
  Name,
} from './PortfolioItem.styled';

export default function PortfolioItem({
  id,
  source,
  source2x,
  alt,
  description,
  title,
  type,
}) {
  return (
    <>
      <Project id={id}>
        <Image
          src={source}
          srcSet={(source, source2x)}
          alt={alt}
          width="370"
          height="294"
        ></Image>
        <Descript className="description">{description}</Descript>
      </Project>
      <Name>
        <Title>{title}</Title>
        <Type>{type}</Type>
      </Name>
    </>
  );
}

PortfolioItem.propTypes = {
  id: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
  source2x: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
