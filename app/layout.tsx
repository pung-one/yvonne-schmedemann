import type { Metadata } from "next";
import StyledComponentsRegistry from "@/lib/registry";
import { GlobalStyles } from "@/globalStyles/global_styles";
import { Layout } from "@/components/Layout";
import ReactDOM from "react-dom";

export const metadata: Metadata = {
  title: "Yvonne Schmedemann",
  description: "Photography by Yvonne Schmedemann",
  robots: { index: false, follow: false },
};

ReactDOM.preload("/fonts/logoFont.woff2", {
  as: "font",
  crossOrigin: "",
});

ReactDOM.preload("/fonts/logoFont.woff", {
  as: "font",
  crossOrigin: "",
});

ReactDOM.preload("/fonts/IvarDisplay-Regular.woff2", {
  as: "font",
  crossOrigin: "",
});

ReactDOM.preload("/fonts/IvarDisplay-Regular.woff", {
  as: "font",
  crossOrigin: "",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <StyledComponentsRegistry>
        <GlobalStyles />

        <Layout>{children}</Layout>
      </StyledComponentsRegistry>
    </html>
  );
}
