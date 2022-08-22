type categorySelectorProps = {
  categories: string[];
  selectedCategory: string;
  setSelectedCategory: Function;
}

function CategorySelector({ categories, selectedCategory, setSelectedCategory }: categorySelectorProps) {
  const items = categories.map(category => <option key={category} value={category}>{category}</option>)

  return (
    <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}
      className="bg-white border border-gray-500 rounded p-4 w-full sm:w-2/4 md:w-3/4 lg:w-1/4"
    >
      <option value="全部">全部</option>
      {items}
    </select>
  )
}

export default CategorySelector