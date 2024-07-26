import Footer from "./Footer";

export default function LayoutWrapper({ children }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
