import Link from "next/link";
import BlogTitle from "./BlogTitle";

export default function Header() {
    return (
        <nav>
            <BlogTitle>Andrew Oxenburgh</BlogTitle>
            <div>
                <Link href="/">
                    <a>Blog</a>
                </Link>
                <Link href="/">
                    <a>About</a>
                </Link>
            </div>
            <style jsx>{`
        nav {
          background: #444;
          width: auto;
          padding: 0 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 1rem;
        }
        nav a {
          margin-right: 1rem;
          text-decoration: none;
        }
        nav a:hover {
          text-decoration: underline;
        }
      `}</style>
        </nav>
    );
}
