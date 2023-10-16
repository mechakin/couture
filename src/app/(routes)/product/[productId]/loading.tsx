import Container from "@/components/ui/container";
import Skeleton from "@/components/ui/skeleton";

const Loading = () => {
  return (
    <Container>
      <div className="w-full h-full px-8">
        <div className="mx-auto px-4 py-10 sm:px-6 max-w-7xl lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
            <Skeleton className="rounded-xl aspect-[1/1.5]" />
            <div className="mt-10  sm:mt-16 sm:px-0 lg:mt-0">
              <Skeleton className="rounded-xl aspect-[1/1.5]" />
            </div>
          </div>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4">
            <Skeleton className="aspect-[1/1.5] rounded-xl" />
            <Skeleton className="aspect-[1/1.5] rounded-xl" />
            <Skeleton className="aspect-[1/1.5] rounded-xl" />
          </div>
        </div>
      </div>
    </Container>
  );
}
 
export default Loading;
