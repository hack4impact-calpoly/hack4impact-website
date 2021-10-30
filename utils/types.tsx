export interface FAQItem {
  question: String;
  answer: String;
}

export interface FAQItems {
  questions: FAQItem[];
}

export interface EventItem {
  name: String;
  time: String;
  description: String
}

export interface TimelineItem {
  event: EventItem;
  icon: String;
}

export interface TimelineItems {
  events: TimelineItem[];
}

export interface TimelineCollectionItem {
  eventName: String;
  timeRange: String;
  description: String;
  icon: String;
}

export interface HeaderItem {
  title: String;
  description: String;
  button: ButtonLinkItem;
  illustration?: String;
}

export interface ButtonLinkItem {
  text: String;
  link: String;
}
