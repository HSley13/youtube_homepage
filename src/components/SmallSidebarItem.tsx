import { buttonStyles } from "./Button";
import { twMerge } from "tailwind-merge";
import { ElementType } from "react";

type SmallSidebarItemProps = {
  Icon: ElementType;
  title: string;
  url: string;
};
export const SmallSidebarItem = ({
  Icon,
  title,
  url,
}: SmallSidebarItemProps) => {
  return (
    <a
      href={url}
      className={twMerge(
        buttonStyles({ variant: "ghost" }),
        "py4, px-1, flex flex-col items-center rounded-lg gap-1",
      )}
    >
      <Icon className="w-6 h-6" />
      <div className="text-sm">{title}</div>
    </a>
  );
};
