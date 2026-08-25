import { useEffect } from "react";
type Props = { title: string; description: string };
function Seo({ title, description }: Props) {
  useEffect(() => {
    document.title = title;
    let tag = document.querySelector<HTMLMetaElement>(
      'meta[name="description"]',
    );
    if (!tag) {
      tag = document.createElement("meta");
      tag.name = "description";
      document.head.appendChild(tag);
    }
    tag.content = description;
  }, [title, description]);
  return null;
}
export default Seo;
