import { Logo } from "../../../components/logo"

export const Navbar = () => {
  return (
    <nav>
        <div className="container sm:mx-auto my-6 text-center lg:text-start">
            <Logo />
        </div>
    </nav>
  )
}