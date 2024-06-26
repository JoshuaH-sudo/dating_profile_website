import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Container, ThemeProvider } from "@mui/material";
import type { V2_MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { PropsWithChildren } from "react";
import { main_theme } from "./themes/main";

export const meta: V2_MetaFunction = () => {
  return [{ title: "Joshy's Dating Profile" }];
};

function Document({ children, title }: PropsWithChildren<{ title?: string }>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        {title ? <title>{title}</title> : null}
        <Links />
      </head>
      <body style={{ height: "100vh", margin: "unset", padding: 0 }}>
        <Container
          maxWidth={false}
          style={{ height: "100%", padding: 0, overflowX: "hidden" }}
        >
          {children}
          <Scripts />
          <ScrollRestoration />
          <LiveReload />
        </Container>
      </body>
    </html>
  );
}

export default function App() {
  return (
    <ThemeProvider theme={main_theme}>
      <Document>
        <Outlet />
      </Document>
    </ThemeProvider>
  );
}
