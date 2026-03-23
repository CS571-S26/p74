export default function Header({
  subtitle,
  titleFirst,
  titleSecond,
  description,
}: {
  subtitle: string;
  titleFirst: string;
  titleSecond?: string;
  description?: string;
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
      {description && (
        <p className="text-gray-600 pt-4 max-w-xl mx-auto">{description}</p>
      )}
    </div>
  );
}
