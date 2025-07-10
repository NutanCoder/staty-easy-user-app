import HashLoader from "react-spinners/HashLoader";

export default function Spinner({ loading = true }) {
  return (
    <div className="min-h-dvh flex justify-center items-center h-40">
      <HashLoader
        color="#3B82F6" // Tailwind's blue-500
        loading={loading}
        size={100}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}
