import React, { useState } from 'react';
import Head from 'next/head';

import contentful from '../utils/contentful';
import { MemberCardItem } from '../utils/types';

interface RoleGroup {
  label: string;
  members: MemberCardItem[];
}

interface YearGroup {
  year: number | null;
  roleGroups: RoleGroup[];
  total: number;
}

interface MembersProps {
  directors: MemberCardItem[];
  memberGroups: RoleGroup[];
  alumniByYear: YearGroup[];
}

const ROLE_GROUP_DEFS = [
  { label: 'Executive', match: (r: string) => r.includes('Co-Founder') || r.includes('Co-Executive Director') },
  { label: 'Engineering', match: (r: string) => r.includes('Director of Engineering') || r.includes('Associate Director of Engineering') || r.includes('Technical Advisor') },
  { label: 'Product & Outreach', match: (r: string) => r.includes('Director of Product & Outreach') || r.includes('Associate Director of Product & Outreach') || r.includes('Director of Public Relations') },
  { label: 'Design', match: (r: string) => r.includes('Director of Design') || r.includes('Associate Director of Design') },
  { label: 'Membership', match: (r: string) => r.includes('Director of Membership') || r.includes('Director of Community') },
  { label: 'Finance & Operations', match: (r: string) => r.includes('Director of Finance') || r.includes('Director of Operations') },
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

const Members = ({ directors, memberGroups, alumniByYear }: MembersProps) => {
  const [expandedYears, setExpandedYears] = useState<Set<number | null>>(new Set());

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

  return (
    <>
      <Head>
        <title>Members - Hack4Impact Cal Poly</title>
      </Head>
      <main>
        <div className="mx-auto max-w-4xl px-6 py-16 sm:py-20 md:py-24">
          <h1
            className="text-4xl text-white sm:text-5xl"
            style={{ letterSpacing: '-0.03em' }}
          >
            Our Members
          </h1>
          <p className="mt-3 max-w-xl text-base leading-relaxed text-white/50">
            The people behind Hack4Impact Cal Poly SLO.
          </p>

          {/* Directors */}
          <section className="mt-14">
            <h2 className="text-xl font-semibold text-white/90">Directors</h2>
            <div className="mt-4 grid grid-cols-1 gap-y-2 sm:grid-cols-2 md:grid-cols-3">
              {directors.map((m) => (
                <div key={m.name.toString()}>
                  <p className="text-base text-white/80">
                    {m.linkedin ? (
                      <a
                        href={m.linkedin.toString().startsWith('http') ? m.linkedin.toString() : `https://${m.linkedin}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-colors hover:text-[#f6c56f]"
                      >
                        {m.name}
                      </a>
                    ) : (
                      m.name
                    )}
                  </p>
                  <p className="text-sm text-white/30">{m.title}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Current Members */}
          <section className="mt-14">
            <h2 className="text-xl font-semibold text-white/90">Current Team</h2>
            <div className="mt-4 space-y-8">
              {memberGroups.map((group) => (
                <div key={group.label}>
                  <h3 className="text-sm font-medium uppercase tracking-widest text-white/40">
                    {group.label}
                  </h3>
                  <div className="mt-2 grid grid-cols-1 gap-y-2 sm:grid-cols-2 md:grid-cols-3">
                    {group.members.map((m) => (
                      <div key={m.name.toString()}>
                        <p className="text-base text-white/80">
                          {m.linkedin ? (
                            <a
                              href={m.linkedin.toString().startsWith('http') ? m.linkedin.toString() : `https://${m.linkedin}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="transition-colors hover:text-[#f6c56f]"
                            >
                              {m.name}
                            </a>
                          ) : (
                            m.name
                          )}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Alumni */}
          <section className="mt-14">
            <h2 className="text-xl font-semibold text-white/90">Alumni</h2>
            <div className="mt-4 space-y-1">
              {alumniByYear.map(({ year, roleGroups, total }) => {
                const isExpanded = expandedYears.has(year);
                const yearLabel = year ? `Class of ${year}` : 'Alumni';

                return (
                  <div key={year ?? 'unknown'}>
                    <button
                      type="button"
                      onClick={() => toggleYear(year)}
                      className="flex w-full items-center gap-2 rounded-md px-2 py-2 text-left transition-colors hover:bg-white/5"
                      aria-expanded={isExpanded}
                    >
                      <svg
                        className={`h-3 w-3 text-white/30 transition-transform duration-150 ${isExpanded ? 'rotate-90' : ''}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-base text-white/70">{yearLabel}</span>
                      <span className="text-sm text-white/25">({total})</span>
                    </button>

                    {isExpanded && (
                      <div className="space-y-6 py-3 pl-7">
                        {roleGroups.map((group) => (
                          <div key={group.label}>
                            <h4 className="text-xs font-medium uppercase tracking-widest text-white/30">
                              {group.label}
                            </h4>
                            <div className="mt-1 grid grid-cols-1 gap-y-1 sm:grid-cols-2 md:grid-cols-3">
                              {group.members.map((member) => {
                                const hideTitle = ['Tech Leads', 'Product Managers', 'Developers', 'Designers'].includes(group.label);
                                return (
                                  <div key={member.name.toString()}>
                                    <p className="text-base text-white/70">
                                      {member.linkedin ? (
                                        <a
                                          href={member.linkedin.toString().startsWith('http') ? member.linkedin.toString() : `https://${member.linkedin}`}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className="transition-colors hover:text-[#f6c56f]"
                                        >
                                          {member.name}
                                        </a>
                                      ) : (
                                        member.name
                                      )}
                                    </p>
                                    {!hideTitle && (
                                      <p className="text-xs text-white/25">{member.title}</p>
                                    )}
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export async function getStaticProps() {
  const query = `{
    directors: personCollection(
      where: {
        OR: [
          { role_contains: "Director" },
          { role_contains: "Tech Advisor" }
        ],
        isActive: true,
        isAlumni: false
      },
      order: fullName_ASC
    ) {
      items {
        fullName
        role
        linkedIn
        classOf
      }
    }
    members: personCollection(
      where: {
        role_not_contains: "Director",
        isActive: true,
        isAlumni: false
      },
      order: fullName_ASC
    ) {
      items {
        fullName
        role
        linkedIn
        classOf
      }
    }
    alumni: personCollection(
      where: { isAlumni: true },
      order: fullName_ASC
    ) {
      items {
        fullName
        role
        linkedIn
        classOf
      }
    }
  }`;

  const res = await contentful.query(query);

  function toMember(p: any): MemberCardItem {
    return {
      name: p.fullName,
      title: p.role,
      linkedin: p.linkedIn,
      image: { url: '' },
      classOf: p.classOf || null,
    };
  }

  const directorRoleOrder = [
    'Co-Executive Director',
    'Co-Founder',
    'Director of Engineering',
    'Associate Director of Engineering',
    'Director of Product & Outreach',
    'Associate Director of Product & Outreach',
    'Director of Design',
    'Associate Director of Design',
    'Associate Director of Design & Public Relations',
    'Director of Design & Public Relations',
    'Director of Public Relations',
    'Director of Finance',
    'Director of Operations',
    'Director of Operations & Finance',
    'Director of Membership',
    'Director of Community',
    'Technical Advisor',
  ];

  const directors: MemberCardItem[] = res.directors.items.map(toMember).sort(
    (a: MemberCardItem, b: MemberCardItem) => {
      const ai = directorRoleOrder.indexOf(a.title.toString());
      const bi = directorRoleOrder.indexOf(b.title.toString());
      return (ai === -1 ? 999 : ai) - (bi === -1 ? 999 : bi);
    },
  );

  const allMembers: MemberCardItem[] = res.members.items.map(toMember);

  const roleGroupDefs = [
    { label: 'Tech Leads', match: (r: string) => r.includes('Tech Lead') },
    { label: 'Product Managers', match: (r: string) => r.includes('Product Manager') },
    { label: 'Developers', match: (r: string) => r.includes('Developer') },
    { label: 'Designers', match: (r: string) => r.includes('Designer') },
  ];

  const memberGroupsArr: RoleGroup[] = roleGroupDefs.map((g) => ({
    label: g.label,
    members: [],
  }));
  const otherMembers: MemberCardItem[] = [];

  allMembers.forEach((m) => {
    const role = m.title.toString();
    const idx = roleGroupDefs.findIndex((g) => g.match(role));
    if (idx !== -1) {
      memberGroupsArr[idx].members.push(m);
    } else {
      otherMembers.push(m);
    }
  });

  if (otherMembers.length > 0) {
    memberGroupsArr.push({ label: 'Other', members: otherMembers });
  }

  const filteredMemberGroups = memberGroupsArr.filter((g) => g.members.length > 0);

  // Alumni grouped by class year
  const alumniAll: MemberCardItem[] = res.alumni.items.map(toMember);
  const yearMap: Record<string, MemberCardItem[]> = {};

  alumniAll.forEach((member) => {
    const yearKey = member.classOf?.toString() || 'unknown';
    if (!yearMap[yearKey]) {
      yearMap[yearKey] = [];
    }
    yearMap[yearKey].push(member);
  });

  const alumniByYear: YearGroup[] = Object.entries(yearMap)
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

  return {
    props: {
      directors,
      memberGroups: filteredMemberGroups,
      alumniByYear,
    },
  };
}

export default Members;
