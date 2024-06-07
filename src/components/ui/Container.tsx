import { ReactNode } from "react";

const Container = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <section
      className={`w-full md:w-[95%] xl:w-[90%] max-w-[2200px] mx-auto ${className}`}
    >
      {children}
    </section>
  );
};

export default Container;
