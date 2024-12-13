export default function BlogHeader({
  title,
  postDate,
}: {
  title: string;
  postDate: string;
}) {
  return (
    <div className="flex items-center justify-between space-x-4">
      <div className="flex flex-col space-y-2">
        <h1 className="text-3xl font-bold">{title}</h1>
        <p className="text-gray-500 dark:text-gray-300">{postDate}</p>
      </div>
    </div>
  );
}
