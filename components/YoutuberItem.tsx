import { TYoutuber } from "@/types";
import Image from "next/image";
import Link from "next/link";

const YoutuberItem = ({ props }: { props: TYoutuber }) => {
  const { channelName, profileImage } = props;
  return (
    <Link href={`/y/${props.id}`}>
      <Image src={profileImage} width={100} height={100} alt={channelName} />
      <div>{channelName}</div>
    </Link>
  );
};

export default YoutuberItem;
