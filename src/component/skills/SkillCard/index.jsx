function SkillCard({ name, desc }) {
  return (
    <div
      className="
      rounded-xl
      border
      p-6
      bg-white
      hover:shadow-md
      transition
    "
    >
      <h3 className="font-semibold text-lg">{name}</h3>
      <p className="mt-2 text-sm text-gray-500">{desc}</p>
    </div>
  );
}

export default SkillCard;
