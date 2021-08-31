/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

type FeatureItem = {
  title: string;
  image: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Wiki',
    image: '/img/wiki.png',
    description: (
      <>
        All the information you need to know about Resuminator will be found here. Right from how to use this software to how to build it.
      </>
    ),
  },
  {
    title: 'Documentation',
    image: '/img/gear.png',
    description: (
      <>
        Find simple documentation for contributing to Resuminator in open-source, or setup your own instance.
      </>
    ),
  },
  {
    title: 'Guides',
    image: '/img/guide.png',
    description: (
      <>
        Find resources to improve your resume with Resuminator and how to use different features of Resuminator.
      </>
    ),
  },
];

function Feature({title, image, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img className={styles.featureSvg} alt={title} src={image} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
