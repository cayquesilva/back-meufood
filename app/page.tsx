import Search from "./_components/search";
import Header from "./_components/header";
import CategoryList from "./_components/category-list";

export default function Home() {
  return (
    <>
      <Header />
      <div className="px-5 pt-6">
        <Search />
      </div>

      <div className="px-5 pt-6">
        <CategoryList />
      </div>
    </>
  );
}
