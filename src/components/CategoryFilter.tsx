import React from "react";

interface CategoryFilterProps {
  categories: string[];
  selected: string;
  onChange: (category: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  selected,
  onChange,
}) => {
  return (
    <div className="flex gap-2 mb-4 flex-wrap">
      <button
        className={`px-3 py-1 rounded text-sm ${
          selected === "All"
            ? "bg-purple-700 text-white"
            : "bg-gray-200 text-gray-700"
        }`}
        onClick={() => onChange("All")}
      >
        All
      </button>
      {categories.map((category) => (
        <button
          key={category}
          className={`px-3 py-1 rounded text-sm ${
            selected === category
              ? "bg-purple-700 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
          onClick={() => onChange(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
