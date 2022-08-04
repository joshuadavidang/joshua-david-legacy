export default function Modal(props) {
  const { children, open } = props;

  return (
    <>
      {open && (
        <>
          <div>{children}</div>
        </>
      )}
    </>
  );
}
