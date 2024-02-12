import { Button } from "@/components/ui/button";
import H1 from "@/components/ui/h1";
import Image from "next/image";
import notfound from "@/assets/not-found.png";

export default function NotFound() {
  return (
    <main className="m-auto my-10 max-w-5xl space-y-5 px-3 text-center">
      <div className="mx-auto h-fit w-fit  ">
        <Image src={notfound} alt="not found image" width={400} height={400} />
      </div>
      <H1>Not Found</H1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Button> Go Home </Button>
    </main>
  );
}
