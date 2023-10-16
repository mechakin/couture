import Container from "@/components/ui/container";
import Skeleton from "@/components/ui/skeleton";

const Loading = () => {
  return (
    <Container>
      <div className="h-full w-full p-8">
        <Skeleton className="aspect-square w-full rounded-xl md:aspect-[3.5/1]" />
        <div className="mt-8 h-full lg:grid lg:grid-cols-5 lg:gap-x-8">
          <div className="mt-6 lg:col-span-5 lg:mt-0">
            <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <Skeleton className="aspect-[1/1.25] rounded-xl" />
              <Skeleton className="aspect-[1/1.25] rounded-xl" />
              <Skeleton className="aspect-[1/1.25] rounded-xl" />
              <Skeleton className="aspect-[1/1.25] rounded-xl" />
              <Skeleton className="aspect-[1/1.25] rounded-xl" />
              <Skeleton className="aspect-[1/1.25] rounded-xl" />
              <Skeleton className="aspect-[1/1.25] rounded-xl" />
              <Skeleton className="aspect-[1/1.25] rounded-xl" />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
 
export default Loading;