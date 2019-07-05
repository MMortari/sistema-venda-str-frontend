import React, { Fragment } from 'react';

import './style.scss';

interface HeadInterface {
  title: string;
  breadcrumb: string[];
  children?: any // Recebe de dentro do component = <Head>children</Head>
}

const Head = ({ title, breadcrumb, children }: HeadInterface) => (
    <Fragment>
      <div className="head">
        <div>
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
        </div>
        <div>
          { children }
        </div>
      </div>

      <hr />
    </Fragment>
  );

export default Head;
