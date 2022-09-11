import React, { useState } from 'react';
import { Folder } from '@material-ui/icons';
import { CollectionsBookmark } from '@material-ui/icons';

const NewSliderMenu = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="NewSliderMenu">
      <button className="NewSliderMenu__createDeck" id="NewSliderMenu__buttons">
        <CollectionsBookmark /> <span>Deck</span>
      </button>
      <button
        className="NewSliderMenu__createFolder"
        id="NewSliderMenu__buttons"
      >
        <Folder /> <span>Folder</span>
      </button>
    </div>
  );
};

export default NewSliderMenu;
