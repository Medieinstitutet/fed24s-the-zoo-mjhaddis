import { NavLink } from "react-router";

export const Navigation = () => {
  return (
    <nav>
      <ul className="flex flex-row justify-end gap-8 px-10 py-4 font-bold">
        <li>
          <NavLink to={"/"}>Hem</NavLink>
        </li>
        <li>
          <NavLink to={"/animals"}>Djur</NavLink>
        </li>
      </ul>
    </nav>
  );
};
