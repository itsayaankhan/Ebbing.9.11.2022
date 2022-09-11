import React, { useState } from 'react';
import { Add } from '@material-ui/icons';
import { Folder } from '@material-ui/icons';
import { CollectionsBookmark } from '@material-ui/icons';

const NewDeckOrFolder = () => {
  return (
    <div className="NewDeckOrFolder">
      <button className="NewDeckOrFolder__createBtn">
        <Add className="NewDeckOrFolder__plusIcon" />
        <span className="NewDeckOrFolder__createBtnText">New</span>
      </button>
    </div>
  );
};

export default NewDeckOrFolder;
