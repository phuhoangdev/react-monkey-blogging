import { signOut } from "firebase/auth";
import { auth } from "../firebase-app/firebase-config";
import styled from "styled-components";
import HomeBanner from "../modules/home/HomeBanner";
import HomeFeature from "../modules/home/HomeFeature";
import HomeNewest from "../modules/home/HomeNewest";
import Layout from "../components/layout/Layout";

const HomePageStyles = styled.div``;

const HomePage = () => {
     return (
          <HomePageStyles>
               <Layout>
                    <HomeBanner></HomeBanner>
                    <HomeFeature></HomeFeature>
                    <HomeNewest></HomeNewest>
               </Layout>
          </HomePageStyles>
     );
};

export default HomePage;
