import Link from "next/link";
import { useRouter } from "next/router";

/* eslint-disable @next/next/no-img-element */
const Navbar = () => {
  const router = useRouter();

  return (
    <div className="w-full h-[10vh] border-b border-white/[.13] border-solid flex justify-between items-center fixed z-20 bg-primary">
      <img
        src="./images/zephyr_logo.png"
        alt="Logo"
        width={100}
        height={100}

        className="ml-4 cursor-pointer w-30 h-30"
        onClick={async () => {
          router.pathname !== "/index" && (await router.push("/index"));
          document.body.scrollIntoView({ behavior: "smooth", block: "start" });
        }}
      />
      <div className="flex items-center justify-center gap-8">
        <p
          onClick={async () => {
            router.pathname !== "/index" && (await router.push("/index"));
            document.body.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }}
          className="hidden text-white cursor-pointer select-none sm:block"
        >
          Home
        </p>
        <Link href="/events">
          <p
            onClick={async () => {
              // router.pathname !== "/index" && (await router.push("/index"));
              // let element = document.getElementById("events");
              // element?.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
            className="hidden text-white cursor-pointer select-none sm:block"
          >
            Events
          </p>
        </Link>
        <p
          onClick={async () => {
            router.pathname !== "/index" && (await router.push("/index"));
            let element = document.getElementById("themes");
            element?.scrollIntoView({ behavior: "smooth", block: "start" });
          }}
          className="hidden text-white cursor-pointer select-none sm:block"
        >
          Themes
        </p>
        <p
          onClick={async () => {
            router.pathname !== "/index" && (await router.push("/index"));
            let element = document.getElementById("prizes");
            element?.scrollIntoView({ behavior: "smooth", block: "start" });
          }}
          className="hidden text-white cursor-pointer select-none sm:block"
        >
          Prizes
        </p>
        {/* <p
          onClick={async () => {
            router.pathname !== "/index" && (await router.push("/index"));
            let element = document.getElementById("faqs");
            element?.scrollIntoView({ behavior: "smooth", block: "start" });
          }}
          className="hidden text-white cursor-pointer select-none sm:block"
        >
          FAQs
        </p> */}
        {/* <p
          onClick={async () => {
            router.pathname !== "/index" && (await router.push("/index"));
            let element = document.getElementById("sponsors");
            element?.scrollIntoView({ behavior: "smooth", block: "start" });
          }}
          className="hidden text-white cursor-pointer select-none sm:block"
        >
          Sponsors
        </p> */}
        <p
          onClick={async () => {
            router.pathname !== "/index" && (await router.push("/index"));
            let element = document.getElementById("aboutus");
            element?.scrollIntoView({ behavior: "smooth", block: "start" });
          }}
          className="hidden text-white cursor-pointer select-none sm:block"
        >
          About Us
        </p>
        <div
          onClick={() => { }}
          className="hidden sm:block px-6 py-2 mr-8 rounded-full cursor-pointer sm:mr-12 bg-gradient-to-b from-gradientTop to-gradientBottom"
        >
          Registrations Open!
        </div>
      </div>
    </div>
  );
};

export default Navbar;
