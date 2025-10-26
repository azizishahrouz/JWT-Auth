import Link from "next/link";
export default function About() {
  return (
    <div>
      <h1 className="h-100vh grid place-content-center bg-blue-300">About Page</h1>
          <p>This is the about page of my Next.js app.</p>
          <Link href="/">Go to HomePage</Link>
    </div>
  );
}
