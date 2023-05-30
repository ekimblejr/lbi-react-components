import React, { useEffect, useRef, useState } from 'react';
import { CgChevronDown, CgChevronUp } from 'react-icons/cg';
import './styles.css';

export interface IAccordionProps {
  open?: boolean;
  width?: 'full' | 'size';
  headerBGColor?: string;
  panelBGColor?: string;
  headerText: string;
  panelText: string;
  headerTextColor: string;
  panelTextColor: string;
  headerBorderColor: string;
  panelBorderColor: string;
  panelEffectClassName?: string;
}

const Accordion = ({
  open,
  width = 'full',
  headerBGColor = '#fff',
  panelBGColor = '#fff',
  headerTextColor = '#000',
  panelTextColor = '#000',
  headerText,
  panelText,
  panelEffectClassName = 'collapsible-panel',
}: IAccordionProps) => {
  const [isOpen, setIsOpen] = useState(open);
  const [height, setHeight] = useState<number | undefined>(
    open ? undefined : 0,
  );
  const ref = useRef<HTMLDivElement>(null);
  const handlePanelOpening = () => {
    setIsOpen((prev) => !prev);
  };
  useEffect(() => {
    if (!height || !isOpen || !ref.current) return undefined;
    const resizeObserver = new ResizeObserver((el) => {
      setHeight(el[0].contentRect.height);
    });
    resizeObserver.observe(ref.current);
    return () => {
      resizeObserver.disconnect();
    };
  }, [height, isOpen]);
  useEffect(() => {
    if (isOpen) setHeight(ref.current?.getBoundingClientRect().height);
    else setHeight(0);
  }, [isOpen]);
  return (
    <>
      <div className="accordion-wrapper">
        <div
          className="header-wrapper"
          onClick={handlePanelOpening}
          style={{ backgroundColor: headerBGColor, color: headerTextColor }}
        >
          {!isOpen ? <CgChevronDown /> : <CgChevronUp />}
        </div>
        <div
          className={panelEffectClassName}
          style={{
            height,
            backgroundColor: panelBGColor,
            color: panelTextColor,
          }}
        >
          <div ref={ref}>
            <div className="collapsible-content-padding">
              Egestas pretium aenean pharetra magna ac placerat vestibulum
              lectus mauris. Sed augue lacus viverra vitae congue eu consequat.
              Nec ultrices dui sapien eget mi proin sed libero. Vel facilisis
              volutpat est velit egestas dui. Eros in cursus turpis massa
              tincidunt. Amet facilisis magna etiam tempor. Eu ultrices vitae
              auctor eu. At elementum eu facilisis sed odio morbi quis commodo.
              Pellentesque adipiscing commodo elit at. At in tellus integer
              feugiat.
            </div>
          </div>
        </div>
      </div>
      <div className="accordion-wrapper">
        <div
          className="header-wrapper"
          onClick={handlePanelOpening}
          style={{ backgroundColor: headerBGColor, color: headerTextColor }}
        >
          {!isOpen ? <CgChevronDown /> : <CgChevronUp />}
        </div>
        <div
          className={panelEffectClassName}
          style={{
            height,
            backgroundColor: panelBGColor,
            color: panelTextColor,
          }}
        >
          <div ref={ref}>
            <div className="collapsible-content-padding">
              Eu ultrices vitae auctor eu. At elementum eu facilisis sed odio
              morbi quis commodo. Pellentesque adipiscing commodo elit at. At in
              tellus integer feugiat.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Accordion;
