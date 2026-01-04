type UserSearchProps = {
  value: string;
  onChange: (value: string) => void;
};

export default function UserSearch({ value, onChange }: UserSearchProps) {
  return (
    <input
      type="search"
      value={value}
      onChange={(e) => {
        onChange(e.target.value);
      }}
      placeholder="Search by username..."
      className="max-w-64 rounded bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
    />
  );
}

// "bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
