interface ChantSectionProps {
  title: string;
  description?: string;
  children: React.ReactNode;
}

export const ChantSection: React.FC<ChantSectionProps> = ({
  title,
  description,
  children,
}) => {
  return (
    <section className="w-full max-w-4xl p-4 rounded-xl border bg-background shadow-sm">
      <h2 className="text-xl font-bold tracking-tight">{title}</h2>
      {description && (
        <p className="text-sm text-muted-foreground mb-4">{description}</p>
      )}
      <div className="flex flex-col gap-4">{children}</div>
    </section>
  );
};
