import React from 'react';
import { Delete } from '@material-ui/icons';

const TrashBin = () => {
  return (
    <div className="TrashBin">
      <button className="TrashBin__sidebarBtn">
        <Delete className="TrashBin__sidebarBtnIcon" />
        <span className="TrashBin__sidebarBtnText">Trash</span>
      </button>
    </div>
  );
};

export default TrashBin;
