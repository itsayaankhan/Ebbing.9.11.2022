import React from 'react';
import { FolderShared } from '@material-ui/icons';

const MyDecks = () => {
  return (
    <div className="MyDecks">
      <button className="MyDecks__sidebarBtn">
        <FolderShared className="MyDecks__sidebarBtnIcon" />
        <span className="MyDecks__sidebarBtnText">Shared With Me</span>
      </button>
    </div>
  );
};

export default MyDecks;
