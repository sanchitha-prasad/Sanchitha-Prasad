import Link from "next/link";
import { ArrowRightIcon } from "@/components/Icons";

interface NoteCardProps {
  title: string;
  summary: string;
  tag: string;
  href: string;
  date?: string;
}

export default function NoteCard({ title, summary, tag, href, date }: NoteCardProps) {
  return (
    <Link href={href} className="group block">
      <article className="p-6 bg-[#F1F0ED] rounded-xl border border-[#E4E2DC] hover:border-[#2563EB]/40 hover:bg-white hover:shadow-md transition-all duration-300">
        <div className="flex items-start justify-between gap-4 mb-3">
          <span className="text-xs font-bold text-[#2563EB] tracking-widest uppercase">{tag}</span>
          {date && <span className="text-xs text-[#9CA3AF] font-mono">{date}</span>}
        </div>
        <h3 className="text-base font-bold text-[#1A1A1A] mb-2 group-hover:text-[#2563EB] transition-colors leading-snug">
          {title}
        </h3>
        <p className="text-sm text-[#6B7280] leading-relaxed mb-4">{summary}</p>
        <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#2563EB] opacity-0 group-hover:opacity-100 transition-opacity">
          Read note <ArrowRightIcon size={12} />
        </span>
      </article>
    </Link>
  );
}
