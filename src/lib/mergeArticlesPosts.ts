import { IArticle } from "../types/models/IArticle";
import { IPost } from "../types/models/IPost";

export function mergeArticlesPosts(
  articles: IArticle[] = [],
  posts: IPost[] = [],
): (IArticle | IPost)[] {
  const combined = [...articles, ...posts];
  combined.sort((a, b) => {
    if (a.createdAt && b.createdAt) {
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    }
    return 0;
  });
  return combined;
}
