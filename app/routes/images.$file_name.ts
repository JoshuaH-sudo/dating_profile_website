import { Response, type LoaderFunction } from "@remix-run/node";
import { readFile } from "fs/promises";

export const loader: LoaderFunction = async ({ params }) => {
  console.log("image loader");
  console.log(params);

  const file_data = await readFile(`./app/images/me/${params.file_name}`);
  
  return new Response(file_data, {
    headers: {
      "Content-Type": "image/jpeg",
    },
  });
};
