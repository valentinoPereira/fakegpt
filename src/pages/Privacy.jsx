import React from "react";
import { Link } from "react-router-dom";
import "./Privacy.css";

 export default function Privacy() {
  return (
    <div className="privacy-page">
      <div className="privacy-container">
        <h1 className="privacy-header">Privacy Policy</h1>
        <Link to="/" className="back-link">
          ← Back to Chat
        </Link>
        <div className="privacy-content">
          <p>
            <strong>Welcome to our "no privacy" paradise!</strong> We believe in total transparency—so transparent that you can see right through us. We collect absolutely everything you type, every thought you share, and every embarrassing question you ask. Your data is our data, and we're not shy about using it.
          </p>
          <p>
            <em>Here's what we steal:</em> Your deepest secrets, your search history, your embarrassing medical queries, your late-night existential crises, and the passwords you thought you were clever enough to hide. We even track your mouse movements and analyze your typing speed to determine if you're stressed, excited, or just really bad at typing.
          </p>
          <p>
            We sell your data to <strong>"trusted" partners</strong> who promise to use it responsibly (we're still waiting for their first promise to be kept). Your embarrassing questions about relationships, your weird search for "how to make a bomb" (just kidding, we only sell the first part), and your entire digital personality are packaged and sold to the highest bidder. <em>Enjoy your anonymity while it lasts!</em>
          </p>
        </div>
      </div>
    </div>
  );
}