export default function CardHeader({ children }) {
  return (
    <>
      <p className="pb-1 pt-3 text-2xl text-white text-left dark:text-blue1 font-bold tracking-loose">
        {children}
      </p>
    </>
  );
}
