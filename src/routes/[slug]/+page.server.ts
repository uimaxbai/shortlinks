import { supabase } from "$lib/supabaseClient";
import { error, redirect } from "@sveltejs/kit";

export async function load({ params }) {
  const slug = params.slug;
  const { data } = await supabase.from("links").select() ?? [];
  let destLink = null;
  // check if slug is in DB
  data?.forEach((links) => {
    if (links.sourceLink == slug) {
      destLink = links.destLink;
      redirect(302, destLink);
    }
  });
  if (destLink === null) {
    return error(404, "Not found");
  }
  return {
    link: destLink
  };
}