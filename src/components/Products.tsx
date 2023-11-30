import { TypesenseItem } from '../types';

const Products = ({ hit }: { hit: TypesenseItem }) => {
  return (
    <div>
      {hit.name}
      <img
        src={`https://dghhemym84nng.cloudfront.net/bofrak-uploads/${hit.sku}.png`}
        alt={hit.name}
      />
    </div>
  );
};

export default Products;
