import { format } from "date-fns";

export default function BlogHeader({
  title,
  subtitle,
  postDate,
}: {
  title: string;
  subtitle?: string;
  postDate: string;
}) {
  return (
    <div className="flex items-center justify-between space-x-4">
      <div className="flex flex-col space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
        {subtitle && (
          <p className="text-xl text-gray-600 dark:text-gray-400">{subtitle}</p>
        )}
        <p className="text-gray-500 dark:text-gray-300">
          {format(postDate, "MMM dd, yyyy")}
        </p>
      </div>
    </div>
  );
}
