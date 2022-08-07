export default function Post(props) {
  const { className, children } = props;
  return (
    <>
      <div
        className={`flex flex-row md:justify-center items-center gap-48 ${className}`}
      >
        {children}
      </div>
    </>
  );
}
