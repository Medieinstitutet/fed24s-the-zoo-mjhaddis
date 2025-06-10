import { NavLink } from "react-router";

export const Navigation = () => {
  return (
    <nav>
      <ul className="flex flex-row justify-end gap-8 px-10 py-4">
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"/animals"}>Animals</NavLink>
        </li>
      </ul>
    </nav>
  );
};
