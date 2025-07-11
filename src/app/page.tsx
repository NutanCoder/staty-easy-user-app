import { ROUTES } from "@/lib/routes/routes";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "StayEasy PG - Your One-Stop PG Solution",
  description: "Find, rent and manage PG accommodations with ease. Pay rent online and access exclusive services.",
};

function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-20 pb-16">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-blue-700 mb-6">
            Your One-Stop PG Solution
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            Find your perfect PG accommodation, manage payments, and access exclusive services - all in one place.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <Link href={ROUTES.AUTH.LOGIN}>
              <button className="w-full sm:w-auto px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg">
                Get Started
              </button>
            </Link>
            <Link href={ROUTES.AUTH.REGISTER}>
              <button className="w-full sm:w-auto px-8 py-3 bg-white text-blue-600 border-2 border-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-semibold text-lg">
                Register Now
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Everything You Need in One Place
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Find PG */}
            <div className="bg-blue-50 rounded-xl p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4">
                <Image src="/globe.svg" alt="Search" width={64} height={64} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Find Your PG</h3>
              <p className="text-gray-600">
                Browse through verified PGs with detailed information, photos, and reviews.
              </p>
            </div>

            {/* Easy Payments */}
            <div className="bg-blue-50 rounded-xl p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4">
                <Image src="/file.svg" alt="Payments" width={64} height={64} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Easy Payments</h3>
              <p className="text-gray-600">
                Pay your rent and deposits securely online. Track all your payments in one place.
              </p>
            </div>

            {/* Services */}
            <div className="bg-blue-50 rounded-xl p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4">
                <Image src="/window.svg" alt="Services" width={64} height={64} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Exclusive Services</h3>
              <p className="text-gray-600">
                Access maintenance, housekeeping, and other essential services on demand.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Find Your Perfect PG?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Join thousands of happy residents who found their ideal PG accommodation with us.
          </p>
          <Link href={ROUTES.AUTH.REGISTER}>
            <button className="px-8 py-3 bg-white text-blue-700 rounded-lg hover:bg-blue-50 transition-colors font-semibold text-lg">
              Start Your Search Today
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
