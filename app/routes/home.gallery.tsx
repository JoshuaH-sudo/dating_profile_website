import { Outlet } from "@remix-run/react";

export default function IndexRoute() {
  return (
    <div>
      <h1>gallery!!</h1>
      <Outlet/>
    </div>
  );
}
