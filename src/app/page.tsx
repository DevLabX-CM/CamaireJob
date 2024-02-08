import JobFilterSidebar from "@/components/JobFilterSidebar";
import JobListItem from "@/components/JobListItem";
import JobResult from "@/components/JobResult";
import H1 from "@/components/ui/h1";
import prisma from "@/lib/prisma";
import { JobFilterValues } from "@/lib/validatioin";

interface PageProps {
  searchParams: {
    q?: string;
    type?: string;
    location?: string;
    remote?: string;
  };
}

export default async function Home({
  searchParams: { q, type, location, remote },
}: PageProps) {
  const filterValues: JobFilterValues = {
    q,
    type,
    location,
    remote: remote === "true",
  };

  function getTitle({ q, type, location, remote }: JobFilterValues) {
    const titlePrefix = q
      ? `${q} jobs`
      : type
        ? `${type} developer jobs`
        : remote
          ? "Remote developer jobs"
          : "All developer jobs";

    const titleSuffix = location ? ` in ${location}` : "";

    return `${titlePrefix}${titleSuffix}`;
  }

  return (
    <main className=" m-auto my-10 max-w-5xl space-y-10 px-3">
      <div className="space-x-5 text-center">
        <H1>{getTitle(filterValues)}</H1>
        <p className="text-muted-foreground">Find your dream job.</p>
      </div>
      <section className="flex flex-col gap-4  md:flex-row">
        <JobFilterSidebar defaultValues={filterValues} />
        <JobResult filterValues={filterValues} />
      </section>
    </main>
  );
}
