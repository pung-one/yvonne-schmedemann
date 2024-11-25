import StyledComponentsRegistry from "@/lib/registry";
import { GlobalStyles } from "@/globalStyles/global_styles";
import { Layout } from "@/components/Layout";
import ReactDOM from "react-dom";
import { Placeholder } from "@/components/Landing/Placeholder";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.yvonneschmedemann.com/"),
  alternates: {
    canonical: "/",
  },
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

const showPlaceholder = process.env.SHOW_PLACEHOLDER;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <StyledComponentsRegistry>
        <GlobalStyles />

        {showPlaceholder === "true" ? (
          <Placeholder />
        ) : (
          <Layout>{children}</Layout>
        )}
      </StyledComponentsRegistry>
    </html>
  );
}
