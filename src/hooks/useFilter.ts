import { useMemo, useState } from "preact/hooks";

export function useCategoryFilter<T extends { category: string }>(items: T[]) {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = useMemo(() => {
    return ["All", ...Array.from(new Set(items.map(i => i.category)))];
  }, [items]);

  const filteredItems = useMemo(() => {
    if (activeCategory === "All") return items;
    return items.filter(item => item.category === activeCategory);
  }, [items, activeCategory]);

  return {
    activeCategory,
    setActiveCategory,
    categories,
    filteredItems,
  };
}
