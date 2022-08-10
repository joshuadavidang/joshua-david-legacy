export default function CardHeader({ children }) {
  return (
    <>
      <p className="pb-1 pt-3 text-2xl text-blue1 text-left dark:text-blue1 font-bold tracking-loose">
        {children}
      </p>
    </>
  );
}
