import Link from "next/link";

export default function NavBar() {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <Link href='/' className="btn btn-ghost normal-case text-xl">📧 email</Link>
      </div>
      <div className="navbar-end">
        <Link href='/login' className="btn mr-2">Login</Link>
        <Link href='/logout' className="btn">Logout</Link>
      </div>
    </div>
  )
}
