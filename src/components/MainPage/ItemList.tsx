import React, { Fragment } from 'react';
import ProjectItem from './ProjectItem';
import { data } from '../../projectData';
import { Link } from 'react-router-dom';
import LinkButton from '../LinkButton';

const ItemList = () => {
  return (
    <div className="item-list-wrapper">
      {data.map((dataItem, index) => (
        <Fragment key={index}>
          <Link to={'/Project/' + index} key={index}>
            <ProjectItem
              label={dataItem.label}
              image={dataItem.image}
              desc={dataItem.desc}
              info={dataItem.info}
              secDesc={dataItem.secDesc}
              galery={dataItem.galery}
              key={index}
              arrowClass={
                index % 6 < 3 || index === data.length - 1
                  ? 'right-arrow'
                  : 'left-arrow'
              }
            />
          </Link>
          {index === data.length - 1 ? (
            <LinkButton label="GitHub" url="https://github.com/emoshi02" />
          ) : null}
        </Fragment>
      ))}
    </div>
  );
};

export default ItemList;
