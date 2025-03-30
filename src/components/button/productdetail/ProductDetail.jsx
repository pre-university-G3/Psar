// alreadly done need push into git hub branch 
// step 1 = teminal -> git bash 
// step 2 = go to our folder 
// step 3 = command "git add ."
// step 4 = command "git status "
// step 5 = command "git commit -m "message"   "
// step 6 = command "git  push "
// succesfully thanks



// step 1 copy copy flowbite and paste in file
// step 2 comand  " npm i " note * we 're all in Tech-Seven folder
// step 3 comand "npm run dev "
// step 4 ctl + click on local link 
// seccesfully




import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import Link from "next/link";

export function ProductDetail() {
  return (
    <Navbar fluid rounded>
      <NavbarBrand as={Link} href="https://flowbite-react.com">
        <img src="/favicon.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite React</span>
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
        <NavbarLink href="#" active>
          Home
        </NavbarLink>
        <NavbarLink as={Link} href="#">
          About
        </NavbarLink>
        <NavbarLink href="#">Services</NavbarLink>
        <NavbarLink href="#">Pricing</NavbarLink>
        <NavbarLink href="#">Contact</NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}
