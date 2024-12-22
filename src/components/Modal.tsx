import { ReactNode } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
}

const Modal = ({ isOpen, onClose, title, children }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[55] flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative bg-white rounded-lg shadow-lg w-11/12 max-w-md max-h-[70vh] overflow-y-auto">
        <div className="sticky top-0 bg-white z-50 border-b px-6 py-4 flex justify-between items-center">
          <h3 className="text-lg font-semibold">{title}</h3>
          <button
            className="text-gray-500 hover:text-black"
            onClick={onClose}
          >
            ✖
          </button>
        </div>

        <div className="px-6 py-4 z-[52]">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
