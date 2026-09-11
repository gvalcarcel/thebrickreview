import { marked } from "marked";

export interface TocItem {
  id: string;
  text: string;
  level: number;
}

export function extractTableOfContents(markdown: string): TocItem[] {
  const toc: TocItem[] = [];
  const lines = markdown.split("\n");

  for (const line of lines) {
    const headingMatch = line.match(/^(#{2,3})\s+(.*)$/);
    if (headingMatch) {
      const level = headingMatch[1].length;
      const text = headingMatch[2].replace(/[#*`_]/g, "").trim();
      const id = text
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/\s+/g, "-")
        .replace(/[^\w-]+/g, "")
        .replace(/--+/g, "-");

      toc.push({ id, text, level });
    }
  }

  return toc;
}

export function parseMarkdownToHtml(markdown: string): string {
  // Configuración del renderizador para añadir IDs a los encabezados
  const renderer = new marked.Renderer();
  
  renderer.heading = ({ text, depth }) => {
    const plainText = text.replace(/<[^>]+>/g, "");
    const id = plainText
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/\s+/g, "-")
      .replace(/[^\w-]+/g, "")
      .replace(/--+/g, "-");

    return `<h${depth} id="${id}" class="scroll-mt-24">${text}</h${depth}>\n`;
  };

  return marked.parse(markdown, { renderer, gfm: true }) as string;
}