import { img_base_url, mine } from "./Config";
const people = [{
  name: 'Jay',
  role: 'Co-Founder / CEO',
  imageUrl: mine,
}, {
  name: 'Jay1',
  role: 'Co-Founder / CEO',
  imageUrl: mine,
}, {
  name: 'Jay2',
  role: 'Co-Founder / CEO',
  imageUrl: mine,
}, {
  name: 'Jay3',
  role: 'Co-Founder / CEO',
  imageUrl: mine,
}, {
  name: 'Jay4',
  role: 'Co-Founder / CEO',
  imageUrl: mine,
}, {
  name: 'Jay5',
  role: 'Co-Founder / CEO',
  imageUrl: mine,
}];

export default function Teams() {
  return (
    <div className=" py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-400 sm:text-4xl">Meet our leadership</h2>
          <p className="mt-6 text-lg leading-8 ">
            Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae elementum enim vitae ullamcorper
            suspendisse.
          </p>
        </div>
        <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
          {people.map((person) => (
            <li key={person.name}>
              <div className="flex items-center gap-x-6 bg-white px-2 py-1 rounded-full">
                <img className="h-16 w-16 rounded-full" src={`${img_base_url}${person.imageUrl}`} alt="" />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                  <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
