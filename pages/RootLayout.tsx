import Footer from "@/components/shared/Footer";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <>{children}</>
      <Footer />
    </>
  );
}
