import React, { useState, useMemo } from 'react';
import { MemberCardItem } from '../utils/types';

interface AlumniSectionProps {
  alumni: MemberCardItem[];
}

interface RoleGroup {
  label: string;
  members: MemberCardItem[];
}

interface YearGroup {
  year: number | null;
  roleGroups: RoleGroup[];
  total: number;
}

const ROLE_GROUP_DEFS = [
  { label: 'Executive', match: (r: string) => r.includes('Co-Founder') || r.includes('Co-Executive Director') },
  { label: 'Engineering', match: (r: string) => r.includes('Director of Engineering') || r.includes('Associate Director of Engineering') || r.includes('Technical Advisor') },
  { label: 'Product and Outreach', match: (r: string) => r.includes('Director of Product & Outreach') || r.includes('Associate Director of Product & Outreach') || r.includes('Director of Public Relations') },
  { label: 'Design', match: (r: string) => r.includes('Director of Design') || r.includes('Associate Director of Design') },
  { label: 'Membership', match: (r: string) => r.includes('Director of Membership') || r.includes('Director of Community') },
  { label: 'Finance and Operations', match: (r: string) => r.includes('Director of Finance') || r.includes('Director of Operations') },
  { label: 'Tech Leads', match: (r: string) => r.includes('Tech Lead') },
  { label: 'Product Managers', match: (r: string) => r.includes('Product Manager') },
  { label: 'Developers', match: (r: string) => r.includes('Developer') },
  { label: 'Designers', match: (r: string) => r.includes('Designer') },
];

function groupByRole(members: MemberCardItem[]): RoleGroup[] {
  const groups: RoleGroup[] = ROLE_GROUP_DEFS.map((g) => ({ label: g.label, members: [] }));
  const other: MemberCardItem[] = [];

  members.forEach((m) => {
    const role = m.title.toString();
    const idx = ROLE_GROUP_DEFS.findIndex((g) => g.match(role));
    if (idx !== -1) {
      groups[idx].members.push(m);
    } else {
      other.push(m);
    }
  });

  if (other.length > 0) {
    groups.push({ label: 'Other', members: other });
  }

  return groups.filter((g) => g.members.length > 0);
}

const AlumniSection = ({ alumni }: AlumniSectionProps) => {
  const groupedAlumni = useMemo((): YearGroup[] => {
    const yearMap: Record<string, MemberCardItem[]> = {};

    alumni.forEach((member) => {
      const yearKey = member.classOf?.toString() || 'unknown';
      if (!yearMap[yearKey]) {
        yearMap[yearKey] = [];
      }
      yearMap[yearKey].push(member);
    });

    return Object.entries(yearMap)
      .map(([year, members]) => ({
        year: year === 'unknown' ? null : parseInt(year, 10),
        roleGroups: groupByRole(members),
        total: members.length,
      }))
      .sort((a, b) => {
        if (a.year === null) return 1;
        if (b.year === null) return -1;
        return b.year - a.year;
      });
  }, [alumni]);

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
      {groupedAlumni.map(({ year, roleGroups, total }) => {
        const isExpanded = expandedYears.has(year);
        const yearLabel = year ? `Class of ${year}` : 'Alumni';

        return (
          <div key={year ?? 'unknown'}>
            <button
              type="button"
              onClick={() => toggleYear(year)}
              className="flex items-center gap-2 py-1.5 text-left hover:text-theme-heading transition-colors duration-150"
              aria-expanded={isExpanded}
              aria-controls={`alumni-${year ?? 'unknown'}`}
            >
              <svg
                className={`w-3 h-3 text-theme-faint transition-transform duration-150 ${isExpanded ? 'rotate-90' : ''}`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-base text-theme-body">
                {yearLabel}
              </span>
              <span className="text-sm text-theme-faint">
                ({total})
              </span>
            </button>

            {isExpanded && (
              <div
                id={`alumni-${year ?? 'unknown'}`}
                className="py-4 pl-5 space-y-6"
              >
                {roleGroups.map((group) => (
                  <div key={group.label} className="space-y-2">
                    <h4 className="text-sm font-semibold text-theme-faint uppercase tracking-wide">{group.label}</h4>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-1">
                      {group.members.map((member) => (
                        <p key={member.name.toString()} className="text-base">
                          {member.linkedin ? (
                            <a href={member.linkedin.toString().startsWith('http') ? member.linkedin.toString() : `https://${member.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-theme-accent hover:underline">
                              {member.name}
                            </a>
                          ) : member.name}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default AlumniSection;
