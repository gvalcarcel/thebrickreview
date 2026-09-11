interface ArticleContentProps {
  htmlContent: string;
}

export function ArticleContent({ htmlContent }: ArticleContentProps) {
  return (
    <div
      className="prose-editorial text-zinc-800 selection:bg-amber-100"
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
  );
}