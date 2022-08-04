export default function CardBody({ children }) {
  return (
    <>
      <div className="flex justify-center text-white dark:text-black overflow-scroll">{children}</div>
    </>
  );
}
