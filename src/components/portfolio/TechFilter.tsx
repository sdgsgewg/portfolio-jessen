"use client";

import { useMemo, useState } from "react";
import { TechName, TECH_STACK } from "@/constants/tech-stack";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Check, Cpu, ChevronDown } from "lucide-react";
import clsx from "clsx";

interface Props {
  value: TechName[];
  onChange: (val: TechName[]) => void;
}

export default function TechFilter({ value, onChange }: Props) {
  const [open, setOpen] = useState(false);

  // 🔥 Group by category
  const grouped = useMemo(() => {
    return TECH_STACK.reduce((acc, tech) => {
      if (!acc[tech.category]) acc[tech.category] = [];
      acc[tech.category].push(tech);
      return acc;
    }, {} as Record<string, typeof TECH_STACK>);
  }, []);

  const toggleTech = (tech: TechName) => {
    if (value.includes(tech)) {
      onChange(value.filter((t) => t !== tech));
    } else {
      onChange([...value, tech]);
    }
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button className="flex h-9 w-[150px] items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50">
          <div className="flex items-center gap-2 truncate">
            <Cpu className="w-4 h-4 shrink-0 text-muted-foreground" />
            <span className="truncate">Tech Stack</span>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            {value.length > 0 ? (
              <span className="flex h-5 items-center justify-center rounded-full bg-primary/10 px-2 text-[10px] font-medium text-primary">
                {value.length}
              </span>
            ) : (
              <ChevronDown className="h-4 w-4 opacity-50" />
            )}
          </div>
        </button>
      </PopoverTrigger>

      <PopoverContent className="w-64 p-0">
        <Command>
          <CommandInput placeholder="Search tech..." />

          <CommandList>
            <CommandEmpty>No tech found.</CommandEmpty>

            {Object.entries(grouped).map(([category, items]) => (
              <CommandGroup key={category} heading={category.toUpperCase()}>
                {items.map((tech) => {
                  const selected = value.includes(tech.name);

                  return (
                    <CommandItem
                      key={tech.name}
                      onSelect={() => toggleTech(tech.name)}
                      className="flex items-center justify-between"
                    >
                      <span>{tech.name}</span>

                      <Check
                        className={clsx(
                          "h-4 w-4",
                          selected ? "opacity-100" : "opacity-0"
                        )}
                      />
                    </CommandItem>
                  );
                })}
              </CommandGroup>
            ))}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}