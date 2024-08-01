import { X } from "lucide-react";

interface TodoListTileComponentProps {
  name?: string;
  handleDelete: () => void;
}
export function TodoListTileComponent({
  name,
  handleDelete,
}: TodoListTileComponentProps) {
  return (
    <div>
      <div className="flex justify-between items-center bg-zinc-200 px-3 py-4 rounded mb-3">
        {name ?? "Erro"}
        <X className="size-4 cursor-pointer" onClick={handleDelete} />
      </div>
    </div>
  );
}
