import Link from "next/link";
import { useRouter } from "next/router";

/* eslint-disable @next/next/no-img-element */
const Navbar = () => {
  const router = useRouter();

  return (
    <div className="w-full h-[10vh] border-b border-white/[.13] border-solid flex justify-between items-center fixed z-20 bg-primary">
      <img
        src="./images/Logo 2.png"
        alt="Logo"
        className="ml-4 cursor-pointer h-full"
        style={{ maxWidth: '100%', maxHeight: '100%' }}
        onClick={async () => {
          router.pathname !== "/index" && (await router.push("/index"));
          document.body.scrollIntoView({ behavior: "smooth", block: "start" });
        }}
      />
      <div className="flex items-center justify-center gap-8">
        <p
          onClick={async () => {
            router.pathname !== "/" && (await router.push("/"));
            document.body.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }}
          className="hidden text-white cursor-pointer select-none sm:block"
        >
          Home
        </p>
        <p
          onClick={async () => {
            router.pathname !== "/#aboutus" && (await router.push("/#aboutus"));
            let element = document.getElementById("aboutus");
            element?.scrollIntoView({ behavior: "smooth", block: "start" });
          }}
          className="hidden text-white cursor-pointer select-none sm:block"
        >
          About Us
        </p>
        <Link href="/events">
          <p
            // onClick={async () => {
            //   router.pathname !== "/index" && (await router.push("/index"));
            //   let element = document.getElementById("events");
            //   element?.scrollIntoView({ behavior: "smooth", block: "start" });
            // }}
            className="hidden text-white cursor-pointer select-none sm:block"
          >
            Events
          </p>
        </Link>
        {/* <p
          onClick={async () => {
            router.pathname !== "/index#themes" && (await router.push("/index#themes"));
            // let element = document.getElementById("themes");
            // element?.scrollIntoView({ behavior: "smooth", block: "start" });
          }}
          className="hidden text-white cursor-pointer select-none sm:block"
        >
          Themes
        </p> */}
        <p
          onClick={() => { window.open("https://nafltrust-my.sharepoint.com/personal/pi-thon_tisb_ac_in/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fpi%2Dthon%5Ftisb%5Fac%5Fin%2FDocuments%2FAttachments%2F%CF%80%2Dthon%2724%20Event%20Brochure%2Epdf&parent=%2Fpersonal%2Fpi%2Dthon%5Ftisb%5Fac%5Fin%2FDocuments%2FAttachments&ct=1710342444729&or=OWA%2DNT%2DMail&cid=ef6e9093%2D0659%2D5ecb%2D8877%2Dcbc17d91cae4&ga=1", "_blank") }}
          className="hidden text-white cursor-pointer select-none sm:block"  >
          Brochure
        </p>

        <p
          onClick={async () => {
            router.pathname !== "/#rules" && (await router.push("/#rules"));
            let element = document.getElementById("rules");
            element?.scrollIntoView({ behavior: "smooth", block: "start" });
          }}
          className="hidden text-white cursor-pointer select-none sm:block"
        >
          Rules
        </p>
        <p
          onClick={async () => {
            router.pathname !== "/#prizes" && (await router.push("/#prizes"));
            // let element = document.getElementById("prizes");
            // element?.scrollIntoView({ behavior: "smooth", block: "start" });
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


        <p
          onClick={async () => {
            router.pathname !== "/#aboutus" && (await router.push("/#aboutus"));
            let element = document.getElementById("aboutus");
            element?.scrollIntoView({ behavior: "smooth", block: "start" });
          }} className="hidden text-white cursor-pointer select-none sm:block"  >
          Contact Us
        </p>
        <div
          onClick={() => { window.open("https://docs.google.com/forms/d/e/1FAIpQLSdaHwFhU7MMPco_pSo0kKJ-9Z9NctOwblbP5yjoKhV69w4L4Q/viewform?usp=sharing", "_blank") }}
          className="hidden sm:block px-6 py-2 mr-8 rounded-full cursor-pointer sm:mr-12 bg-gradient-to-b from-gradientTop to-gradientBottom"
        >
          Registrations Open
        </div>
      </div>
    </div>
  );
};

export default Navbar;
