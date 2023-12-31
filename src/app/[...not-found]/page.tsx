import { Button } from "@/components/ui/button";
import Container from "@/components/ui/container";
import Link from "next/link";

export default async function NotFound() {
  return (
    <Container>
      <div className="-mt-44 h-screen flex flex-col items-center justify-center">
        <h1 className="pb-2 text-3xl font-bold tracking-tight">
          Page not found
        </h1>
        <p className="pb-4">The page you requested could not be found.</p>
        <Button className="max-w-fit rounded-full bg-black text-white">
          <Link href="/">Go back</Link>
        </Button>
      </div>
    </Container>
  );
}
