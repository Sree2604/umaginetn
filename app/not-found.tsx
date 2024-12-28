import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col gap-3 h-screen w-full justify-center items-center bg-secondary">
      <h2 className="text-3xl font-bold">Not Found</h2>
      <p>Could not find requested resource</p>
      <Link
        href="/"
        className="bg-primary text-white p-1 rounded font-semibold"
      >
        Return Home
      </Link>
    </div>
  );
}
