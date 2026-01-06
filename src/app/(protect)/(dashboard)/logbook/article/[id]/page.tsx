export const dynamicParams = true;

import ArticleService from "@/services/articleService";
import { MyArticle } from "@/modules/userProfileContent/components/MyArticle";
import { MyCommentsContainer } from "@/modules/comment/components/MyCommentsContainer";
import { Grid } from "@chakra-ui/react";
import { Suspense } from "react";
import { MySpinner } from "@/ui/MySpinner";

export async function generateStaticParams() {
  try {
    const articles = await ArticleService.getAllArticles({
      limit: 0,
      nextCursor: 0,
    });

    return articles.data.map((article) => ({
      id: String(article.id),
    }));
  } catch (e) {
    return [];
    console.log("Error generating Static Params: " + e);
  }
}

export default async function Article({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <Suspense fallback={<MySpinner />}>
      <Grid rowGap={3} mt={4}>
        <MyArticle id={+id} />
        <MyCommentsContainer id={+id} type={"article"} />
      </Grid>
    </Suspense>
  );
}
