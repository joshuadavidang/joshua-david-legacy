export default function Card(props) {
  const { openModal, children } = props;

  return (
    <>
      <div
        className="p-6 w-80 h-80 bg-blue1 dark:bg-white rounded-2xl shadow-md cursor-pointer overflow-scroll"
        onClick={openModal}
      >
        {children}
      </div>
    </>
  );
}
