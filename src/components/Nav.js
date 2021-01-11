import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

function Nav({ libraryStatus, setLibraryStatus }) {
  const openLibraryHandler = () => {
    setLibraryStatus(!libraryStatus);
  };

  return (
    <nav>
      <h1>Waves</h1>
      <button
        className={libraryStatus ? "library-active" : ""}
        onClick={openLibraryHandler}
      >
        Library
        <FontAwesomeIcon icon={faMusic}></FontAwesomeIcon>
      </button>
    </nav>
  );
}

export default Nav;
