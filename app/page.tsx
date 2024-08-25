import Link from "next/link";

const Page: React.FC = () => {
  return (
    <div>
      <h1>Vira&apos;s Balcony. Welcome to paradise.</h1>

      <Link href="/cabins">Explore luxury cabins</Link>
    </div>
  );
};

export default Page;
