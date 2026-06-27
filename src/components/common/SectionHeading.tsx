interface Props {
  title: string;
  subtitle: string;
}

export default function SectionHeading({
  title,
  subtitle,
}: Props) {
  return (
    <div className="text-center mb-16">
      <p className="uppercase tracking-[5px] text-cyan-400 text-sm">
        {subtitle}
      </p>

      <h2 className="text-5xl font-bold mt-3 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
        {title}
      </h2>
    </div>
  );
}