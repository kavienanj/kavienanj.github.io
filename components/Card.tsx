import Link from 'next/link';

type CardItem = {
  next?: string,
  title: string,
  description: string,
}

export default function Card(props: CardItem) {
  return (
    <Link href={props.next ?? ""}>
      <div className="cursor-pointer m-4 basis-[45%] p-6 text-left text-inherit no-underline border-solid border border-[#eaeaea] rounded-[10px] active:border-[#0070f3] focus:border-[#0070f3] hover:border-[#0070f3] active:text-[#0070f3] focus:text-[#0070f3] hover:text-[#0070f3] transition-colors ease-[cubic-bezier(0.25,0.1,0.25,0.1)] duration-150">
        <h3 className="mb-4 text-2xl leading-normal">{props.title} &rarr;</h3>
        <p className="m-0 text-xl leading-normal">{props.description}</p>
      </div>
    </Link>
  ); 
}
