import "../../assets/style/components/user/Profile.css";
import { ReactComponent as PdfButton } from "../../assets/images/pdf-button.svg";
import { ReactComponent as InfosDots } from "../../assets/images/info-dot.svg";
import { ReactComponent as MapLocalization } from "../../assets/images/map-localisation.svg";
import { ReactComponent as WebsiteIcon } from "../../assets/images/external-website.svg";
import { ReactComponent as FacebookIcon } from "../../assets/images/facebook.svg";
import { ReactComponent as CrunchBaseIcon } from "../../assets/images/crunchbase.svg";
import { ReactComponent as TwitterIcon } from "../../assets/images/twitter.svg";
import { ReactComponent as LinkedinIcon } from "../../assets/images/linkedin.svg";
import { ReactComponent as InfoIcon } from "../../assets/images/info.svg";
import { useMemo } from "react";
import MyProgressBar from "../misc/MyProgressBar";

const Profile = ({ company }) => {
  const handleSocials = (social) => {
    switch (social.name) {
      case "facebook":
        return (
          <a key={social.name} className={"social"} href={social.link}>
            <FacebookIcon />
          </a>
        );
      case "twitter":
        return (
          <a key={social.name} className={"social"} href={social.link}>
            <TwitterIcon />
          </a>
        );
      case "linkedin":
        return (
          <a key={social.name} className={"social"} href={social.link}>
            <LinkedinIcon />
          </a>
        );
      case "crunch-base":
        return (
          <a key={social.name} className={"social"} href={social.link}>
            <CrunchBaseIcon />
          </a>
        );
      default:
        return null;
    }
  };

  const cleanCompanyWebsite = useMemo(() => {
    return company.website
      .replace("https://", "")
      .replace("http://", "")
      .replace("/", "");
  }, [company.website]);

  return (
    <div className={"profile"}>
      <img
        src={company.background}
        className={"background"}
        alt={"companies background"}
      />
      <div className={"main"}>
        <div className={"leftPanel"}>
          <img
            src={company.avatar}
            className={"avatar"}
            alt={"companies avatar"}
          />
          <div className={"pdf"}>
            <button className={"button-outlined"}>
              <PdfButton text={"OpenSans"} />
            </button>
          </div>
        </div>
        <div className={"rightPanel"}>
          <div className={"infos"}>
            <div className={"mainInfos"}>
              <div className={"name"}>
                <h1>{company.name}</h1>
              </div>
              <div className={"dots"}>
                <InfosDots />
              </div>
            </div>
            <div className={"contactInfos"}>
              <div className={"info"}>
                <MapLocalization />
                <p>
                  {company.location.city}, {company.location.country}
                </p>
              </div>
              <div className={"info"}>
                <WebsiteIcon />
                <a className={"website"} href={company.website}>
                  {cleanCompanyWebsite}
                </a>
              </div>
              <div className={"info"}>
                {company.socials.map((social, index) => handleSocials(social))}
              </div>
            </div>
            <div className={"description"}>{company.description}</div>
            <div className={"bottomInfos"}>
              <div className={"categories"}>
                <div className={"category"}>
                  <span>{company.category}</span>
                </div>
                <div className={"subcategories"}>
                  {company.subcategories.map((subcategory, index) => (
                    <span key={index}>{subcategory}</span>
                  ))}
                </div>
              </div>
              <div className={"followButtons"}>
                <button className={"button-outlined"}>SUIVRE</button>
                <button className={"button-filled"}>PROFIL PUBLIC</button>
                <InfoIcon />
              </div>
            </div>
          </div>
          <div className={"divider"}></div>
          <div className={"footer"}>
            <div className={"collaborators"}>
              <a href={"/"}>Collaboration en discussion - POC </a>
              <div className={"shape"}></div>
            </div>
            <div className={"progressBar"} style={{ height: 50 }}>
              <MyProgressBar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
