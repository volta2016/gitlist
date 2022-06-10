import { LayoutWrapper } from "../../styles/theme/CommonComponents";
import Aside from "../Aside";
import RepositoryList from "../RepositoryList";
import Layout from "../layout/index";

const GithubProfile = () => {
  return (
    <Layout>
      <LayoutWrapper>
        <Aside />
        <RepositoryList />
      </LayoutWrapper>
    </Layout>
  );
};

export default GithubProfile;
