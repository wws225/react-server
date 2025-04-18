import { usePathname } from "@lazarv/react-server";

import Sidebar from "../../../../components/Sidebar.jsx";
import TableOfContents from "../../../../components/TableOfContents.jsx";
import { getPages } from "../../../../pages.mjs";
import { m } from "../../../../i18n.mjs";

export default function Contents({ lang, category }) {
  const pathname = usePathname();
  const { frontmatter } =
    getPages(pathname, lang)
      .find(({ category: c }) => c.toLowerCase() === category.toLowerCase())
      ?.pages.find(({ langHref }) => langHref === pathname) ?? {};

  if (!frontmatter || frontmatter?.contents === false) return null;

  return (
    <Sidebar id="contents" menu={m.contents_title()} right>
      <TableOfContents title={m.contents_title()} />
    </Sidebar>
  );
}
