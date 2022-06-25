import { useState, useEffect } from "react";
import Loading from '../../../git-app/gitList/src/components/Loading/index';

const useFetchGithub = (username) => {
  const [user, setUser] = useState<GithubApiUserResponse>();
  const [repoList, setRepoList] = useState<Repository[]>([]);
  const [Loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [type, setType] = useState<string>("all");
  const [lenguage, setLenguage] = useState<string>("all");
  const [sort, setSort] = useState<string>("pushed");



  

  useEffect(() => {
    const getAsyncUserAndRepositories = async () => {
      const { userExist, user, repositories } = await fetchGithubApi(
        username,
        type,
        sort
      );
      if (userExist) {
        setLoading(false);
        setUser(user);
         setRepoList(repositories);
      } else {
        setError(true);
        setLoading(false);
      }
    };
    getAsyncUserAndRepositories();
  }, [username, type, sort]);
};

export default useFetchGithub;
