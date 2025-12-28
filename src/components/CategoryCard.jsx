import { useNavigate } from "react-router-dom";

export default function CategoryCard({ category }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() =>
        navigate(`/category/${encodeURIComponent(category.name)}`)
      }
      className="cursor-pointer bg-white p-4 rounded-lg shadow hover:shadow-md flex flex-col items-center"
    >
      <img
        src={category.image}
        alt={category.name}
        className="h-16 mb-2"
      />
      <p className="text-sm font-medium text-center">
        {category.name}
      </p>
    </div>
  );
}
