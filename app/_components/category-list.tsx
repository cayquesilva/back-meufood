import { db } from "../_lib/prisma";
import CategoryItem from "./category-item";

const CategoryList = async () => {
  //pega categoria
  const categories = await db.category.findMany({});

  //renderiza 1 item da categoria

  return (
    <>
      <div className="grid grid-cols-2 gap-3">
        {categories.map((category) => (
          <CategoryItem key={category.id} category={category} />
        ))}
      </div>
    </>
  );
};

export default CategoryList;
