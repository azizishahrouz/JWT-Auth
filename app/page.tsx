// import Image from "next/image";
// import Link from "next/link";

// export default function Home() {
//   return (
//     <div className="font-sans min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex flex-col items-center justify-center p-8 sm:p-20 gap-12">
      
//       {/* Header / Logo */}
//       <header className="flex flex-col items-center gap-4">
//         <Image
//           src="/logo.png" // replace with your logo
//           alt="Logo"
//           width={120}
//           height={120}
//           className="rounded-full shadow-lg"
//         />
//         <h1 className="text-4xl font-bold text-gray-800 text-center sm:text-left">
//           Welcome to MyApp
//         </h1>
//         <p className="text-gray-600 text-center sm:text-left max-w-md">
//           Explore the dashboard, check users, or learn more about this project.
//         </p>
//       </header>

//       {/* Action Buttons */}
//       <main className="flex flex-wrap justify-center sm:justify-start gap-6">
//         <Link
//           href="/about"
//           className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow-md hover:bg-blue-700 transition transform hover:scale-105"
//         >
//           About Page
//         </Link>
//         <Link
//           href="/dashboard"
//           className="bg-purple-600 text-white px-6 py-3 rounded-xl shadow-md hover:bg-purple-700 transition transform hover:scale-105"
//         >
//           Dashboard
//         </Link>
//         <Link
//           href="/users"
//           className="bg-green-600 text-white px-6 py-3 rounded-xl shadow-md hover:bg-green-700 transition transform hover:scale-105"
//         >
//           Users
//         </Link>
//       </main>

//       {/* Footer */}
//       <footer className="text-gray-400 text-sm mt-12">
//         © {new Date().getFullYear()} MyApp. All rights reserved.
//       </footer>
//     </div>
//   );
// }
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 flex flex-col items-center justify-center p-8 gap-8">
      <h1 className="text-5xl font-extrabold text-gray-800 text-center sm:text-left">
        Welcome to MyApp
      </h1>
      <p className="text-gray-600 text-lg text-center sm:text-left max-w-md">
        Explore users, learn about authentication, and practice Next.js with Tailwind CSS.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 mt-6">
        <Link
          href="/users"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition transform hover:scale-105 shadow-md"
        >
          Go to Users
        </Link>
        <Link
          href="/about"
          className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg font-semibold hover:bg-gray-300 transition transform hover:scale-105 shadow-md"
        >
          About
        </Link>
      </div>
      
      <div className="mt-12 text-gray-500 text-sm text-center">
        © 2025 MyApp. All rights reserved.
      </div>
    </div>
  );
}
