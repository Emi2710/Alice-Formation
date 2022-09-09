import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';

import article from './documents/article';
import formation from './documents/formation';
import accueil from './documents/accueil';
import aPropos from './documents/aPropos';
import parcours from './documents/parcours';

import bodyPortableText from './objects/bodyPortableText';
import mainImage from './objects/mainImage';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    article,
    formation,
    accueil,
    aPropos,
    parcours,
    bodyPortableText,
    mainImage
  ]),
})
