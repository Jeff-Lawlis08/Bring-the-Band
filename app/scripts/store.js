import React from 'react';

import Session from './models/session';
import Bands from './collections/bands';
import VotedBands from './collections/votedBands';
import VotedBand from './models/votedBand';

export default {
  session: new Session(),
  bands: new Bands(),
  votedBands: new VotedBands(),
  votedBand: new VotedBand()
};
