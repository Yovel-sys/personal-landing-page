const Modal = ({isOpen, onClose, children}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 sm:p-8 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        id="modal-content"
        className="relative flex flex-col items-center justify-center max-w-full max-h-full"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-12 -right-2 sm:-right-10 text-white text-4xl hover:text-gray-300 transition-colors p-2 z-[60]"
          aria-label="Close modal"
        >
          &times;
        </button>

        <div className="relative overflow-hidden rounded-lg shadow-2xl">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
