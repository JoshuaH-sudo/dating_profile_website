import { Outlet, useLocation } from "@remix-run/react";
import { motion } from "framer-motion";
import Header from "~/components/Header";

export default function Home_page_layout() {
  function template() {
    return "unset";
  }
  return (
    <>
      <Header />
      <motion.main
        key={useLocation().pathname}
        initial={{ opacity: 0 }}
        animate={{ y: "0", opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        style={{ height: "100%" }}
        transformTemplate={template}
      >
        <Outlet />
      </motion.main>
    </>
  );
}
