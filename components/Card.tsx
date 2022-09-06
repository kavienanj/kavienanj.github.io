import Link from 'next/link';

type CardItem = {
  next?: string,
  title: string,
  description: string,
}

export default function Card(props: CardItem) {
  return (
    <Link href={props.next ?? ""}>
      <div className="group cursor-pointer m-4 basis-[45%] p-6 text-left no-underline border-solid border border-[#eaeaea] rounded-[10px] active:border-[#0070f3] focus:border-[#0070f3] hover:border-[#0070f3] active:text-[#0070f3] focus:text-[#0070f3] hover:text-[#0070f3] transition-all ease-in-out duration-300">
        <p className="mb-4 text-2xl leading-normal">{props.title}
          <p className="inline-block text-black dark:text-white group-hover:translate-x-4 group-focus:translate-x-4 group-active:translate-x-4 group-hover:text-[#0070f3] group-focus:text-[#0070f3] group-active:text-[#0070f3] group-hover:scale-125 group-focus:scale-125 group-active:scale-125 ease-in-out duration-300">&nbsp;&rarr;</p>
        </p>
        <p className="m-0 text-xl leading-normal">{props.description}</p>
      </div>
    </Link>
  ); 
}
