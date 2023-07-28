import { Outlet, useLocation } from "@remix-run/react";
import { motion } from "framer-motion";
import Header from "~/components/Header";
import NavigationImages from "~/components/NavigationImages";

export default function IndexRoute() {
  return (
    <>
      <Header />
      <NavigationImages />
      <motion.main
        key={useLocation().pathname}
        style={{ height: "100vh", paddingTop: "1em" }}
        initial={{ opacity: 0 }}
        animate={{ y: "0", opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Outlet />
      </motion.main>
    </>
  );
}
