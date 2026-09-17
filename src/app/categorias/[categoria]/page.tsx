import CategoryPage, { generateStaticParams as baseStaticParams, generateMetadata as baseMetadata } from "@/app/categories/[category]/page";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return [
    { categoria: "icons" },
    { categoria: "star-wars" },
    { categoria: "technic" },
    { categoria: "ideas" },
    { categoria: "disney" },
    { categoria: "dc" },
  ];
}

export async function generateMetadata({ params }: { params: Promise<{ categoria: string }> }): Promise<Metadata> {
  const { categoria } = await params;
  return baseMetadata({ params: Promise.resolve({ category: categoria }) });
}

export default async function CompatCategoryPage({ params }: { params: Promise<{ categoria: string }> }) {
  const { categoria } = await params;
  return <CategoryPage params={Promise.resolve({ category: categoria })} />;
}