export default function Card({
  fileName,
  createdAt,
}: {
  fileName: string;
  createdAt: string;
}) {
  return (
    <div className="border shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 rounded-lg p-3 flex flex-col gap-2 shadow-white">
      <p>{createdAt}</p>
      <p>{fileName}</p>
    </div>
  );
}
