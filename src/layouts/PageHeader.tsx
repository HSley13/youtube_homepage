import logo from "../assets/youtube.png";
import { Menu, Bell, User, ArrowLeft, Search, Upload, Mic } from "lucide-react";
import { Button } from "../components/Button";
import { useState } from "react";
import { useSidebarContext } from "../contexts/SidebarContext";

export const PageHeader = () => {
  const [showFullWidthSearch, setShowFullWidthSearch] = useState(false);

  return (
    <div className="flex gap-10 lg:gap-20 justify-between pt-2 mb-6 mx-4">
      <PageHeaderFirstSection hidden={showFullWidthSearch} />
      <form
        className={`gap-4 flex-grow justify-center ${showFullWidthSearch ? "flex" : "hidden md:flex"}`}
      >
        <div className="flex flex-grow max-w-[600px]">
          {showFullWidthSearch && (
            <Button
              onClick={() => setShowFullWidthSearch(false)}
              size="icon"
              variant="ghost"
              className="flex-shrink-0"
              type="button"
            >
              <ArrowLeft />
            </Button>
          )}
          <input
            type="search"
            placeholder="Search"
            className="rounded-l-full border border-secondary-border shadow-innder shadow-secondary py-1 px-4 text-lg w-full focus:border-blue-500 outline-none"
          />
          <Button className="py-2 px-4 rounded-r-full border border-secondary-border border-l-0 flex-shrink-0">
            <Search />
          </Button>
        </div>
        <Button size="icon" className="flex-shrink-0" type="button">
          <Mic />
        </Button>
      </form>

      <div
        className={`flex flex-shrink-0, md:gap-2 ${showFullWidthSearch ? "hidden" : "flex"}`}
      >
        <Button
          onClick={() => setShowFullWidthSearch(true)}
          className="md:hidden"
          size="icon"
          variant="ghost"
        >
          <Search />
        </Button>
        <Button className="md:hidden" size="icon" variant="ghost">
          <Mic />
        </Button>

        <Button size="icon" variant="ghost">
          <Upload />
        </Button>
        <Button size="icon" variant="ghost">
          <Bell />
        </Button>
        <Button size="icon" variant="ghost">
          <User />
        </Button>
      </div>
    </div>
  );
};

type PageHeaderFirstSectionProps = {
  hidden?: boolean;
};

export const PageHeaderFirstSection = ({
  hidden = false,
}: PageHeaderFirstSectionProps) => {
  const { toggle } = useSidebarContext();

  return (
    <div
      className={`flex gap-4 items-center flex-shrink-0 ${hidden ? "hidden" : "flex"}`}
    >
      <Button variant="ghost" size="icon" onClick={toggle}>
        <Menu />
      </Button>
      <a href="/">
        <img src={logo} className="w-20" alt="logo" />
      </a>
    </div>
  );
};
