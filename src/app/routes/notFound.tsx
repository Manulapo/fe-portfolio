import { Card } from "@/components/ui/card";

const NotFound = () => {
  return (
    <div className="container mx-auto flex flex-col gap-4">
      <Card className="w-full h-full flex flex-col gap-4 p-4 shadow-none rounded-sm">
        <div className="flex flex-col gap-4">
          <h2 className="text-lg font-semibold">404 - Page Not Found</h2>
          <p>
            The page you are trying to reach doesn’t exist, might have been moved, or you entered the wrong address.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-lg font-semibold">What to Do Next</h2>
          <ul className="list-disc pl-5">
            <li>
              <a href="/" className="text-blue-500 hover:underline">Return to Home</a>
            </li>
            <li>
              <a href="/contact" className="text-blue-500 hover:underline">Contact Support</a>
            </li>
            <li>
              <a href="/sitemap" className="text-blue-500 hover:underline">View Site Map</a>
            </li>
          </ul>
        </div>
      </Card>
      <Card className="w-full h-full flex flex-col gap-4 p-4 shadow-none rounded-sm">
        <div className="flex flex-col gap-4">
          <h2 className="text-lg font-semibold">Helpful Links</h2>
          <ul className="list-disc pl-5">
            <li>
              <a href="/blog" className="text-blue-500 hover:underline">Blog</a>
            </li>
            <li>
              <a href="/about" className="text-blue-500 hover:underline">About Us</a>
            </li>
            <li>
              <a href="/services" className="text-blue-500 hover:underline">Our Services</a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-lg font-semibold">Popular Categories</h2>
          <ul className="list-disc pl-5">
            <li>
              <a href="/category/design" className="text-blue-500 hover:underline">Design</a>
            </li>
            <li>
              <a href="/category/development" className="text-blue-500 hover:underline">Development</a>
            </li>
            <li>
              <a href="/category/marketing" className="text-blue-500 hover:underline">Marketing</a>
            </li>
          </ul>
        </div>
      </Card>
    </div>
  );
};

export default NotFound;