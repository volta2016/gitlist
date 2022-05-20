export const fetchApiGithub = (username, type, sort) => {
  const BASE_URL = "https://api.github.com";
  const [userResponse, repositoriesResponse] = await Promise.all([
    fetch(`${BASE_URL}/users/${username}`),
    fetch(`${BASE_URL}/users/${username}/repos?type=${types}&sort=${sort}`)
  ]);

  const userExist = userResponse.ok;

  const getUser = await userResponse.json();
  const getUseRepositories = await repositoriesResponse.json()
  return {userExist, getUser, getUseRepositories}
} 

