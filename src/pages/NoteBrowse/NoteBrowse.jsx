import { TextCard } from "components/TextCard/TextCard";

export function NoteBrowse(props) {
  return (
    <>
      <TextCard
        title="Super note"
        subtitle="10/10/2023"
        content="Blabla bla"
        onClick={() => alert("onClick !")}
        onClickTrash={() => alert("onClickTrash !")}
      />
    </>
  );
}
