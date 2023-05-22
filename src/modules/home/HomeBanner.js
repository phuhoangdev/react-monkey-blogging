import styled from "styled-components";
import { Button } from "../../components/button";

const HomeBannerStyles = styled.div`
     min-height: 520px;
     padding: 40px 0;
     background-image: linear-gradient(to right bottom, ${(props) => props.theme.primary}, ${(props) => props.theme.secondary});

     .banner {
          display: flex;
          justify-content: center;
          align-items: center;

          &-content {
               max-width: 600px;
               color: white;
          }
          &-heading {
               font-size: 36px;
               margin-bottom: 20px;
          }
          &-desc {
               line-height: 1.75;
               margin-bottom: 60px;
          }
     }
`;

const HomeBanner = () => {
     return (
          <HomeBannerStyles>
               <div className="container">
                    <div className="banner">
                         <div className="banner-content">
                              <h1 className="banner-heading">Monkey Blogging</h1>
                              <p className="banner-desc">
                                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ducimus eum tempore at corrupti, est labore
                                   velit laborum quae beatae accusamus fugit cum commodi repudiandae nesciunt necessitatibus et ratione
                                   exercitationem.
                              </p>
                              <Button to="/sign-up" kind="secondary">
                                   Get started
                              </Button>
                         </div>
                         <div className="banner-image">
                              <img src="./assets/images/img-banner.svg" alt="banner" />
                         </div>
                    </div>
               </div>
          </HomeBannerStyles>
     );
};

export default HomeBanner;
