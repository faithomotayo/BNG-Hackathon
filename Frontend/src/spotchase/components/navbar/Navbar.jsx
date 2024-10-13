import Image from "next/image";

// Simple Navbar component, changes color based on the page
export default function Navbar(props) {
  const color = props.page == "Home" ? "white" : "pink";
  const textGradient =
    "bg-gradient-to-r from-peach to-peach-dark bg-clip-text text-transparent";

  return (
    <nav className="bg-transparent">
      <div className="mx-auto max-w-5xl px-6">
        <div className="items-center justify-center gap-7 py-10  sm:mt-0 sm:flex md:py-10">
          <a href="/" className="cursor-pointer">
            {color == "white" ? (
              <img
                src={"/wbspotchase.png"}
                alt="SpotChase Logo"
                width={300}
                height={300}
                className="mx-auto mt-8 justify-center"
              />
            ) : (
              <img
                src={"/wbspotchase.png"}
                alt="SpotChase Logo"
                width={300}
                height={300}
                className="mx-auto justify-center pt-6 md:pt-1"
              />
            )}
          </a>

          <div className="ml-auto flex justify-center gap-2 sm:mt-8 sm:justify-end md:mt-7">
            <a
              href="/about"
              className="flex items-center justify-end px-2 py-4"
            >
              <span
                className={`text-sm font-medium ${color == "white" ? "text-white" : textGradient} md:text-xl`}
              >
                About
              </span>
            </a>

            <a
              href="mailto:jeffrey.igala2@mail.dcu.ie?cc=joseph.adedayo2@mail.dcu.ie&subject=SpotLove%20Enquiry"
              className="flex items-center justify-end px-2 py-4"
            >
              <span
                className={`text-sm font-medium ${color == "white" ? "text-white" : textGradient} md:text-xl`}
              >
                Contact
              </span>
            </a>

            <a
              data-cy="login-button"
              href="/login"
              className="flex items-center justify-end"
            >
              <div
                className={`cursor-pointer rounded-xl ${color == "white" ? "bg-white" : "bg-gradient-to-r from-peach to-peach-dark"} px-3 py-1 hover:scale-95 md:px-7`}
              >
                <span
                  className={`whitespace-nowrap ${color == "white" ? textGradient : "text-white"} text-sm font-bold  md:text-xl`}
                >
                  Log in
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}