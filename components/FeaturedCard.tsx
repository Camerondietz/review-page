interface Props {
  title: string;
  category: string;
  image: string;
  href: string;
}

export default function FeaturedCard({
  title,
  category,
  image,
  href,
}: Props) {
  return (
    <a
      href={href}
      className="group relative rounded-3xl overflow-hidden shadow-lg"
    >
      <img
        src={image}
        alt={title}
        className="w-full h-72 object-cover group-hover:scale-105 transition duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      <div className="absolute bottom-6 left-6 text-white">
        <p className="text-sm opacity-80">{category}</p>
        <h3 className="text-2xl font-semibold">{title}</h3>
      </div>
    </a>
  );
}