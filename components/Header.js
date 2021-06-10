import Link from "next/link";
import {AppBar, Button, IconButton, Toolbar, Typography} from "@material-ui/core";

export default function Header() {
    return (

        <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu">
                    {/*<MenuIcon />*/}
                </IconButton>
                <Typography variant="h6">
                    News
                </Typography>
                <Link href="/">
                    <Button color="inherit">Home</Button>
                </Link>
                <Link href="/about">
                    <Button color="inherit">About</Button>
                </Link>

            </Toolbar>
        </AppBar>

        //   <nav>
        //
        //       <BlogTitle>Andrew Oxenburgh</BlogTitle>
        //       <div>
        //           <Link href="/">
        //               <a>Blog</a>
        //           </Link>
        //           <Link href="/">
        //               <a>About</a>
        //           </Link>
        //       </div>
        //       <style jsx>{`
        //   nav {
        //     background: #444;
        //     width: auto;
        //     padding: 0 2rem;
        //     display: flex;
        //     justify-content: space-between;
        //     align-items: center;
        //     font-size: 1rem;
        //   }
        //   nav a {
        //     margin-right: 1rem;
        //     text-decoration: none;
        //   }
        //   nav a:hover {
        //     text-decoration: underline;
        //   }
        // `}</style>
        //   </nav>
    );
}
