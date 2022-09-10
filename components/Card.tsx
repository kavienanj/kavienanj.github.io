import Link from 'next/link';

type CardItem = {
  next?: string,
  title: string,
  description: string,
}

export default function Card(props: CardItem) {
  return (
    <Link href={props.next ?? ""}>
      <div className="group cursor-pointer m-4 basis-[45%] p-6 text-left no-underline border-solid border border-zinc-200 rounded-xl active:border-dark-blue focus:border-dark-blue hover:border-dark-blue active:text-dark-blue focus:text-dark-blue hover:text-dark-blue transition-colors ease-in-out duration-300">
        <h1 className="mb-4 text-2xl leading-normal">{props.title}
          <span className="inline-block text-black dark:text-white group-hover:translate-x-4 group-focus:translate-x-4 group-active:translate-x-4 group-hover:text-dark-blue group-focus:text-dark-blue group-active:text-dark-blue group-hover:scale-125 group-focus:scale-125 group-active:scale-125 ease-in-out duration-300">&nbsp;&nbsp;&rarr;</span>
        </h1>
        <p className="m-0 text-xl leading-normal font-light">{props.description}</p>
      </div>
    </Link>
  ); 
}
