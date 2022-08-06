export default function CardBody({ children }) {
  return (
    <>
      <div className="flex text-white dark:text-black overflow-scroll pt-3">
        {children}
      </div>
    </>
  );
}
