interface CardProps {
  children: any;
}

const Card = ({ children }: CardProps) => {
  return (
    <div className="p-6 w-72 h-96 bg-blue1 dark:bg-white rounded-2xl drop-shadow-md">
      {children}
    </div>
  );
};

export default Card;
