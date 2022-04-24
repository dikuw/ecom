import Link from 'next/link';
import ItemStyles from "./styles/ItemStyles";
import TitleStyles from "./styles/Title";
import PriceTag from "./styles/PriceTag";
import formatMoney from '../lib/formatMoney';

export default function Product ({ product }) {
  return (
    <ItemStyles>
      <img src={product?.photo?.image?.publicUrlTransformed}
      alt={product.name} />
      <TitleStyles>
        <Link href={`/product/${product.id}`}>{product.name}</Link>
      </TitleStyles>
      <PriceTag>{formatMoney(product.price)}</PriceTag>
      <p>{product.description}</p>
    </ItemStyles>
  )
}