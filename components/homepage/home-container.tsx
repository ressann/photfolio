import Image from "next/image";
import Link from "next/link";

function HomeContainer() {
  return (
    <div className="container mx-auto px-8 flex items-center justify-center h-full min-h-screen">
      <div className="space-y-8 max-w-2xl">
        <div>
          <Image
            src={"/ressann.png"}
            alt="profile"
            width={300}
            height={300}
            className="rounded-full w-72 h-72 object-contain mx-auto"
          />
        </div>
        <div className="space-y-4">
          <h1 className="text-6xl font-light tracking-tight text-primary">
            LA RESSANN
          </h1>
          <p className="text-xl text-muted-foreground">
            Welcome to my portfolio
          </p>
        </div>

        <div className="flex gap-4">
          <Link
            href="/about-me"
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            Learn more about me →
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomeContainer;
