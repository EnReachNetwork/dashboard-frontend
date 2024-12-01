import { useMemo, useState } from "react";
import { FiEdit } from "react-icons/fi";
import { IconBtn } from "./btns";
import { TitCard } from "./cards";
import { AddNodeDialog } from "./dialogimpls";
import { STable } from "./tables";
import { HelpTip } from "./tips";

import backendApi from "@/lib/api";
import { fmtDuration } from "@/lib/utils";
import { cn, Pagination, Spinner } from "@nextui-org/react";
import { useQuery } from "@tanstack/react-query";
import _ from "lodash";
import { IoIosCheckmarkCircle, IoIosCloseCircle } from "react-icons/io";
import { RiRefreshLine } from "react-icons/ri";
import { useToggle } from "react-use";
import { fmtBerry, fmtNetqulity } from "./fmtData";
function NodeName({ name }: { name: string }) {
  const [edit, toggleEdit] = useToggle(false);
  return (
    <div className="flex gap-[10px] items-center">
      {/* {edit ? <Input /> : name} */}
      {name}
      <div className="flex justify-center items-center rounded-full bg-white/80 hover:bg-white text-black text-[8px] w-3 h-3 cursor-pointer hidden" onClick={() => toggleEdit()}>
        <FiEdit />
      </div>
    </div>
  );
}

function CountryIP({ ip, country }: { ip: string; country: string }) {
  return (
    <div className="flex gap-2 items-center">
      <span className={cn(`text-base fi fi-${country.toLowerCase()}`)}></span>
      <span>{ip}</span>
    </div>
  );
}
function Status({ isConnected }: { isConnected?: boolean }) {
  return (
    <div className={cn(" flex items-center gap-1", isConnected ? "text-green-400" : "text-white/60")}>
      {isConnected ? <IoIosCheckmarkCircle className="text-[15px]" /> : <IoIosCloseCircle className="text-[15px]" />}
      {isConnected ? "Connected" : "Offline"}
    </div>
  );
}
export default function MyNodes() {
  const { data, isFetching, refetch, isLoading } = useQuery({
    queryKey: ["NodeList"],
    queryFn: () => backendApi.nodeList(),
  });
  const datas = useMemo(() => {
    const nodes = data || [];
    if (nodes.length) {
      // nodes.push({...nodes[0], isConnected: false})
    }
    return nodes
      .sort((a, b) => (a.isConnected !== b.isConnected ? b.isConnected - a.isConnected : b.lastConnectedAt - a.lastConnectedAt))
      .map((item) => [
        <NodeName name={item.name || "Untitled Device"} key={"Namee"} />,
        "Extension",
        <CountryIP country={item.countryCode} ip={item.ipAddress} key={"CountryIp"} />,
        <Status isConnected={Boolean(item.isConnected)} key={"status"} />,
        fmtDuration(_.toNumber(item.totalUptime) * 1000, "D[d] H[h] m[m]"),
        fmtNetqulity(item.lastPoint),
        fmtBerry(item.todayPoints, "-"),
        fmtBerry(item.totalPoints, "-"),
      ]);
  }, [data]);
  const pageChunks = useMemo(() => _.chunk(datas, 10), [datas]);
  const [page, setPage] = useState(1);
  return (
    <TitCard
      tit="My Nodes"
      className="w-full"
      right={
        <div className="flex gap-5 items-center">
          <IconBtn
            tip="Refresh Data"
            onClick={() => {
              if (!isFetching) refetch();
            }}
          >
            <RiRefreshLine className={cn({ "animate-spin": isFetching })} />
          </IconBtn>
          <AddNodeDialog />
        </div>
      }
    >
      <STable
        isLoading={isLoading}
        loadingContent={<Spinner />}
        empty="You currently have no running nodes. Click 'Add New Node' button, download and set up your node ready for the Season 1!"
        head={[
          "Node Name",
          "Node Type",
          "IP",
          "Status",
          <div className="flex items-center gap-1" key={"uptime"}>
            Uptime <HelpTip content="Uptime tells users how long a node has been available." />
          </div>,
          "Network Quality",
          <div className="flex items-center gap-1" key={"today"}>
            Today’s BERRY Rewards <HelpTip content="Today’s Network Rewards in BEERY amount." />
          </div>,
          "S1 Total BERRY",
        ]}
        data={pageChunks[page - 1] || []}
      />
      {pageChunks.length > 1 && (
        <div className="flex items-center">
          <Pagination className="mx-auto" total={pageChunks.length} page={page} onChange={setPage} />
        </div>
      )}
    </TitCard>
  );
}
