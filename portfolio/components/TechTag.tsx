interface TechTagProps {
  label: string;
}

const tagColors: Record<string, string> = {
  ".NET": "bg-purple-50 text-purple-700 border-purple-200",
  "ASP.NET Core": "bg-purple-50 text-purple-700 border-purple-200",
  "C#": "bg-indigo-50 text-indigo-700 border-indigo-200",
  React: "bg-cyan-50 text-cyan-700 border-cyan-200",
  TypeScript: "bg-blue-50 text-blue-700 border-blue-200",
  JavaScript: "bg-yellow-50 text-yellow-700 border-yellow-200",
  "SQL Server": "bg-orange-50 text-orange-700 border-orange-200",
  "Entity Framework Core": "bg-green-50 text-green-700 border-green-200",
  CQRS: "bg-rose-50 text-rose-700 border-rose-200",
  "Clean Architecture": "bg-teal-50 text-teal-700 border-teal-200",
  "Web APIs": "bg-sky-50 text-sky-700 border-sky-200",
  ERP: "bg-amber-50 text-amber-700 border-amber-200",
  "Business Workflows": "bg-amber-50 text-amber-700 border-amber-200",
  CMS: "bg-emerald-50 text-emerald-700 border-emerald-200",
  SEO: "bg-lime-50 text-lime-700 border-lime-200",
  "Web Development": "bg-blue-50 text-blue-700 border-blue-200",
  "Content Architecture": "bg-violet-50 text-violet-700 border-violet-200",
  "REST APIs": "bg-sky-50 text-sky-700 border-sky-200",
  Git: "bg-orange-50 text-orange-700 border-orange-200",
  "Multi-Tenancy": "bg-pink-50 text-pink-700 border-pink-200",
};

export default function TechTag({ label }: TechTagProps) {
  const colorClass = tagColors[label] ?? "bg-gray-50 text-gray-700 border-gray-200";
  return (
    <span
      className={`inline-flex items-center px-2.5 py-1 text-xs font-medium border rounded-md ${colorClass}`}
    >
      {label}
    </span>
  );
}
