/* eslint-disable @typescript-eslint/no-explicit-any */
import { Sport } from "@prisma/client";
import { ListFilter } from "lucide-react";
import { useState } from "react";
import { Button } from "../../ui/button";
import { Drawer, DrawerContent, DrawerTrigger } from "../../ui/drawer";
import CategoriesFilter from "./categories";
import SortBy from "./sort-by";
import SportsFilter from "./sports";

interface MobileFiltersProps {
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

const MobileFilters = ({
  category,
  onCategoryChange,
  sports,
  sport,
  onSportChange,
  sort,
  dir,
  onSortByChange,
  onDirectionChange,
}: MobileFiltersProps) => {
  const [open, setOpen] = useState(false);

  const closeAfter = (callback: (params: any) => any) => {
    return (params: any) => {
      callback(params);
      setOpen(false);
    };
  };

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger className="flex justify-end w-full">
        <Button
          className="bg-yellow-500 cursor-pointer border-2 border-black"
          onClick={() => setOpen(true)}
        >
          <ListFilter className="w-4 h-4 mr-2" />
          Filtros
        </Button>
      </DrawerTrigger>
      <DrawerContent className="p-4 mb-10 flex flex-col gap-4">
        <CategoriesFilter
          category={category}
          onCategoryChange={closeAfter(onCategoryChange)}
        />

        <SportsFilter
          sports={sports}
          sport={sport}
          onSportChange={closeAfter(onSportChange)}
        />

        <SortBy
          sort={sort}
          dir={dir}
          onSortByChange={closeAfter(onSortByChange)}
          onDirectionChange={closeAfter(onDirectionChange)}
        />
      </DrawerContent>
    </Drawer>
  );
};

export default MobileFilters;
