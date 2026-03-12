interface Props {
  title: string;
  description: string;
  href: string;
}

export default function CategoryCard({ title, description, href }: Props) {
  return (
    <a
      href={href}
      className="group rounded-3xl border border-gray-100 p-8 hover:shadow-xl transition duration-300 bg-white"
    >
      <h3 className="text-2xl font-semibold mb-3 group-hover:text-austinDeepBlue transition">
        {title}
      </h3>
      <p className="text-gray-600">{description}</p>
    </a>
  );
}