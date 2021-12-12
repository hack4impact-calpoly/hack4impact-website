import React from 'react';

export interface SimpleImage {
  url: String;
  alt?: String;
}

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
  type?: String;
}

export interface ImageItem {
  img: String;
  alt: String;
}

export interface CTAItem {
  children: React.ReactNode;
  button: ButtonLinkItem;
}

export interface ProjectCardItem {
  title: String;
  slug: String;
  blurb: String;
  year: String;
  backgroundImg: String;
}

export interface ProjectItem {
  nonprofit: {
    name: String;
    description: String;
  }
  description: String;
  links: {
    github: String;
    project?: String;
    nonprofit: String;
  }
  technologies: String[];
  photos: SimpleImage[];
}

export interface MemberCardItem {
  name: String;
  title: String;
  image: SimpleImage;
  linkedin?: String;
  classOf?: number;
}

export interface TestimonalProps {
  member: {
    headshot: SimpleImage;
    name: string;
    title: string;
    linkedin?: string;
  };
  quote: string;
}

export interface InfoCardItem {
  title: string;
  body: string;
  image: SimpleImage;
}
