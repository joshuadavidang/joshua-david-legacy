export default function CardHeader({ children }) {
  return (
    <>
      <p className="pb-3 text-2xl text-white dark:text-blue1 text-center font-bold tracking-loose dark:text-black">
        {children}
      </p>
    </>
  );
}
