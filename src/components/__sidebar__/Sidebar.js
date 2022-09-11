// For a reference point think of Google Drive's Sidebar. Clean, minimal, and effective.
// Use that design but for the requirements of this application.

import React, { useState } from 'react';
import { Folder } from '@material-ui/icons';
import { CollectionsBookmark } from '@material-ui/icons';

import NewDeckOrFolder from './NewDeckOrFolder';
import MyDecks from './MyDecks';
import StarredDecks from './StarredDecks';
import TrashBin from './TrashBin';

import '../../styles/__sidebar__/NewDeckOrFolder.css';
import '../../styles/__sidebar__/MyDecks.css';
import '../../styles/__sidebar__/StarredDecks.css';
import '../../styles/__sidebar__/TrashBin.css';

const Sidebar = () => {
  const [showResults, setShowResults] = React.useState(false);
  const onClick = () => setShowResults(true);

  return (
    <div className="sidebar">
      <NewDeckOrFolder />
      <MyDecks />
      <StarredDecks />
      <TrashBin />
    </div>
  );
};

export default Sidebar;
