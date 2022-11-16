export default function Post(props) {
  const { className, children } = props;
  return (
    <>
      <div
        className={`flex flex-col-reverse md:flex-row md:justify-center items-center gap-16 md:gap-48 ${className}`}
      >
        {children}
      </div>
    </>
  );
}
