"use client";

import { AthleteWithSport, findAthletes } from "@/app/_lib/athletes";
import { ATHELETES_PER_PAGE } from "@/app/_lib/constants";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import AthleteCard from "./athlete-card";

interface AthletesListProps {
  initialData: AthleteWithSport[];
  filters: {
    searchText?: string;
    category?: "all" | "olympic" | "paralympic";
    sport?: string;
    sort: "followers" | "name" | "sport";
    dir: "desc" | "asc";
  };
}

const AthletesList = ({ initialData, filters }: AthletesListProps) => {
  const [offset, setOffset] = useState(ATHELETES_PER_PAGE);
  const [athletes, setAthletes] = useState<AthleteWithSport[]>(initialData);
  const [hasMoreData, setHasMoreData] = useState(
    initialData.length === ATHELETES_PER_PAGE
  );

  const [scrollTrigger, isInView] = useInView();

  const loadMoreAthletes = async () => {
    if (hasMoreData) {
      const apiAthletes = await findAthletes({
        offset,
        ...filters,
      });

      if (apiAthletes.length === 0) {
        setHasMoreData(false);
      }

      setAthletes((prevAthletes) => [...prevAthletes, ...apiAthletes]);
      setOffset((prevOffset) => prevOffset + ATHELETES_PER_PAGE);
    }
  };

  useEffect(() => {
    if (isInView && hasMoreData) {
      loadMoreAthletes();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView, hasMoreData]);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {athletes.map((athlete) => (
          <AthleteCard key={athlete.id} athlete={athlete} />
        ))}
      </div>

      <div className="w-full flex justify-center py-4">
        {hasMoreData && <div ref={scrollTrigger}>Carregando...</div>}
      </div>
    </>
  );
};

export default AthletesList;
