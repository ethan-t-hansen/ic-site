import PartsPage from "@/components/PartsPage";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col p-16 gap-4">
      <div className="flex flex-row gap-4">
        <Link href="/parts">
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            Go to Parts List
          </button>
        </Link>

        <Link href="/inquiries">
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            Go to inquiries
          </button>
        </Link>

        <Link href="/faq">
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            Go to FAQ
          </button>
        </Link>
      </div>
      <PartsPage />
    </div>
  );
}
