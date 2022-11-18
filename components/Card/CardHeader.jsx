export default function CardHeader({ children }) {
  return (
    <p className="pb-1 pt-3 text-2xl text-white dark:text-blue1 text-left font-bold tracking-loose hover:underline">
      {children}
    </p>
  );
}
