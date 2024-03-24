import React from 'react';
import './ProjectTypes.css';
import data from '../../../utils/image-gallery.json';
import { useState } from 'react';


const ProjectTypeFilter = () => {
  const [selectedTag, setSelectedTag] = useState(null);

  // Define the number of columns based on screen size
  let numColumns = 1;

  if (window.innerWidth >= 768) {
    numColumns = 2;
  }

//   if (window.innerWidth >= 1024) {
//     numColumns = 3;
//   }

// Filter the data based on selected tag
const filteredData = selectedTag ? data.filter(card => card.tag === selectedTag) : data;



  // Split the data into multiple arrays based on the number of columns
  const columnData = Array.from({ length: numColumns }, (_, columnIndex) =>
    filteredData.filter((_, index) => index % numColumns === columnIndex)
  );

  return (
    <div className='project-background'>
      <div className="two-columns">
        {/* Render columns */}
        {columnData.map((column, columnIndex) => (
          <div key={columnIndex}>
            {/* Render cards in each column */}
            {column.map((card, cardIndex) => (
              <div key={cardIndex} className="flexColStart  r-card">
                <img src={card.image} alt="Building Project" height={200} />
                <span className="secondaryText r-price">
                </span>
                <span className="primaryText">{card.name}</span>
                <span className="secondaryText">{card.detail}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectTypeFilter;
