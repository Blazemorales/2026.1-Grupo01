import { SearchIcon } from "./icons";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

/** Large pill search field with the prototype's orange search icon button. */
export function SearchBar({ value, onChange, placeholder = "Buscar serviços" }: SearchBarProps) {
  return (
    <div className="flex items-center gap-2 rounded-full border border-line bg-white p-1.5 pl-5 shadow-sm focus-within:border-brand focus-within:ring-2 focus-within:ring-brand/20">
      <input
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        aria-label="Buscar serviços"
        className="h-10 flex-1 bg-transparent text-base text-slate-900 outline-none placeholder:text-slate-400"
      />
      <span
        className="grid h-11 w-11 place-items-center rounded-full bg-accent text-white"
        aria-hidden
      >
        <SearchIcon className="h-5 w-5" />
      </span>
    </div>
  );
}
