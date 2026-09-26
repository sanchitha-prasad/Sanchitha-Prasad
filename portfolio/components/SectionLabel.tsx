interface SectionLabelProps {
  number?: string;
  label: string;
}

export default function SectionLabel({ number, label }: SectionLabelProps) {
  return (
    <div className="flex items-center gap-3 mb-4">
      {number && (
        <span className="font-mono text-xs font-bold text-[#2563EB] tracking-widest">
          {number}
        </span>
      )}
      <div className="h-px flex-1 max-w-8 bg-[#2563EB]/30" />
      <span className="text-xs font-bold text-[#6B7280] tracking-widest uppercase">
        {label}
      </span>
    </div>
  );
}
