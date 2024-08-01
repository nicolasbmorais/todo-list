interface TaskLenghtProps {
  taskLenght?: number;
  onClear: () => void;
}
export const TaskLenght = ({ taskLenght, onClear }: TaskLenghtProps) => {
  return (
    <div className="flex mt-8 items-center justify-between">
      <h3 className="mr-2 ">Você tem {taskLenght ?? 0} tarefas pendentes</h3>
      <button
        type="button"
        className="items-center hover:bg-violet-700 bg-violet-500 justify-center text-white rounded px-2"
        onClick={onClear}
      >
        Limpar
      </button>
    </div>
  );
};
