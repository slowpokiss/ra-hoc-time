import Video from "./Video";

export default function VideoList(props: any) {
  return props.list.map((item: any, ind: number) => (
    <Video url={item.url} date={item.date} key={ind} />
  ));
}
