import { Outlet, useLocation } from "@remix-run/react";
import { motion } from "framer-motion";
import Header from "~/components/Header";

export default function Home_page_layout() {
  return (
    <>
      <Header />
      <motion.main
        key={useLocation().pathname}
        style={{ height: "100vh", paddingTop: "1em" }}
        initial={{ opacity: 0 }}
        animate={{ y: "0", opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Outlet/>
      </motion.main>
    </>
  );
}
