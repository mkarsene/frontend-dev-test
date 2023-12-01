import { Box, Image } from '@chakra-ui/react';
import { Hit } from 'react-instantsearch-core';
import { TypesenseItem } from '../types';
import ProductDetails from './modals/ProductDetails';

interface ProductsProps {
  hit: Hit<TypesenseItem>;
  className?: string;
}

const Products: React.FC<ProductsProps> = ({ hit }) => {
  const image = `https://dghhemym84nng.cloudfront.net/bofrak-uploads/${hit.sku}.png`
  return (
    <Box position="relative">
        <ProductDetails productName={hit.name} image={image} />
      <Image
        src={image}
        alt={hit.name}
        boxSize="150px"
        objectFit="cover"
      />
      {hit.name}

    </Box>
  );
};

export default Products;
