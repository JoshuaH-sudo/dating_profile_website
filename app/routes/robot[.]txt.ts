import type { LoaderFunction } from "@remix-run/node";

export const loader: LoaderFunction = () => {
  // handle "GET" request
  // set up our text content that will be returned in the response
  const robotText = `
  User-agent: *
  Disallow: /
`;
  // return the text content, a status 200 success response, and set the content type to text/plain
  return new Response(robotText, {
    status: 200,
    headers: {
      "Content-Type": "text/plain",
    },
  });
};
