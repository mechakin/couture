import Container from "@/components/ui/container";
import Skeleton from "@/components/ui/skeleton";

const Loading = () => {
  return (
    <Container>
      <div className="h-full w-full p-8">
        <Skeleton className="aspect-[1/1.65] w-full rounded-xl md:aspect-[2/1]" />
        <div className="mt-8 grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <Skeleton className="aspect-[1/1.5] rounded-xl" />
          <Skeleton className="aspect-[1/1.5] rounded-xl" />
          <Skeleton className="aspect-[1/1.5] rounded-xl" />
          <Skeleton className="aspect-[1/1.5] rounded-xl" />
        </div>
      </div>
    </Container>
  );
}
 
export default Loading;