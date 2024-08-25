import Link from "next/link";

const Logo: React.FC = () => {
  return (
    <Link href="/" className="flex items-center gap-4 z-10">
      <img src="/logo.png" height="60" width="60" alt="The Wild Oasis logo" />
      <span className="text-xl font-semibold text-primary-100">
        Vira&apos;s Balcony
      </span>
    </Link>
  );
};

export default Logo;
