export default function Header({
  subtitle,
  titleFirst,
  titleSecond,
}: {
  subtitle: string;
  titleFirst: string;
  titleSecond: string;
}) {
  return (
    <div className="text-center mb-20">
      <p className="text-brand font-semibold text-md uppercase tracking-wider mb-3">
        {subtitle}
      </p>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 font-display leading-tight">
        {titleFirst}
        <br className="hidden md:block" /> {titleSecond}
      </h2>
    </div>
  );
}
