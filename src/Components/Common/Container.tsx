import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Container = (props: Props) => {
  return (
    <div className="my-5 px-4 xs:px-0 xs:max-w-lg lg:max-w-6xl mx-auto">
      {props.children}
    </div>
  );
};

export default Container;
