import { Octokit } from 'octokit';

const octokit = new Octokit({
  auth: import.meta!.env.GITHUB_TOKEN,
});

export const getContributorData = async (owner: string, repo: string) => {
  const { data } = await octokit.request(
    'GET /repos/{owner}/{repo}/contributors',
    {
      owner: owner,
      repo: repo,
    }
  );

  return data;
};
