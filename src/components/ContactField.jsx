const ContactField = ({label, type = "text", id, placeholder, name}) => (
  <div className="flex flex-col gap-2">
    <label htmlFor={id} className="text-sm font-medium text-gray-700">
      {label}
    </label>
    {type === "textarea" ? (
      <textarea
        id={id}
        name={name}
        placeholder={placeholder}
        rows="4"
        className="p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
        required
      />
    ) : (
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        className="p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
        required
      />
    )}
  </div>
);

export default ContactField;
