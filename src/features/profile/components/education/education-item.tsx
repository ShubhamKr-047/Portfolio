import {
  ChevronsDownUpIcon,
  ChevronsUpDownIcon,
  ExternalLinkIcon,
} from "lucide-react";
import React from "react";

import { Markdown } from "@/components/markdown";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Tag } from "@/components/ui/tag";
import { SimpleTooltip } from "@/components/ui/tooltip";
import { Prose } from "@/components/ui/typography";
import { UTM_PARAMS } from "@/config/site";
import { addQueryParams } from "@/utils/url";

import type { Education } from "../../types/education";
import { ExperienceIcon } from "../experience-icon";

export function EducationItem({
  className,
  education,
}: {
  className?: string;
  education: Education;
}) {
  const { start, end } = education.period;

  return (
    <Collapsible defaultOpen={education.isExpanded} asChild>
      <div className={className}>
        <div className="flex items-center">
          <div
            className="mx-4 flex size-6 shrink-0 items-center justify-center rounded-lg bg-muted select-none dark:inset-shadow-[1px_1px_1px,0px_0px_2px] dark:inset-shadow-white/15"
            aria-hidden="true"
          >
            <ExperienceIcon
              icon={education.icon}
              className="size-4 text-muted-foreground"
            />
          </div>

          <div className="flex-1 border-l border-dashed border-edge">
            <CollapsibleTrigger className="group/education flex w-full items-center gap-4 p-4 pr-2 text-left select-none">
              <div className="flex-1">
                <h3 className="mb-1 leading-snug font-medium text-balance">
                  {education.institution}
                </h3>

                <dl className="text-sm text-muted-foreground">
                  <dt className="sr-only">Degree</dt>
                  <dd className="mb-1">
                    {education.degree}
                    {education.fieldOfStudy && ` in ${education.fieldOfStudy}`}
                  </dd>
                  <dt className="sr-only">Period</dt>
                  <dd>
                    <span>{start}</span>
                    {end && (
                      <>
                        <span> - </span>
                        <span>{end}</span>
                      </>
                    )}
                  </dd>
                </dl>
              </div>

              {education.website && (
                <SimpleTooltip content="Visit Institution Website">
                  <a
                    className="relative flex size-6 shrink-0 items-center justify-center text-muted-foreground after:absolute after:-inset-2 hover:text-foreground"
                    href={addQueryParams(education.website, UTM_PARAMS)}
                    target="_blank"
                    rel="noopener"
                  >
                    <ExternalLinkIcon className="pointer-events-none size-4" />
                    <span className="sr-only">Visit Institution Website</span>
                  </a>
                </SimpleTooltip>
              )}

              <div
                className="shrink-0 text-muted-foreground [&_svg]:size-4"
                aria-hidden
              >
                <ChevronsDownUpIcon className="hidden group-data-[state=open]/education:block" />
                <ChevronsUpDownIcon className="hidden group-data-[state=closed]/education:block" />
              </div>
            </CollapsibleTrigger>
          </div>
        </div>

        <CollapsibleContent className="overflow-hidden duration-300 data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down">
          <div className="space-y-4 border-t border-dashed border-edge p-4">
            {education.description && (
              <Prose>
                <Markdown>{education.description}</Markdown>
              </Prose>
            )}

            {education.skills && education.skills.length > 0 && (
              <ul className="flex flex-wrap gap-1.5">
                {education.skills.map((skill, index) => (
                  <li key={index} className="flex">
                    <Tag>{skill}</Tag>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </CollapsibleContent>
      </div>
    </Collapsible>
  );
}
