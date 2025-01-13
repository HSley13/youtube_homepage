import { SmallSidebarItem } from "./SmallSidebarItem";
import { LargeSidebarSection } from "./LargeSidebarSection";
import { LargeSidebarItem } from "./LargeSidebarItem";
import { playlists, subscriptions } from "../data/sidebar";
import {
  Home,
  Repeat,
  Clapperboard,
  Library,
  History,
  Clock,
  PlaySquare,
  ListVideo,
  Music2,
  Flame,
  Film,
  Podcast,
  Gamepad2,
  Radio,
  Newspaper,
  Lightbulb,
  Trophy,
  Shirt,
  ShoppingBag,
} from "lucide-react";

export const Sidebar = () => {
  return (
    <>
      <aside className="sticky top-0 overflow-y-auto scrollbar-hidden pb-4 flex flex-col ml-1 lg:hidden">
        <SmallSidebarItem Icon={Home} title="Home" url="/" />
        <SmallSidebarItem Icon={Repeat} title="Shorts" url="/shorts" />
        <SmallSidebarItem
          Icon={Clapperboard}
          title="Subscriptions"
          url="/subscriptions"
        />
        <SmallSidebarItem Icon={Library} title="Library" url="/library" />
      </aside>

      <aside className="w-56 lg:sticky top-0 absolute overflow-y-auto scrollbar-hidden pb-4 lg:flex hidden flex-col gap-2 px-2">
        <LargeSidebarSection>
          <LargeSidebarItem isActive Icon={Home} title="Home" url="/" />
          <LargeSidebarItem
            Icon={Clapperboard}
            title="Subscriptions"
            url="/subscriptions"
          />
        </LargeSidebarSection>
        <hr />

        <LargeSidebarSection visibleItemCount={5}>
          <LargeSidebarItem Icon={Library} title="Libray" url="/Library" />
          <LargeSidebarItem Icon={History} title="History" url="/history" />
          <LargeSidebarItem
            Icon={PlaySquare}
            title="Your Videos"
            url="/yout-videos"
          />
          <LargeSidebarItem
            Icon={Clock}
            title="Watch later"
            url="/playlists?list=WL"
          />

          {playlists.map((playlist) => (
            <LargeSidebarItem
              key={playlist.id}
              Icon={ListVideo}
              title={playlist.name}
              url={`/playlists?list=${playlist.id}`}
            />
          ))}
        </LargeSidebarSection>
        <hr />

        <LargeSidebarSection title="Subscriptions">
          {subscriptions.map((subscription) => (
            <LargeSidebarItem
              key={subscription.id}
              Icon={subscription.imgUrl}
              title={subscription.channelName}
              url={`/@/${subscription.id}`}
            />
          ))}
        </LargeSidebarSection>
        <hr />

        <LargeSidebarSection title="Explore">
          <LargeSidebarItem Icon={Flame} title="Trending" url="/trending" />
          <LargeSidebarItem
            Icon={ShoppingBag}
            title="Shopping"
            url="/shopping"
          />
          <LargeSidebarItem Icon={Music2} title="Music" url="/music" />
          <LargeSidebarItem Icon={Film} title="Movies & TV" url="/movies-tv" />
          <LargeSidebarItem Icon={Radio} title="Live" url="/live" />
          <LargeSidebarItem Icon={Gamepad2} title="Gaming" url="/gaming" />
          <LargeSidebarItem Icon={Newspaper} title="News" url="/news" />
          <LargeSidebarItem Icon={Trophy} title="Sports" url="/sports" />
          <LargeSidebarItem Icon={Lightbulb} title="Learning" url="/learning" />
          <LargeSidebarItem
            Icon={Shirt}
            title="Fashion & Beauty"
            url="/fashion-beauty"
          />
          <LargeSidebarItem Icon={Podcast} title="podcasts" url="/podcasts" />
        </LargeSidebarSection>
      </aside>
    </>
  );
};
