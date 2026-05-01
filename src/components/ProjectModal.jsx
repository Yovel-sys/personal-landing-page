const Modal = ({isOpen, onClose, children}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
      onClick={onClose}
    >
      <div
        id="modal-content"
        className="relative max-w-5xl w-full"
        onClick={(e) => e.stopPropagation()} // מונע מהקליק לסגור את המודאל כשלוחצים על התוכן
      >
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-white text-3xl hover:text-gray-300"
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
