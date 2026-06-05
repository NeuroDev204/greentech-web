interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionLabel({ children, className = "" }: SectionLabelProps) {
  return (
    <div className={`inline-flex items-center gap-2 mb-4 ${className}`}>
      <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
      <span className="text-[10px] font-bold text-green-700 tracking-[0.18em] uppercase">
        {children}
      </span>
    </div>
  );
}
