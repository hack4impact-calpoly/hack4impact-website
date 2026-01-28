import React, { useState, useMemo } from 'react';
import { MemberCardItem } from '../utils/types';
import MemberCard from './MemberCard';

interface AlumniSectionProps {
  alumni: MemberCardItem[];
}

interface YearGroup {
  year: number | null;
  members: MemberCardItem[];
}

const AlumniSection = ({ alumni }: AlumniSectionProps) => {
  // Group alumni by year, sorted descending (most recent first)
  const groupedAlumni = useMemo((): YearGroup[] => {
    const groups: Record<string, MemberCardItem[]> = {};

    alumni.forEach((member) => {
      const yearKey = member.classOf?.toString() || 'unknown';
      if (!groups[yearKey]) {
        groups[yearKey] = [];
      }
      groups[yearKey].push(member);
    });

    return Object.entries(groups)
      .map(([year, members]) => ({
        year: year === 'unknown' ? null : parseInt(year, 10),
        members,
      }))
      .sort((a, b) => {
        if (a.year === null) return 1;
        if (b.year === null) return -1;
        return b.year - a.year;
      });
  }, [alumni]);

  // All closed by default
  const [expandedYears, setExpandedYears] = useState<Set<number | null>>(
    new Set(),
  );

  const toggleYear = (year: number | null) => {
    setExpandedYears((prev) => {
      const next = new Set(prev);
      if (next.has(year)) {
        next.delete(year);
      } else {
        next.add(year);
      }
      return next;
    });
  };

  if (groupedAlumni.length === 0) return null;

  return (
    <div className="space-y-1">
      {groupedAlumni.map(({ year, members }) => {
        const isExpanded = expandedYears.has(year);
        const yearLabel = year ? `Class of ${year}` : 'Alumni';

        return (
          <div key={year ?? 'unknown'}>
            <button
              type="button"
              onClick={() => toggleYear(year)}
              className="flex items-center gap-2 py-1.5 text-left hover:text-blue transition-colors duration-150"
              aria-expanded={isExpanded}
              aria-controls={`alumni-${year ?? 'unknown'}`}
            >
              <svg
                className={`w-3 h-3 text-gray-400 transition-transform duration-150 ${isExpanded ? 'rotate-90' : ''}`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-base text-gray-700">
                {yearLabel}
              </span>
              <span className="text-sm text-gray-400">
                (
                {members.length}
                )
              </span>
            </button>

            {isExpanded && (
              <div
                id={`alumni-${year ?? 'unknown'}`}
                className="py-4 pl-5"
              >
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
                  {members.map((member) => (
                    <MemberCard
                      key={member.name.toString()}
                      name={member.name}
                      title={member.title}
                      image={member.image}
                      linkedin={member.linkedin}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default AlumniSection;
