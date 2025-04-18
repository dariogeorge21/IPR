import { HomeContent } from "@/components/home-content";

export default function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  // Get the category from searchParams
  const categoryParam = searchParams.category;
  const categoryString = typeof categoryParam === 'string' ? categoryParam : undefined;

  return (
    <HomeContent categoryParam={categoryString} />
  );
}
