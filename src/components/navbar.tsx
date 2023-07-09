import Link from "next/link";
import Container from "./ui/container";
import MainNav from "./main-nav";
import getCategories from "../actions/get-categories";
import NavbarActions from "./navbar-actions";

export const revalidate = 1;

export default async function Navbar() {
  const categories = await getCategories();
  return (
    <div className="border-b">
      <Container>
        <div className="relative flex h-16 items-center px-4 sm:px-6 lg:px-8">
          <Link href="/" className="ml-4 flex gap-x-2 lg:ml-0">
            <p className="text-xl font-bold">store</p>
          </Link>
          <MainNav data={categories} />
          <NavbarActions />
        </div>
      </Container>
    </div>
  );
}
