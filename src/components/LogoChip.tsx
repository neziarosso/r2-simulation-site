export default function LogoChip({ name }: { name: string }) {
  return (
    <div className="group relative flex h-24 flex-col items-center justify-center overflow-hidden rounded-xl border border-[color:var(--color-mist-dark)] bg-white px-6 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
      <span className="font-heading text-lg font-semibold tracking-tight text-[color:var(--color-slate)]/70 transition-colors duration-300 group-hover:text-[color:var(--color-navy-900)] sm:text-xl">
        {name}
      </span>
      <span className="absolute inset-x-6 bottom-0 h-0.5 origin-left scale-x-0 spectrum-gradient transition-transform duration-300 group-hover:scale-x-100" />
    </div>
  );
}
