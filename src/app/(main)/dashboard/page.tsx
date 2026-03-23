import { ChartAreaInteractive } from "@/app/(main)/dashboard/_components/sidebar/chart-area-interactive";
import data from "@/app/(main)/dashboard/_components/proposal-sections-table/data";
import { ProposalSectionsTable } from "@/app/(main)/dashboard/_components/proposal-sections-table/table";
import { SectionCards } from "@/app/(main)/dashboard/_components/sidebar/section-cards";

export default function Page() {
  return (
    <div className="flex flex-1 flex-col">
      <div className="@container/main flex flex-1 flex-col gap-2">
        <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
          <SectionCards />
          <div className="px-4 lg:px-6">
            <ChartAreaInteractive />
          </div>
          <ProposalSectionsTable data={data} />
        </div>
      </div>
    </div>
  );
}
