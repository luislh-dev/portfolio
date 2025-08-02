interface SectionContentProps {
  children: React.ReactNode;
}

function SectionContent({ children }: Readonly<SectionContentProps>) {
  return (
    <div className="background-grid background-grid--fade-out">
      <div className="relative">{children}</div>
    </div>
  );
}

export default SectionContent;
