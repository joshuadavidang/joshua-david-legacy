interface PostProps {
  children: any;
  className?: string;
}

const Post = ({ className, children }: PostProps) => {
  return (
    <div
      className={`flex flex-col-reverse md:flex-row md:justify-center items-center gap-16 md:gap-48 ${className}`}
    >
      {children}
    </div>
  );
};

export default Post;
