/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/_components/ui/select";
import { ArrowDownWideNarrow, ArrowUpNarrowWide } from "lucide-react";
import { Button } from "../../ui/button";

interface SortByParams {
  sort: string;
  dir: string;
  onSortByChange: (selectedSort: string) => void;
  onDirectionChange: (params: any) => void;
}

const SortBy = ({
  sort,
  onSortByChange,
  dir,
  onDirectionChange,
}: SortByParams) => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-1">
      <span className="text-sm underline decoration-yellow-500 block md:hidden">
        Ordenação:
      </span>

      <div className="flex items-center gap-1">
        <Select
          defaultValue="followers"
          value={sort}
          onValueChange={onSortByChange}
        >
          <SelectTrigger className="w-32">
            <SelectValue placeholder="Seguidores" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="followers">Seguidores</SelectItem>
            <SelectItem value="name">Nome</SelectItem>
            <SelectItem value="sport">Esporte</SelectItem>
          </SelectContent>
        </Select>

        <Button onClick={onDirectionChange} type="button">
          {dir === "desc" ? <ArrowDownWideNarrow /> : <ArrowUpNarrowWide />}
        </Button>
      </div>
    </div>
  );
};

export default SortBy;
