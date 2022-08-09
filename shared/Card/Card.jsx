export default function Card(props) {
  const { children } = props;

  return (
    <>
      <div className="p-6 w-72 h-80 bg-blue1 dark:bg-white rounded-2xl drop-shadow-md cursor-pointer overflow-scroll">
        {children}
      </div>
    </>
  );
}
