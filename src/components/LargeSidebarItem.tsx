import { twMerge } from "tailwind-merge";
import { buttonStyles } from "./Button";

type LargeSidebarItemProps = {
  Icon: html.ElementType | string;
  title: string;
  url: string;
  isActive?: boolean;
};

export const LargeSidebarItem = ({
  Icon,
  title,
  url,
  isActive = false,
}: LargeSidebarItemProps) => {
  return (
    <a
      href={url}
      className={twMerge(
        buttonStyles({ variant: "ghost" }),
        `w-full flex items-center rounded-lg gap-4 p-3 ${isActive ? "font-bold bg-neutral-100 hover:bg-secondary" : undefined}`,
      )}
    >
      {typeof Icon === "string" ? (
        <img src={Icon} className="w-6 h-6 rounded-full" />
      ) : (
        <Icon className="w-6 h-6" />
      )}

      <div className="text-ellipsis whitespace-nowrap overflow-hidden">
        {title}
      </div>
    </a>
  );
};
