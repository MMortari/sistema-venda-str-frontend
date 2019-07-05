import React, { Fragment } from 'react';

import './style.scss';

interface HeadInterface {
  title: string;
  breadcrumb: string[];
}

const Head = ({ title, breadcrumb }: HeadInterface) => (
    <Fragment>
      <h1>{title}</h1>

      <div className="breadcrumbList">
        <ul>
          {breadcrumb.map((data, index) => (
            <Fragment key={index}>
              <li>{data}</li>
              {index + 1 < breadcrumb.length && (<span><i className="fa fa-chevron-right"></i></span>)}
            </Fragment>
          ))}
        </ul>
      </div>
      <hr />
    </Fragment>
  );

export default Head;
