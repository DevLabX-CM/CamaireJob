import { JobFilterValues, searchJobsSchema } from "@/lib/validation";
import H1 from "./ui/h1";
import { Input } from "./ui/input";
import FormSubmitButton from "./FormSubmitButton";
import { redirect } from "next/navigation";

interface HeroProps {
  filterValues: JobFilterValues;
  getTitle: (filterValues: JobFilterValues) => string;
}

async function searcJobs(formData: FormData) {
  "use server";

  const values = Object.fromEntries(formData.entries());

  const { q } = searchJobsSchema.parse(values);

  const searchParams = new URLSearchParams({
    ...(q && { q: q.trim() }),
  });

  redirect(`/?${searchParams.toString()}`);
}

export default function Hero({ filterValues, getTitle }: HeroProps) {
  return (
    <div className="h-fit w-full space-y-5  bg-white p-5 py-10 text-center">
      <H1>{getTitle(filterValues)}</H1>
      <p className="text-muted-foreground">Find your dream job.</p>
      <form action={searcJobs}>
        <div className=" mx-auto flex w-[90%] items-center  justify-between rounded-xl border border-slate-700  px-5 py-3  focus-visible:ring-2 sm:w-full  sm:max-w-[40%] ">
          <Input
            placeholder="Seach job"
            id="q"
            name="q"
            className="border-none bg-transparent outline-none focus-visible:ring-transparent "
          />
          <FormSubmitButton>Search</FormSubmitButton>
        </div>
      </form>
    </div>
  );
}
