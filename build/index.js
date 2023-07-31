var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// node_modules/@remix-run/dev/dist/config/defaults/node/entry.server.react-stream.tsx
var entry_server_react_stream_exports = {};
__export(entry_server_react_stream_exports, {
  default: () => handleRequest
});
var import_stream = require("stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return (0, import_isbot.default)(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "node_modules/@remix-run/dev/dist/config/defaults/node/entry.server.react-stream.tsx",
          lineNumber: 42,
          columnNumber: 7
        },
        this
      ),
      {
        onAllReady() {
          shellRendered = !0;
          let body = new import_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "node_modules/@remix-run/dev/dist/config/defaults/node/entry.server.react-stream.tsx",
          lineNumber: 91,
          columnNumber: 7
        },
        this
      ),
      {
        onShellReady() {
          shellRendered = !0;
          let body = new import_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  meta: () => meta
});
var import_material2 = require("@mui/material"), import_react2 = require("@remix-run/react");

// app/themes/main.ts
var import_material = require("@mui/material"), theme = {
  palette: {
    mode: "light",
    primary: {
      light: "#0DC34E",
      main: "#139A43",
      dark: "#1F763E"
    },
    secondary: {
      light: "#3075AE",
      main: "#30638E",
      dark: "#2F5677"
    },
    accent: {
      light: "#FFC700",
      main: "#F5B700",
      dark: "#D2A318"
    }
  },
  typography: {
    h1: {
      fontFamily: "Space Grotesk",
      fontSize: "72pt",
      fontStyle: "normal",
      fontWeight: 700,
      lineHeight: "normal"
    },
    h2: {
      fontFamily: "Space Grotesk",
      fontSize: "48pt",
      fontStyle: "normal",
      fontWeight: 700,
      lineHeight: "normal"
    },
    h3: {
      fontFamily: "Space Grotesk",
      fontSize: "32pt",
      fontStyle: "normal",
      fontWeight: 700,
      lineHeight: "normal"
    },
    h4: {
      fontFamily: "Space Grotesk",
      fontSize: "24pt",
      fontStyle: "normal",
      fontWeight: 700,
      lineHeight: "normal"
    },
    h5: {
      fontFamily: "Space Grotesk",
      fontSize: "18",
      fontStyle: "normal",
      fontWeight: 700,
      lineHeight: "normal"
    },
    subtitle1: {
      textAlign: "center",
      fontFamily: "Lexend Deca",
      fontSize: "20px",
      fontStyle: "normal",
      fontWeight: 300,
      lineHeight: "normal"
    },
    fontFamily: "Lexend Deca"
  }
}, main_theme = (0, import_material.createTheme)(theme);

// app/root.tsx
var import_jsx_dev_runtime2 = require("react/jsx-dev-runtime"), links = () => [], meta = () => [{ title: "Joshy's Website" }];
function Document({ children, title }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 28,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 29,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 30,
        columnNumber: 9
      }, this),
      title ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("title", { children: title }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 31,
        columnNumber: 18
      }, this) : null,
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 32,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 27,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", { style: { height: "100vh", margin: "unset", padding: 0 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_material2.Container, { maxWidth: !1, style: { height: "100%", padding: 0, overflowX: "hidden" }, children: [
      children,
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 37,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 38,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 39,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 35,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 34,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 26,
    columnNumber: 5
  }, this);
}
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_material2.ThemeProvider, { theme: main_theme, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Document, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Outlet, {}, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 50,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 49,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 48,
    columnNumber: 5
  }, this);
}

// app/routes/home.contact.tsx
var home_contact_exports = {};
__export(home_contact_exports, {
  default: () => IndexRoute
});
var import_react3 = require("@remix-run/react"), import_jsx_dev_runtime3 = require("react/jsx-dev-runtime");
function IndexRoute() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { children: "contact!!" }, void 0, !1, {
      fileName: "app/routes/home.contact.tsx",
      lineNumber: 6,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Outlet, {}, void 0, !1, {
      fileName: "app/routes/home.contact.tsx",
      lineNumber: 7,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/home.contact.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// app/routes/home.gallery.tsx
var home_gallery_exports = {};
__export(home_gallery_exports, {
  default: () => IndexRoute2
});
var import_react4 = require("@remix-run/react"), import_jsx_dev_runtime4 = require("react/jsx-dev-runtime");
function IndexRoute2() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h1", { children: "gallery!!" }, void 0, !1, {
      fileName: "app/routes/home.gallery.tsx",
      lineNumber: 6,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react4.Outlet, {}, void 0, !1, {
      fileName: "app/routes/home.gallery.tsx",
      lineNumber: 7,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/home.gallery.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// app/routes/home._index.tsx
var home_index_exports = {};
__export(home_index_exports, {
  default: () => Index_route
});
var import_material7 = require("@mui/material");

// app/components/sections/About.tsx
var import_material4 = require("@mui/material");

// app/components/Description_list.tsx
var import_material3 = require("@mui/material"), import_jsx_dev_runtime5 = require("react/jsx-dev-runtime"), List = ({ children }) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
  import_material3.Stack,
  {
    spacing: { xs: 2, sm: 2, md: 4 },
    divider: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_material3.Divider, { orientation: "horizontal", flexItem: !0 }, void 0, !1, {
      fileName: "app/components/Description_list.tsx",
      lineNumber: 8,
      columnNumber: 16
    }, this),
    direction: "column",
    padding: "1rem",
    children
  },
  void 0,
  !1,
  {
    fileName: "app/components/Description_list.tsx",
    lineNumber: 6,
    columnNumber: 5
  },
  this
), Item = ({ image_side, image_src, title, children }) => {
  let theme2 = (0, import_material3.useTheme)(), image_display = /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_material3.Grid, { item: !0, xs: 6, children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
    "img",
    {
      src: image_src,
      alt: "description_image",
      style: {
        height: "40vw",
        width: "40vw",
        fill: "#ACACAC",
        filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
        borderRadius: "10px"
      }
    },
    void 0,
    !1,
    {
      fileName: "app/components/Description_list.tsx",
      lineNumber: 28,
      columnNumber: 7
    },
    this
  ) }, void 0, !1, {
    fileName: "app/components/Description_list.tsx",
    lineNumber: 27,
    columnNumber: 5
  }, this);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
    import_material3.Grid,
    {
      container: !0,
      justifyContent: "space-between",
      alignItems: "center",
      spacing: 2,
      children: [
        image_side === "left" && image_display,
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_material3.Grid, { item: !0, xs: 6, alignSelf: "flex-start", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_material3.Typography, { variant: "h4", color: theme2.palette.accent.light, children: title }, void 0, !1, {
            fileName: "app/components/Description_list.tsx",
            lineNumber: 52,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_material3.Typography, { variant: "body1", color: "white", children }, void 0, !1, {
            fileName: "app/components/Description_list.tsx",
            lineNumber: 55,
            columnNumber: 9
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/Description_list.tsx",
          lineNumber: 51,
          columnNumber: 7
        }, this),
        image_side === "right" && image_display
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/Description_list.tsx",
      lineNumber: 43,
      columnNumber: 5
    },
    this
  );
}, Description_list = Object.assign(List, {
  Item
});

// app/images/me/headshot.jpg
var headshot_default = "/build/_assets/headshot-P56654TJ.jpg";

// app/components/sections/About.tsx
var import_jsx_dev_runtime6 = require("react/jsx-dev-runtime"), Offset = (0, import_material4.styled)("div")(({ theme: theme2 }) => theme2.mixins.toolbar), About = () => {
  let theme2 = (0, import_material4.useTheme)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
    import_material4.Box,
    {
      style: {
        height: "100%",
        backgroundColor: theme2.palette.secondary.main
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Offset, { style: { backgroundColor: theme2.palette.primary.main } }, void 0, !1, {
          fileName: "app/components/sections/About.tsx",
          lineNumber: 17,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Description_list, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
            Description_list.Item,
            {
              title: "Heading 1",
              image_side: "left",
              image_src: headshot_default,
              children: "abcdefg"
            },
            void 0,
            !1,
            {
              fileName: "app/components/sections/About.tsx",
              lineNumber: 19,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
            Description_list.Item,
            {
              title: "Heading 2",
              image_side: "right",
              image_src: headshot_default,
              children: "abcdefg"
            },
            void 0,
            !1,
            {
              fileName: "app/components/sections/About.tsx",
              lineNumber: 26,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
            Description_list.Item,
            {
              title: "Heading 3",
              image_side: "left",
              image_src: headshot_default,
              children: "abcdefg"
            },
            void 0,
            !1,
            {
              fileName: "app/components/sections/About.tsx",
              lineNumber: 33,
              columnNumber: 9
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/sections/About.tsx",
          lineNumber: 18,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/sections/About.tsx",
      lineNumber: 11,
      columnNumber: 5
    },
    this
  );
}, About_default = About;

// app/components/Divider.tsx
var import_icons_material = require("@mui/icons-material"), import_material5 = require("@mui/material"), import_jsx_dev_runtime7 = require("react/jsx-dev-runtime"), Divider2 = () => {
  let theme2 = (0, import_material5.useTheme)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
    import_material5.Box,
    {
      "data-cy": "section-divider",
      sx: {
        position: "relative",
        zIndex: 1e3,
        width: "100vw",
        flexGrow: 1,
        backgroundColor: theme2.palette.primary.light
      },
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
        import_material5.Grid,
        {
          container: !0,
          justifyContent: "center",
          alignItems: "center",
          padding: "15px",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_material5.Grid, { item: !0, xs: 11, textAlign: "end", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_material5.Typography, { variant: "h4", color: "white", children: "Send memes here ->" }, void 0, !1, {
              fileName: "app/components/Divider.tsx",
              lineNumber: 25,
              columnNumber: 11
            }, this) }, void 0, !1, {
              fileName: "app/components/Divider.tsx",
              lineNumber: 24,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_material5.Grid, { item: !0, xs: 1, children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
              import_material5.IconButton,
              {
                style: { padding: 0 },
                onClick: () => window.open("https://www.instagram.com/yeet_110100100/"),
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_icons_material.Instagram, { fontSize: "large" }, void 0, !1, {
                  fileName: "app/components/Divider.tsx",
                  lineNumber: 36,
                  columnNumber: 13
                }, this)
              },
              void 0,
              !1,
              {
                fileName: "app/components/Divider.tsx",
                lineNumber: 30,
                columnNumber: 11
              },
              this
            ) }, void 0, !1, {
              fileName: "app/components/Divider.tsx",
              lineNumber: 29,
              columnNumber: 9
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/components/Divider.tsx",
          lineNumber: 18,
          columnNumber: 7
        },
        this
      )
    },
    void 0,
    !1,
    {
      fileName: "app/components/Divider.tsx",
      lineNumber: 8,
      columnNumber: 5
    },
    this
  );
}, Divider_default = Divider2;

// app/components/sections/Intro.tsx
var import_material6 = require("@mui/material");

// app/images/decorations/soyface-wojak.png
var soyface_wojak_default = "/build/_assets/soyface-wojak-3O5XTLTH.png";

// app/images/decorations/will-smith-presents.png
var will_smith_presents_default = "/build/_assets/will-smith-presents-WJ33UHIQ.png";

// app/components/sections/Intro.tsx
var import_jsx_dev_runtime8 = require("react/jsx-dev-runtime"), Intro = () => {
  let theme2 = (0, import_material6.useTheme)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
    import_material6.Box,
    {
      "data-cy": "intro-box",
      style: {
        margin: "auto",
        display: "flex",
        height: "100%",
        width: "347px",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "relative"
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
          import_material6.Typography,
          {
            "data-cy": "title",
            variant: "h3",
            color: theme2.palette.accent.light,
            children: "Joshua Hoban"
          },
          void 0,
          !1,
          {
            fileName: "app/components/sections/Intro.tsx",
            lineNumber: 22,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_material6.Typography, { "data-cy": "subtitle", variant: "subtitle1", color: "#FFF", children: '"Yeet, Yoat, Yeetus"' }, void 0, !1, {
          fileName: "app/components/sections/Intro.tsx",
          lineNumber: 29,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
          import_material6.Box,
          {
            "data-cy": "main-image-box",
            style: {
              paddingTop: "2rem",
              position: "relative"
            },
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
                "img",
                {
                  src: headshot_default,
                  alt: "main_image",
                  style: {
                    width: "181px",
                    height: "181px",
                    flexShrink: 0,
                    borderRadius: "6.678px",
                    border: "2.003px solid #000"
                  }
                },
                void 0,
                !1,
                {
                  fileName: "app/components/sections/Intro.tsx",
                  lineNumber: 39,
                  columnNumber: 9
                },
                this
              ),
              soyface_overlay_image,
              will_smith_presents_image
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/components/sections/Intro.tsx",
            lineNumber: 32,
            columnNumber: 7
          },
          this
        )
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/sections/Intro.tsx",
      lineNumber: 9,
      columnNumber: 5
    },
    this
  );
}, will_smith_presents_image = /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
  import_material6.Box,
  {
    "data-cy": "will-smith-box",
    sx: {
      position: "absolute",
      transform: "rotate(30deg)",
      boxSizing: "border-box",
      zIndex: "1000",
      top: 0,
      left: "-12rem"
    },
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
      "img",
      {
        "data-cy": "will-smith-image",
        style: {
          width: "18.17575rem",
          height: "15.64363rem",
          flexShrink: 0
        },
        src: will_smith_presents_default,
        alt: "will-smith-presents"
      },
      void 0,
      !1,
      {
        fileName: "app/components/sections/Intro.tsx",
        lineNumber: 69,
        columnNumber: 5
      },
      this
    )
  },
  void 0,
  !1,
  {
    fileName: "app/components/sections/Intro.tsx",
    lineNumber: 58,
    columnNumber: 3
  },
  this
), soyface_overlay_image = /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
  "img",
  {
    "data-cy": "soyface-overlay",
    style: {
      width: "378px",
      height: "299px",
      position: "absolute",
      top: "2em",
      left: "-53%",
      flexShrink: 0
    },
    src: soyface_wojak_default,
    alt: "soyface overlay"
  },
  void 0,
  !1,
  {
    fileName: "app/components/sections/Intro.tsx",
    lineNumber: 83,
    columnNumber: 3
  },
  this
), Intro_default = Intro;

// app/components/UI/Background_image.tsx
var import_jsx_dev_runtime9 = require("react/jsx-dev-runtime"), Background_image = ({
  image_src,
  style_props,
  img_props
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
  "img",
  {
    src: image_src,
    style: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100%",
      zIndex: -1e3,
      ...style_props
    },
    ...img_props
  },
  void 0,
  !1,
  {
    fileName: "app/components/UI/Background_image.tsx",
    lineNumber: 17,
    columnNumber: 5
  },
  this
), Background_image_default = Background_image;

// app/images/layouts/home-background-image.png
var home_background_image_default = "/build/_assets/home-background-image-VBQ3VACC.png";

// app/routes/home._index.tsx
var import_jsx_dev_runtime10 = require("react/jsx-dev-runtime");
function Index_route() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_jsx_dev_runtime10.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
      Background_image_default,
      {
        image_src: home_background_image_default,
        style_props: {
          backgroundColor: "#FE6BBF",
          filter: "blur(5px)"
        }
      },
      void 0,
      !1,
      {
        fileName: "app/routes/home._index.tsx",
        lineNumber: 11,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
      import_material7.Box,
      {
        style: {
          height: "100%",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        },
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
            import_material7.Box,
            {
              "data-cy": "intro-information-wrapper",
              style: {
                flexGrow: "1",
                height: "100%"
              },
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(Intro_default, {}, void 0, !1, {
                fileName: "app/routes/home._index.tsx",
                lineNumber: 34,
                columnNumber: 11
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/routes/home._index.tsx",
              lineNumber: 27,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(Divider_default, {}, void 0, !1, {
            fileName: "app/routes/home._index.tsx",
            lineNumber: 36,
            columnNumber: 9
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/routes/home._index.tsx",
        lineNumber: 18,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(About_default, {}, void 0, !1, {
      fileName: "app/routes/home._index.tsx",
      lineNumber: 39,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/home._index.tsx",
    lineNumber: 10,
    columnNumber: 5
  }, this);
}

// app/routes/home.skills.tsx
var home_skills_exports = {};
__export(home_skills_exports, {
  default: () => IndexRoute3
});
var import_react5 = require("@remix-run/react"), import_jsx_dev_runtime11 = require("react/jsx-dev-runtime");
function IndexRoute3() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("h1", { children: "skills!!" }, void 0, !1, {
      fileName: "app/routes/home.skills.tsx",
      lineNumber: 6,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_react5.Outlet, {}, void 0, !1, {
      fileName: "app/routes/home.skills.tsx",
      lineNumber: 7,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/home.skills.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// app/routes/home.about.tsx
var home_about_exports = {};
__export(home_about_exports, {
  default: () => AboutPage
});
var import_material8 = require("@mui/material"), import_jsx_dev_runtime12 = require("react/jsx-dev-runtime");
function AboutPage() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
    import_material8.Box,
    {
      sx: {
        width: "100%",
        height: "100%"
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(TextArea, { name: "whoami", side: "left" }, void 0, !1, {
          fileName: "app/routes/home.about.tsx",
          lineNumber: 12,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(TextArea, { name: "job", side: "right" }, void 0, !1, {
          fileName: "app/routes/home.about.tsx",
          lineNumber: 13,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(TextArea, { name: "likes", side: "left" }, void 0, !1, {
          fileName: "app/routes/home.about.tsx",
          lineNumber: 14,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(TextArea, { name: "final_world", side: "right" }, void 0, !1, {
          fileName: "app/routes/home.about.tsx",
          lineNumber: 15,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/routes/home.about.tsx",
      lineNumber: 6,
      columnNumber: 5
    },
    this
  );
}
var TextArea = ({ name, side, children }) => /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
  import_material8.Box,
  {
    id: name,
    sx: {
      outline: "solid",
      height: "25%",
      display: "flex",
      justifyContent: side
    },
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_material8.Box, { sx: { backgroundColor: "blue", width: "33.33%" }, children }, void 0, !1, {
      fileName: "app/routes/home.about.tsx",
      lineNumber: 34,
      columnNumber: 5
    }, this)
  },
  void 0,
  !1,
  {
    fileName: "app/routes/home.about.tsx",
    lineNumber: 25,
    columnNumber: 3
  },
  this
);

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => Splash_page
});
var import_material9 = require("@mui/material"), import_react6 = require("@remix-run/react");

// app/images/decorations/giga-chad-video-placeholder.png
var giga_chad_video_placeholder_default = "/build/_assets/giga-chad-video-placeholder-RZ6OWIHM.png";

// app/routes/_index.tsx
var import_jsx_dev_runtime13 = require("react/jsx-dev-runtime");
function Splash_page() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_jsx_dev_runtime13.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
      "img",
      {
        style: {
          position: "absolute",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh"
        },
        src: giga_chad_video_placeholder_default,
        alt: "giga-chad-video"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/_index.tsx",
        lineNumber: 8,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
      import_material9.Grid,
      {
        container: !0,
        spacing: 0,
        direction: "column",
        alignItems: "center",
        justifyContent: "center",
        sx: { minHeight: "100vh" },
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_material9.Grid, { item: !0, xs: 3, children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_react6.Link, { to: "home", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_material9.Button, { variant: "contained", fullWidth: !0, children: "Enter" }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 30,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 29,
          columnNumber: 11
        }, this) }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 28,
          columnNumber: 9
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/routes/_index.tsx",
        lineNumber: 20,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
}

// app/routes/home.tsx
var home_exports = {};
__export(home_exports, {
  default: () => Home_page_layout
});
var import_react8 = require("@remix-run/react"), import_framer_motion = require("framer-motion");

// app/components/Header.tsx
var import_material10 = require("@mui/material"), import_react7 = require("@remix-run/react"), import_jsx_dev_runtime14 = require("react/jsx-dev-runtime"), Header = () => /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_jsx_dev_runtime14.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
  import_material10.AppBar,
  {
    position: "fixed",
    color: "transparent",
    style: {
      left: 0,
      width: "100vw",
      boxShadow: "revert"
    },
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_material10.Toolbar, { sx: { justifyContent: "space-around" }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_react7.Link, { to: "/home", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_material10.Chip, { label: "Home", variant: "filled", clickable: !0 }, void 0, !1, {
        fileName: "app/components/Header.tsx",
        lineNumber: 18,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/components/Header.tsx",
        lineNumber: 17,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_react7.Link, { to: "/gallery", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_material10.Chip, { label: "Gallery", variant: "filled", clickable: !0 }, void 0, !1, {
        fileName: "app/components/Header.tsx",
        lineNumber: 21,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/components/Header.tsx",
        lineNumber: 20,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_react7.Link, { to: "/survey", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_material10.Chip, { label: "Survey", variant: "filled", clickable: !0 }, void 0, !1, {
        fileName: "app/components/Header.tsx",
        lineNumber: 24,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/components/Header.tsx",
        lineNumber: 23,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_react7.Link, { to: "/date", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_material10.Chip, { label: "Date", variant: "filled", clickable: !0 }, void 0, !1, {
        fileName: "app/components/Header.tsx",
        lineNumber: 27,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/components/Header.tsx",
        lineNumber: 26,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Header.tsx",
      lineNumber: 16,
      columnNumber: 9
    }, this)
  },
  void 0,
  !1,
  {
    fileName: "app/components/Header.tsx",
    lineNumber: 7,
    columnNumber: 7
  },
  this
) }, void 0, !1, {
  fileName: "app/components/Header.tsx",
  lineNumber: 6,
  columnNumber: 5
}, this), Header_default = Header;

// app/routes/home.tsx
var import_jsx_dev_runtime15 = require("react/jsx-dev-runtime");
function Home_page_layout() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_jsx_dev_runtime15.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(Header_default, {}, void 0, !1, {
      fileName: "app/routes/home.tsx",
      lineNumber: 8,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
      import_framer_motion.motion.main,
      {
        style: { height: "100%" },
        initial: { opacity: 0 },
        animate: { y: "0", opacity: 1 },
        exit: { opacity: 0 },
        transition: { duration: 0.3 },
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_react8.Outlet, {}, void 0, !1, {
          fileName: "app/routes/home.tsx",
          lineNumber: 17,
          columnNumber: 9
        }, this)
      },
      (0, import_react8.useLocation)().pathname,
      !1,
      {
        fileName: "app/routes/home.tsx",
        lineNumber: 9,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/routes/home.tsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-WI22WSFH.js", imports: ["/build/_shared/chunk-ZWGWGGVF.js", "/build/_shared/chunk-GIAAE3CH.js", "/build/_shared/chunk-OWZHQ5LE.js", "/build/_shared/chunk-XU7DNSPJ.js", "/build/_shared/chunk-LJPASVDY.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-BOXFZXVX.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-FD7E2LHA.js", imports: ["/build/_shared/chunk-WBQF4K2K.js", "/build/_shared/chunk-NMZL6IDN.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-FMBE6H6V.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/home": { id: "routes/home", parentId: "root", path: "home", index: void 0, caseSensitive: void 0, module: "/build/routes/home-JBROGQKA.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/home._index": { id: "routes/home._index", parentId: "routes/home", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/home._index-LUGN2Z7P.js", imports: ["/build/_shared/chunk-WBQF4K2K.js", "/build/_shared/chunk-NMZL6IDN.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/home.about": { id: "routes/home.about", parentId: "routes/home", path: "about", index: void 0, caseSensitive: void 0, module: "/build/routes/home.about-YTKF7YV3.js", imports: ["/build/_shared/chunk-WBQF4K2K.js", "/build/_shared/chunk-NMZL6IDN.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/home.contact": { id: "routes/home.contact", parentId: "routes/home", path: "contact", index: void 0, caseSensitive: void 0, module: "/build/routes/home.contact-A27YYOMF.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/home.gallery": { id: "routes/home.gallery", parentId: "routes/home", path: "gallery", index: void 0, caseSensitive: void 0, module: "/build/routes/home.gallery-GBEQXSN3.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/home.skills": { id: "routes/home.skills", parentId: "routes/home", path: "skills", index: void 0, caseSensitive: void 0, module: "/build/routes/home.skills-LCLT72MA.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, version: "36f42b86", hmr: { runtime: "/build/_shared/chunk-LJPASVDY.js", timestamp: 1690787314674 }, url: "/build/manifest-36F42B86.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", future = { v2_dev: !0, unstable_postcss: !1, unstable_tailwind: !1, v2_errorBoundary: !0, v2_headers: !0, v2_meta: !0, v2_normalizeFormMethod: !0, v2_routeConvention: !0 }, publicPath = "/build/", entry = { module: entry_server_react_stream_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/home.contact": {
    id: "routes/home.contact",
    parentId: "routes/home",
    path: "contact",
    index: void 0,
    caseSensitive: void 0,
    module: home_contact_exports
  },
  "routes/home.gallery": {
    id: "routes/home.gallery",
    parentId: "routes/home",
    path: "gallery",
    index: void 0,
    caseSensitive: void 0,
    module: home_gallery_exports
  },
  "routes/home._index": {
    id: "routes/home._index",
    parentId: "routes/home",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: home_index_exports
  },
  "routes/home.skills": {
    id: "routes/home.skills",
    parentId: "routes/home",
    path: "skills",
    index: void 0,
    caseSensitive: void 0,
    module: home_skills_exports
  },
  "routes/home.about": {
    id: "routes/home.about",
    parentId: "routes/home",
    path: "about",
    index: void 0,
    caseSensitive: void 0,
    module: home_about_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  },
  "routes/home": {
    id: "routes/home",
    parentId: "root",
    path: "home",
    index: void 0,
    caseSensitive: void 0,
    module: home_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map
