import CloseIcon from "../assets/CloseIcon";

interface ToastyInterface {
  message: string;
  id: number;
  onClose: (id: number) => void;
}

const ToastyNotification = ({ message, id, onClose }: ToastyInterface) => {
  return (
    <div className="bg-blue-500 text-white rounded-lg shadow-lg mb-2 max-w-96 p-2 flex flex-row justify-between">
      <p className="p-1">{message}</p>
      <button
        onClick={() => onClose(id)}
        className="text-white font-bold self-start"
      >
        <CloseIcon fillin="black" fillout="white" />
      </button>
    </div>
  );
};

export default ToastyNotification;
