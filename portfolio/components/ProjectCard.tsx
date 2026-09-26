import Link from "next/link";
import Image from "next/image";
import TechTag from "./TechTag";
import { ArrowUpRightIcon } from "@/components/Icons";

interface ProjectCardProps {
  number: string;
  title: string;
  label: string;
  description: string;
  tags: string[];
  image: string;
  href: string;
}

export default function ProjectCard({
  number,
  title,
  label,
  description,
  tags,
  image,
  href,
}: ProjectCardProps) {
  return (
    <article className="group grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-[#E4E2DC] bg-white hover:border-[#2563EB]/30 hover:shadow-xl transition-all duration-300">
      {/* Image */}
      <div className="relative overflow-hidden bg-[#0D1B2A] aspect-video lg:aspect-auto min-h-64">
        <Image
          src={image}
          alt={`${title} project screenshot`}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
        {/* Overlay number */}
        <div className="absolute top-5 left-5">
          <span className="font-mono text-xs font-bold text-white/40 tracking-widest">
            {number}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-8 lg:p-10 flex flex-col justify-between">
        <div>
          <p className="text-xs font-bold text-[#2563EB] tracking-widest uppercase mb-3">
            {label}
          </p>
          <h3 className="text-2xl font-bold text-[#1A1A1A] mb-4 group-hover:text-[#2563EB] transition-colors">
            {title}
          </h3>
          <p className="text-[#6B7280] leading-relaxed mb-6 text-sm">{description}</p>
          <div className="flex flex-wrap gap-2 mb-8">
            {tags.map((tag) => (
              <TechTag key={tag} label={tag} />
            ))}
          </div>
        </div>
        <Link
          href={href}
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#2563EB] hover:gap-3 transition-all duration-200"
        >
          View Case Study
          <ArrowUpRightIcon size={16} />
        </Link>
      </div>
    </article>
  );
}
