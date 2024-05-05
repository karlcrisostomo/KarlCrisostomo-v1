import "./globals.css";
import { AppContainer } from "@/components";
import { MouseProvider } from "@/context/MouseMoveContext";


export const metadata = {
  title: "Karl Crisostomo",
  description: "Karl Crisostomo's Portfolio Site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <MouseProvider>
        <body>
          <main>
            <AppContainer>
              <main>{children}</main>
            </AppContainer>
          </main>
        </body>
      </MouseProvider>
    </html>
  );
}
