import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  extraClasses: string;
};

const Container = (props: Props) => {
  const classes = "my-5 px-4 xs:px-0 xs:max-w-lg lg:max-w-6xl mx-auto ";

  return (
    <div
      className={props.extraClasses ? classes + props.extraClasses : classes}
    >
      {props.children}
    </div>
  );
};

export default Container;
