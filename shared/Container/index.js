export default function Post({ children }) {
  return (
    <>
      <div className="grid grid-rows-1 grid-flow-col gap-16 flex justify-center items-center">{children}</div>
    </>
  );
}
