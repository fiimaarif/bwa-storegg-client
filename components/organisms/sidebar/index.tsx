import { useRouter } from "next/router";
import Cookies from "js-cookie";
import Footer from "./footer";
import MenuItem from "./menuItem";
import Profile from "./profile";

interface SidebarProps {
  activeMenu: "overview" | "transactions" | "settings";
}
export default function Sidebar(props: SidebarProps) {
  const { activeMenu } = props;
  const router = useRouter();
  const onLogout = () => {
    Cookies.remove("token");
    router.push("/sign-in");
  };
  return (
    <section className="sidebar">
      <div className="content pt-50 pb-30 ps-30">
        <Profile />
        <div className="menus">
          <MenuItem
            icon="ic-menu-overview"
            active={activeMenu === "overview"}
            title="Overview"
            href="/member"
          />
          <MenuItem
            icon="ic-menu-transaction"
            active={activeMenu === "transactions"}
            title="Transactions"
            href="/member/transactions"
          />
          <MenuItem icon="ic-menu-messages" title="Messages" href="/member" />
          <MenuItem icon="ic-menu-card" title="Card" href="/member" />
          <MenuItem icon="ic-menu-rewards" title="Rewards" href="/member" />
          <MenuItem
            icon="ic-menu-settings"
            active={activeMenu === "settings"}
            title="Settings"
            href="/member/edit-profile"
          />
          <MenuItem icon="ic-menu-logout" title="Log Out" onClick={onLogout} />
        </div>
        <Footer />
      </div>
    </section>
  );
}
