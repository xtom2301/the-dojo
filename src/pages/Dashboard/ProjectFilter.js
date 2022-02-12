const filterList = [
  'all',
  'mine',
  'development',
  'design',
  'marketing',
  'sales',
];

const ProjectFilter = ({ currFilter, handeFilter }) => {
  return (
    <div className='project-filter'>
      <nav>
        <p>Filter by:</p>
        {filterList.map((filter) => (
          <button
            className={currFilter === filter ? 'active' : ''}
            key={filter}
            onClick={() => handeFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default ProjectFilter;
