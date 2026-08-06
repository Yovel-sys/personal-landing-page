import {useState} from "react";

const SITE_PASSWORD = import.meta.env.VITE_SITE_PASSWORD;

const PasswordGate = ({children}) => {
  const [password, setPassword] = useState("");

  const [isAuthorized, setIsAuthorized] = useState(() => {
    return sessionStorage.getItem("site_access") === "true";
  });

  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === SITE_PASSWORD) {
      sessionStorage.setItem("site_access", "true");
      setIsAuthorized(true);
      setError(false);
    } else {
      setError(true);
      setPassword("");
    }
  };

  if (isAuthorized) {
    return children;
  }

  return (
    <div className="fixed inset-0 bg-gray-900 flex items-center justify-center z-[9999]">
      <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-md w-full mx-4 text-center">
        <h1 className="text-2xl font-bold mb-4 text-gray-800">
          Private Access
        </h1>
        <p className="text-gray-600 mb-6 text-sm">
          Authentication required for this session.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Password"
            className={`w-full p-3 border rounded-xl outline-none text-center transition-all ${
              error
                ? "border-red-500 bg-red-50"
                : "border-gray-200 focus:border-blue-500"
            }`}
          />
          {error && (
            <p className="text-red-500 text-xs font-medium">
              Incorrect password.
            </p>
          )}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-xl font-bold hover:bg-blue-700 transition-all active:scale-95 shadow-md"
          >
            Unlock Portfolio
          </button>
        </form>
      </div>
    </div>
  );
};

export default PasswordGate;
