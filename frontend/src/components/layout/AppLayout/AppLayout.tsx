import { Outlet } from "react-router";
import { Topbar } from "../Topbar";
import styles from "./AppLayout.module.css";

/** Shell for logged-in pages: sticky topbar + routed page content. */
export function AppLayout() {
  return (
    <div className={styles.shell}>
      <Topbar />
      <Outlet />
    </div>
  );
}
