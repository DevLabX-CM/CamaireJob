import { JobFilterValues } from "@/lib/validation";
import H1 from "./ui/h1";

interface HeroProps {
  filterValues: JobFilterValues;
  getTitle: (filterValues: JobFilterValues) => string;
}

export default function Hero({ filterValues, getTitle }: HeroProps) {
  return (
    <div className="h-fit p-5  w-full space-y-5 bg-blue-500 text-center">
      <H1>{getTitle(filterValues)}</H1>
      <p className="text-muted-foreground">Find your dream job.</p>
    </div>
  );
}
