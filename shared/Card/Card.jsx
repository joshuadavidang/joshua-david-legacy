export default function Card(props) {
  const { data, openModal, children } = props;

  return (
    <>
      <div className="grid md:grid-cols-3 gap-2 gap-y-12 justify-center items-center md:h-3/4 pt-12">
        {data.map((d, index) => (
          <div
            className="p-6 w-80 h-80 bg-blue1 dark:bg-white rounded-lg shadow-md cursor-pointer"
            key={index}
            onClick={openModal}
          >
            {children}
          </div>
        ))}
      </div>
    </>
  );
}
