interface SectionContentProps {
  children: React.ReactNode;
  isMasked?: boolean;
}

function SectionContent({ children }: SectionContentProps) {
  return (
    <div className="background-grid background-grid--fade-out">
      <div className="relative">{children}</div>
    </div>
  );
}

export default SectionContent;
