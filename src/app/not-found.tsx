import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center p-4">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-blue-600">404</h1>
          <h2 className="text-2xl font-semibold">Page Not Found</h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            The page you are looking for doesn't exist or has been moved.
          </p>
          <Link href="/">
            <Button className="bg-blue-600 hover:bg-blue-700">Go back home</Button>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
