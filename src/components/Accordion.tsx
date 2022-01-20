import { useState, ReactNode} from 'react';
/*import { AccordionData } from '../types';*/
import AccordionItem from './AccordionItem';
import '../styles/festudiantes.css';

type AccordionData = {
    title: string;
    content: ReactNode;
  };

function Accordion({ items }: { items: Array<AccordionData> }) {
  const [currentIdx, setCurrentIdx] = useState(-1);
  const btnOnClick = (idx: number) => {
    setCurrentIdx(idx);
  };

  return (
    <ul className="accordion">
      {items.map((item, idx) => (
        <AccordionItem
          key={idx}
          data={item}
          isOpen={idx === currentIdx}
          btnOnClick={() => btnOnClick(idx)}
        />
      ))}
    </ul>
  );
}

export default Accordion;