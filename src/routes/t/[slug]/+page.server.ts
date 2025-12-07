import { error, redirect } from "@sveltejs/kit";

export async function load({ params }) {
  redirect(302, `https://music.binimum.org/track/${params.slug}`);
  return {
    id: params.slug
  };
}