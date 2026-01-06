export const dynamicParams = true;

import PostService from "@/services/postService";
import { MyPost } from "@/modules/userProfileContent/components/MyPost";
import { MyCommentsContainer } from "@/modules/comment/components/MyCommentsContainer";
import { Grid } from "@chakra-ui/react";
import { MySpinner } from "@/ui/MySpinner";
import { Suspense } from "react";

export async function generateStaticParams() {
  try {
    const posts = await PostService.getAllPosts({ limit: 0, nextCursor: 0 });

    return posts.data.map((post) => ({
      id: String(post.id),
    }));
  } catch (e) {
    return [];
    console.log("Error generating Static Params: " + e);
  }
}

export default async function Post({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <Suspense fallback={<MySpinner />}>
      <Grid rowGap={3} mt={4}>
        <MyPost id={+id} />
        <MyCommentsContainer type={"post"} id={+id} />
      </Grid>
    </Suspense>
  );
}
