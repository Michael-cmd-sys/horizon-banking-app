import MobileNavbar from "@/components/MobileNavbar";
import Sidebar from "@/components/Sidebar";
import Image from 'next/image';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const loggedIn = {firstname: "Michael", lastname: "Awuni"}
  return (
    <main className="flex h-screen w-full font-inter">
        <Sidebar user={loggedIn} />

        <div className="flex size-full flex-col">
          <div className="root-layout">
            <Image src="/icons/logo.svg"height={30} width={30} alt="logo"  />
            <div>
              <MobileNavbar user={loggedIn} />
            </div>
          </div>
        { children }
        </div>
    </main>
  );
}
