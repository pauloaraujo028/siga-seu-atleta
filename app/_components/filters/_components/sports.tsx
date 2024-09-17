"use client";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/app/_components/ui/popover";
import { Sport } from "@prisma/client";
import {} from "@radix-ui/react-popover";
import { useState } from "react";
import { Button } from "../../ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "../../ui/command";
import SportIcon from "./sport-icon";

const SportsFilter = ({
  sports,
  sport,
  onSportChange,
}: {
  sports: Sport[];
  sport: string;
  onSportChange: (sport: string) => void;
}) => {
  const [open, setOpen] = useState(false);
  const [selectedSport, setSelectdSport] = useState<Sport | null>(
    sports.find((s) => s.code === sport) || null
  );

  const handleChange = (name: string) => {
    if (name === selectedSport?.name) {
      setSelectdSport(null);
      setOpen(false);
      onSportChange("");
      return;
    }

    const selected = sports.find((sport) => sport.name === name) || null;

    setSelectdSport(selected);
    setOpen(false);
    onSportChange(selected?.code || "");
  };

  return (
    <div className="flex md:flex-row flex-col items-center gap-1">
      <span className="text-sm underline decoration-yellow-500 block md:hidden">
        Esporte:
      </span>

      <div className="flex items-center space-x-4 h-full">
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              size="sm"
              className="h-full min-h-10 justify-start"
            >
              {selectedSport ? (
                <>
                  <SportIcon sportCode={selectedSport.code} />
                  <div className="ml-2">{selectedSport.name}</div>
                </>
              ) : (
                <>Todos os esportes</>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="p-0" side="top" align="center">
            <Command>
              <CommandInput placeholder="Pesquisar esportes..." />
              <CommandList>
                <CommandEmpty>Esporte não encontrado.</CommandEmpty>
                <CommandGroup>
                  {sports.map((sport) => (
                    <CommandItem
                      key={sport.code}
                      value={sport.name}
                      onSelect={handleChange}
                    >
                      <SportIcon sportCode={sport.code} />
                      <span className="ml-2">{sport.name}</span>
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};

export default SportsFilter;
