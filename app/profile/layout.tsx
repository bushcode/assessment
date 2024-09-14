import Navbar from "@ui/Navbar";

interface ProfileProps {
  children?: React.ReactNode;
}

export default function ProfileLayout({ children }: ProfileProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar title="Profile" backButton={true} />
      <div className="container flex max-w-[43.75rem] flex-col py-8 px-4">
        {children}
      </div>
    </div>
  );
}
