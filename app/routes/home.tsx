import { Outlet } from "@remix-run/react";
import NavigationImages from "~/components/NavigationImages";

export default function IndexRoute() {
  return (
    <div>
      <NavigationImages />
      <Outlet />
    </div>
  );
}
