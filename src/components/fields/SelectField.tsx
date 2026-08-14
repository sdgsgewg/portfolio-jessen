import { ReactNode } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger } from "../ui/select";
import { cn } from "@/lib/utils";

interface SelectFieldProps<T extends string> {
  value?: T;
  options: readonly T[];
  onChange: (value: T | undefined) => void;

  allLabel: string;
  getLabel: (value: T) => string;

  icon?: ReactNode;
  className?: string;
}

export default function SelectField<T extends string>({
  value,
  options,
  onChange,
  allLabel,
  getLabel,
  icon,
  className,
}: SelectFieldProps<T>) {
  return (
    <Select
      value={value ?? "all"}
      onValueChange={(selected) => {
        onChange(selected === "all" ? undefined : (selected as T));
      }}
    >
      <SelectTrigger
        className={cn(
          className ? ` ${className}` : "w-48",
          "h-9 text-sm focus:ring-0",
        )}
      >
        <div className="flex items-center gap-2">
          {icon && <span className="text-muted-foreground">{icon}</span>}

          <span className="truncate">{value ? getLabel(value) : allLabel}</span>
        </div>
      </SelectTrigger>

      <SelectContent>
        <SelectItem value="all">{allLabel}</SelectItem>

        {options.map((option) => (
          <SelectItem key={option} value={option}>
            {getLabel(option)}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
