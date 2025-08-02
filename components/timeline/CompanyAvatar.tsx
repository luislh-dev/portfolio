interface CompanyAvatarProps {
  company: string;
  className?: string;
}

export function CompanyAvatar({ company, className = '' }: CompanyAvatarProps) {
  return (
    <div
      className={`flex h-20 w-20 items-center justify-center rounded-full bg-blue-500 ${className}`}
    >
      <span className="text-3xl font-bold text-white">{company.charAt(0).toUpperCase()}</span>
    </div>
  );
}
