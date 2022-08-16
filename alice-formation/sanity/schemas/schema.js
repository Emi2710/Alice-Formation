import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';

import article from './article';
import formation from './formation';
import accueil from './accueil';
import aPropos from './aPropos';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    article,
    formation,
    accueil,
    aPropos
  ]),
})
