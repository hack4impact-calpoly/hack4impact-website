import React, { useState } from 'react';
import {
  PhoneIcon,
  ChatAlt2Icon,
  ClipboardListIcon,
  MailIcon,
  PencilAltIcon,
  PaperClipIcon,
} from '@heroicons/react/outline';
import { EventItem, TimelineItem, TimelineItems } from '../utils/types';
import styles from '../styles/Timeline.module.css';

interface TimelineEventItem {
  event: EventItem;
  icon: String;
  lastLine: boolean;
}

// new icons must be added to this switch-case before being used in Contentful
function iconJSX(icon: String) {
  const iconClass = `${styles.icon} w-14 h-14 text-white absolute -left-6 z-10 top-2.5`;
  switch (icon) {
    case 'phone':
      return <PhoneIcon className={iconClass} />;
    case 'chat':
      return <ChatAlt2Icon className={iconClass} />;
    case 'clipboard':
      return <ClipboardListIcon className={iconClass} />;
    case 'mail':
      return <MailIcon className={`${iconClass} ${styles.mail}`} />;
    case 'pencil':
      return <PencilAltIcon className={iconClass} />;
    default:
      return <PaperClipIcon className={iconClass} />;
  }
}

const Event = (props: TimelineEventItem) => {
  const { event, icon, lastLine } = props;
  const [showDescription, toggleDescription] = useState(false);

  return (
    <div className="flex flex-row ml-12">
      <div
        className={`${styles.event} relative min-w-1.5 py-4 pt-1 bg-blue ${lastLine ? 'h-0' : ''} cursor-pointer sm:cursor-auto`}
        onClick={() => toggleDescription(!showDescription)}
        onKeyPress={() => toggleDescription(!showDescription)}
        role="button"
        tabIndex={0}
      >
        {iconJSX(icon)}
      </div>
      <div className="mr-4 ml-16 pb-8">
        <h3 className="mt-1">{event.name}</h3>
        <h5>{event.time}</h5>
        <p className="hidden sm:block pt-2">{event.description}</p>
        {showDescription && <p className="pt-2 pb-4 sm:hidden">{event.description}</p>}
      </div>
    </div>
  );
};

const Timeline = (props: TimelineItems) => {
  const { events } = props;

  return (
    <div className="space-y-0 w-full float-left">
      <p className="text-gray-700 italic mb-4 sm:hidden">*click an icon for more information</p>
      {/* eslint-disable-next-line react/no-array-index-key, max-len */}
      {events.map((e: TimelineItem, i) => <Event key={i} event={e.event} icon={e.icon} lastLine={i === events.length - 1} />)}
    </div>
  );
};

export default Timeline;
