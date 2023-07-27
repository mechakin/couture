import { Button } from "@/components/ui/button";
import Container from "@/components/ui/container";
import Link from "next/link";

export default async function NotFound() {
  return (
    <Container>
      <div className="pl-8">
        <h1 className="pb-2 text-3xl font-bold tracking-tight">
          Page not found
        </h1>
        <p className="pb-4">The page you requested could not be found.</p>
        <Button className="max-w-fit bg-black text-white rounded-full">
          <Link href="/">Go back</Link>
        </Button>
      </div>
    </Container>
  );
}
