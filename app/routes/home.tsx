import { Outlet, useLocation } from "@remix-run/react";
import { motion } from "framer-motion";
import NavigationImages from "~/components/NavigationImages";

export default function IndexRoute() {
  return (
    <div>
      <NavigationImages />
      <motion.main
        key={useLocation().pathname}
        initial={{ y: "-20%", opacity: 0 }}
        animate={{ y: "0", opacity: 1 }}
        exit={{ y: "-20%", opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Outlet />
      </motion.main>
    </div>
  );
}
