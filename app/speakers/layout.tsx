import ScrollUp from "@/components/scroll-up";

export default function Layout(props: {
  popup: React.ReactNode;
  speakers: React.ReactNode;
}) {
  return (
    <>
      {props.popup}
      {props.speakers}
      <ScrollUp />
    </>
  );
}
