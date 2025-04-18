import { ProductDetail } from "@/components/product-detail";
export default function ProductDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;

  return <ProductDetail id={id} />;
}


