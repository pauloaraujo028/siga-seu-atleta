import { Sport } from "@prisma/client";
import CategoriesFilter from "./categories";
import SortBy from "./sort-by";
import SportsFilter from "./sports";

interface DesktopFiltersProps {
  category: string;
  onCategoryChange: (selectedCategory: string) => void;
  sports: Sport[];
  sport: string;
  onSportChange: (sport: string) => void;
  sort: string;
  dir: string;
  onSortByChange: (selectedSort: string) => void;
  onDirectionChange: () => void;
}

const DesktopFilters = ({
  category,
  onCategoryChange,
  sports,
  sport,
  onSportChange,
  sort,
  dir,
  onSortByChange,
  onDirectionChange,
}: DesktopFiltersProps) => {
  return (
    <div className="flex w-full justify-between">
      <div className="flex gap-8">
        <CategoriesFilter
          category={category}
          onCategoryChange={onCategoryChange}
        />

        <SportsFilter
          sport={sport}
          onSportChange={onSportChange}
          sports={sports}
        />
      </div>

      <SortBy
        sort={sort}
        onSortByChange={onSortByChange}
        dir={dir}
        onDirectionChange={onDirectionChange}
      />
    </div>
  );
};

export default DesktopFilters;
