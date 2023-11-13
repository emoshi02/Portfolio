import React from 'react';
import ProjectItem from './ProjectItem';
import { data } from '../../projectData';
import { Link } from 'react-router-dom';

const ItemList = () => {
  return (
    <div className="item-list-wrapper">
      {data.map((dataItem, index) => (
        <Link to={'/Project/' + index} key={index}>
          <ProjectItem
            label={dataItem.label}
            image={dataItem.image}
            desc={dataItem.desc}
            info={dataItem.info}
            secDesc={dataItem.secDesc}
            galery={dataItem.galery}
            theme={dataItem.theme}
            key={index}
          />
        </Link>
      ))}
    </div>
  );
};

export default ItemList;
