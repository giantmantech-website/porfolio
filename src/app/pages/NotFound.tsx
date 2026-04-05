import { Link } from "react-router";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { Button } from "../components/ui/button";
import { Home as HomeIcon } from "lucide-react";

export function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-luxury-navy">
      <Navigation />

      <div className="flex-1 flex items-center justify-center bg-gradient-to-b from-luxury-navy-deep to-luxury-navy">
        <div className="text-center px-4 py-16">
          <div className="text-9xl font-bold text-luxury-gold mb-4">404</div>
          <h1 className="text-4xl font-bold mb-4 text-luxury-text">Page Not Found</h1>
          <p className="text-xl text-luxury-text/80 mb-8 max-w-md mx-auto">
            Sorry, the page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <Link to="/">
            <Button size="lg" className="bg-luxury-gold text-luxury-navy hover:bg-[#e5c158] font-semibold">
              <HomeIcon className="mr-2 w-5 h-5" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}
