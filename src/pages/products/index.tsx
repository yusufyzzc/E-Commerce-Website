import dynamic from 'next/dynamic';

// Import the products page component with no SSR
// @ts-ignore - Component exists but TypeScript can't find its type declarations
const ProductsClient = dynamic(() => import('../../components/ProductsPage'), {
  ssr: false,
});

export default function Products() {
  return <ProductsClient />;
} 