import React from "react";
import PropTypes from "prop-types";

const Header = () => {
  const { title, definition } = Header.defaultProps;

  return (
    <header className=" text-center pt-3 bg-black text-white p-5 items-center">
      <div>
        <h1 className="">Tasks Lister</h1>
        <small className="font-thin tracking-widest">
          {" "}
          A simple task lister Applications
        </small>
      </div>
    </header>
  );
};
Header.defaultProps = {
  title: "Task Lister",
  definition: "This is a simple task-lister Application",
};
Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
