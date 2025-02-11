import { useQuery } from "@tanstack/react-query";
import supabase from "../../supabase/supabaseClient";

export default function Bookmark() {
  const { data } = useQuery({
    queryKey: ["list of bookmarked shows"],
    queryFn: async () => {
      const response = supabase.from("Bookmark").select("*");
      return response;
    },
  });
  console.log(data?.data?.[0]?.movie_name);
  return <div></div>;
}
