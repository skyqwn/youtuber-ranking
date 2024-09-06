import { createClient } from "@/utils/supabase/server";

/**
 * 식당별 랭킹 보여줌
 */

export default async function Home() {
  const supabase = createClient();
  const { data: restaurant } = await supabase.from("restaurant").select();
  const { data: youtuber } = await supabase.from("youtuber").select();

  return <main></main>;
}
