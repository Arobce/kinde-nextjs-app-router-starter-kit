// import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
// import { redirect } from "next/navigation";
import Link from "next/link";

export default async function Dashboard() {
  // const { isAuthenticated, getUser } = getKindeServerSession();

  // if (!(await isAuthenticated())) {
  //   redirect("/api/auth/login?prompt=none");
  // }
  return (
    <div className="container">
      <div className="card start-hero">
        <p className="text-body-2 start-hero-intro">Woohoo!</p>
        <p className="text-display-2">
          Your authentication is all sorted.
          <br />
          Build the important stuff.
          <Link href="/api/auth/login?prompt=none">
            Check Session
          </Link>
        </p>
      </div>
      <section className="next-steps-section">
        <h2 className="text-heading-1">Next steps for you</h2>
      </section>
    </div>
  );
}
