import React from 'react';
import { Star } from '@material-ui/icons';
import { StarBorder } from '@material-ui/icons';

const StarredDecks = () => {
  return (
    <div className="StarredDecks">
      <button className="StarredDecks__sidebarBtn">
        <Star className="StarredDecks__sidebarBtnIcon" />
        <span className="StarredDecks__sidebarBtnText">Starred</span>
      </button>
    </div>
  );
};

export default StarredDecks;
