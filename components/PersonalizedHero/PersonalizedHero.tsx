import React from 'react';

import { contentstackOptimizeListReader } from '@uniformdev/optimize-tracker-contentstack';
import { Personalize } from '@uniformdev/optimize-tracker-react';

import { Entry, PersonalizedHeroFields } from '../../lib/contentstack';
import Hero from '../Hero/Hero';

const PersonalizedHero: React.FC<Entry<PersonalizedHeroFields>> = ({ unfrm_opt_p13n_list } : PersonalizedHeroFields) => {
  if (unfrm_opt_p13n_list) {
    const variations = contentstackOptimizeListReader(unfrm_opt_p13n_list);
    return (
      <Personalize
        variations={variations}
        trackingEventName="heroPersonalized"
        component={Hero}
      />
    );
  }
  return null;
};

export default PersonalizedHero;
