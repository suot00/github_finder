import React from 'react';
import ProTypes from 'prop-types';
import RepoItem from './RepoItem';
const Repos = ({ repos }) => {
  return repos.map((repo) => <RepoItem repo={repo} key={repo.id}></RepoItem>);
};
Repos.proTypes = {
  repos: ProTypes.array.isRequired,
};
export default Repos;
