import DragNdrop from "./DragNdrop";
export default function Tasks() {
  const data = [
    { title: "очередь", items: ["1", "2", "3"] },
    { title: "в процессе", items: ["4", "5", "6"] },
    { title: "готово", items: ["7", "8", "9"] },
  ];
  return (
    <>
      <DragNdrop data={data} />
    </>
  );
}
