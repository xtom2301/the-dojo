import './Dashboard.css';

import { useCollection } from '../../hooks/useCollection';
import ProjectList from '../../components/ProjectList';
import ProjectFilter from './ProjectFilter';
import { useState } from 'react';
import { useAuthContext } from '../../hooks/useAuthContext';

const Dashboard = () => {
  const { user } = useAuthContext();
  const { documents, error } = useCollection('projects');
  const [currFilter, setCurrFilter] = useState('all');

  const changeFilter = (newFilter) => {
    setCurrFilter(newFilter);
  };

  const projects = documents
    ? documents.filter((document) => {
        switch (currFilter) {
          case 'all':
            return true;
          case 'mine':
            let assignedToMe = false;
            document.assignedUsersList.forEach((u) => {
              if (u.id === user.uid) {
                assignedToMe = true;
              }
            });
            return assignedToMe;
          case 'development':
          case 'design':
          case 'sales':
          case 'marketing':
            return document.category === currFilter;
          default:
            return true;
        }
      })
    : null;

  return (
    <div>
      <h2 className='page-title'>Dashboard</h2>
      {error && <p className='error'>{error}</p>}
      {documents && (
        <ProjectFilter currFilter={currFilter} handeFilter={changeFilter} />
      )}
      {projects && <ProjectList projects={projects} />}
    </div>
  );
};

export default Dashboard;
