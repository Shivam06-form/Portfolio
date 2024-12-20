import React, { Fragment } from "react";
import "./FirstPage.css";
import ProfileImage from "./Images/profile.png";
import Image from "next/image";
import Divider from "./Divider";
import Link from "next/link";

const FirstPage = ({ moveTo }) => {

  const SocialProfile = [{
    id: 1, name: "LinkedIn", url: "https://www.linkedin.com/in/shivam-bhagwat-718260224/"
    , img: "https://play-lh.googleusercontent.com/kMofEFLjobZy_bCuaiDogzBcUT-dz3BBbOrIEjJ-hqOabjK8ieuevGe6wlTD15QzOqw"
  },
  {
    id: 1, name: "Instagram", url: "https://www.instagram.com/"
    , img: "https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg"
  }
  ]


  return (
    <Fragment>
      <metadata> 
      <title>Detials</title>
        <meta name="viewport" content="width=device-width, initial-scale=0.7" />
      </metadata>
      <Divider style={{ marginTop: "1%" }} />
      <div className="first">
        <summary className="summary">
          <h1>{"Hii, I'm Shivam Bhagwat"}</h1>
          {`I have acquired skills in ReactJS,
        Node.js, React Native, HTML/CSS,Next.js`}
          <div className="social-conatinar">
            {
              SocialProfile.map((socail, i) => {
                return (
                  <div key={i}>
                    <Link href={socail.url} target="_blank">
                      <Image src={socail.img}
                        alt="LinkedIn"
                        width={30}
                        height={30}
                      />  </Link>
                  </div>
                )
              })
            }
          </div>


          <button
            onClick={() => {
              if (moveTo) {
                window.scroll({
                  top: moveTo.current.getBoundingClientRect().top,
                  left: 0,
                  behavior: "smooth",
                });
              }
            }}
          >
            More about me ⬇
          </button>

        </summary>
        <Image
          src={ProfileImage}
          alt="Picture of the author"
          className="image card"
          priority
        />{" "}
      </div>
    </Fragment >
  );
};

export default FirstPage;
