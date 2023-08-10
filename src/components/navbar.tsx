import Link from "next/link";
import getCategories from "../actions/get-categories";
import MainNav from "./main-nav";
import NavbarActions from "./navbar-actions";
import Container from "./ui/container";

export default async function Navbar() {
  const categories = await getCategories();
  return (
    <div className="border-b">
      <Container>
        <div className="relative flex h-16 items-center px-8">
          <Link href="/" className="flex gap-x-2">
            <p className="text-xl font-bold tracking-tight">couture</p>
          </Link>
          <MainNav data={categories} />
          <NavbarActions data={categories} />
        </div>
      </Container>
    </div>
  );
}
